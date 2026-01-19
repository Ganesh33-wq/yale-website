const { BlogPost, BlogCategory, BlogComment } = require('../models');
const { Op } = require('sequelize');

// Get all blog posts with pagination and filtering
exports.getAllBlogs = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const offset = (page - 1) * limit;
    const category = req.query.category;
    const search = req.query.search;

    let where = { status: 'published' };
    let include = [{
      model: BlogCategory,
      as: 'category',
      attributes: ['id', 'name', 'slug'],
    }];

    if (category) {
      const categoryDoc = await BlogCategory.findOne({ where: { slug: category } });
      if (categoryDoc) {
        where.categoryId = categoryDoc.id;
      }
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { summary: { [Op.like]: `%${search}%` } },
      ];
    }

    const { count, rows: blogs } = await BlogPost.findAndCountAll({
      where,
      include,
      order: [['createdAt', 'DESC']],
      offset,
      limit,
    });

    res.json({
      success: true,
      data: blogs,
      pagination: {
        page,
        limit,
        total: count,
        pages: Math.ceil(count / limit),
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blogs',
      error: error.message,
    });
  }
};

// Get single blog post by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await BlogPost.findOne({
      where: { slug: req.params.slug, status: 'published' },
      include: [{
        model: BlogCategory,
        as: 'category',
        attributes: ['id', 'name', 'slug'],
      }],
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }

    // Increment view count
    blog.viewCount += 1;
    await blog.save();

    // Get approved comments for this blog
    const comments = await BlogComment.findAll({
      where: { postId: blog.id, approved: true },
      order: [['createdAt', 'DESC']],
    });

    res.json({
      success: true,
      data: { ...blog.toJSON(), comments },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching blog',
      error: error.message,
    });
  }
};

// Get all blog categories
exports.getAllCategories = async (req, res) => {
  try {
    const categories = await BlogCategory.findAll({
      order: [['name', 'ASC']],
    });
    
    res.json({
      success: true,
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error.message,
    });
  }
};

// Add a comment to a blog post
exports.addComment = async (req, res) => {
  try {
    const { name, email, comment } = req.body;
    const postId = req.params.id;

    // Check if blog post exists
    const blog = await BlogPost.findByPk(postId);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog post not found',
      });
    }

    const newComment = await BlogComment.create({
      postId,
      name,
      email,
      comment,
      approved: false, // Comments need approval
    });

    res.status(201).json({
      success: true,
      message: 'Comment submitted successfully. It will be published after approval.',
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error adding comment',
      error: error.message,
    });
  }
};

// Get featured/recent blogs
exports.getFeaturedBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;

    const blogs = await BlogPost.findAll({
      where: { status: 'published' },
      include: [{
        model: BlogCategory,
        as: 'category',
        attributes: ['id', 'name', 'slug'],
      }],
      order: [['viewCount', 'DESC'], ['createdAt', 'DESC']],
      limit,
    });

    res.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching featured blogs',
      error: error.message,
    });
  }
};
