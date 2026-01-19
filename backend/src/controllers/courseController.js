const { Course } = require('../models');
const { Op } = require('sequelize');

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const search = req.query.search;
    const level = req.query.level;

    let where = { active: true };

    if (search) {
      where[Op.or] = [
        { title: { [Op.like]: `%${search}%` } },
        { description: { [Op.like]: `%${search}%` } },
      ];
    }

    if (level) {
      where.level = level;
    }

    const courses = await Course.findAll({
      where,
      order: [['createdAt', 'DESC']],
    });

    res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching courses',
      error: error.message,
    });
  }
};

// Get single course by slug
exports.getCourseBySlug = async (req, res) => {
  try {
    const course = await Course.findOne({
      where: { slug: req.params.slug, active: true },
    });

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found',
      });
    }

    res.json({
      success: true,
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching course',
      error: error.message,
    });
  }
};

// Get featured courses
exports.getFeaturedCourses = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;

    const courses = await Course.findAll({
      where: { active: true },
      order: [['createdAt', 'DESC']],
      limit,
    });

    res.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching featured courses',
      error: error.message,
    });
  }
};
