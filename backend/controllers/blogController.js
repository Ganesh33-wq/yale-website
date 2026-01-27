// Blog Controller - SQLite Database
import db from '../database/db.js';

// Get all categories
export const getCategories_API = (req, res) => {
  try {
    const categories = db.prepare(`
      SELECT c.*, COUNT(b.id) as post_count 
      FROM categories c 
      LEFT JOIN blogs b ON c.id = b.category_id 
      GROUP BY c.id
    `).all();
    
    res.json({ categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Get blog list with pagination, filtering, and search
export const getBlogList = (req, res) => {
  try {
    const { category, q, page = 1 } = req.query;
    const pageNum = parseInt(page) || 1;
    const perPage = 9;
    const offset = (pageNum - 1) * perPage;
    
    // Build query
    let whereClause = '';
    const params = [];
    
    if (category) {
      whereClause += ' AND c.slug = ?';
      params.push(category);
    }
    
    if (q) {
      whereClause += ' AND (b.title LIKE ? OR b.excerpt LIKE ? OR b.content LIKE ?)';
      const searchTerm = `%${q}%`;
      params.push(searchTerm, searchTerm, searchTerm);
    }
    
    // Get total count
    const countQuery = `
      SELECT COUNT(*) as total 
      FROM blogs b 
      LEFT JOIN categories c ON b.category_id = c.id 
      WHERE 1=1 ${whereClause}
    `;
    const totalCount = db.prepare(countQuery).get(...params).total;
    
    // Get blogs with pagination
    const blogsQuery = `
      SELECT b.*, c.name as category_name, c.slug as category_slug
      FROM blogs b 
      LEFT JOIN categories c ON b.category_id = c.id 
      WHERE 1=1 ${whereClause}
      ORDER BY b.created_at DESC
      LIMIT ? OFFSET ?
    `;
    const blogs = db.prepare(blogsQuery).all(...params, perPage, offset);
    
    // Format blogs for frontend
    const formattedBlogs = blogs.map(blog => ({
      id: blog.id,
      title: blog.title,
      slug: blog.slug,
      summary: blog.excerpt || '',
      content: blog.content || '',
      featured_image: blog.featured_image || '/static/media/blog/images/default.jpg',
      category: blog.category_name ? {
        name: blog.category_name,
        slug: blog.category_slug
      } : null,
      author: {
        name: blog.author || 'Yale Admin',
        title: 'Administrator',
        avatar: '/static/media/users/default-avatar.svg'
      },
      created_at: new Date(blog.created_at).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }),
      view_count: blog.views || 0
    }));
    
    // Get categories for filter dropdown
    const categories = db.prepare(`
      SELECT c.name, c.slug, COUNT(b.id) as post_count 
      FROM categories c 
      LEFT JOIN blogs b ON c.id = b.category_id 
      GROUP BY c.id
    `).all();
    
    // Pagination info
    const totalPages = Math.ceil(totalCount / perPage) || 1;
    const startIndex = offset + 1;
    const endIndex = Math.min(offset + perPage, totalCount);
    
    res.json({
      posts: formattedBlogs,
      categories: categories.map(c => ({ name: c.name, slug: c.slug })),
      current_category: category || '',
      search_query: q || '',
      pagination: {
        current_page: pageNum,
        total_pages: totalPages,
        total_count: totalCount,
        has_previous: pageNum > 1,
        has_next: pageNum < totalPages,
        previous_page: pageNum - 1,
        next_page: pageNum + 1,
        start_index: totalCount > 0 ? startIndex : 0,
        end_index: endIndex
      }
    });
  } catch (error) {
    console.error('Error fetching blog list:', error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// Get single blog by slug
export const getBlogDetail = (req, res) => {
  try {
    const { slug } = req.params;
    
    // Get blog
    const blog = db.prepare(`
      SELECT b.*, c.name as category_name, c.slug as category_slug
      FROM blogs b 
      LEFT JOIN categories c ON b.category_id = c.id 
      WHERE b.slug = ?
    `).get(slug);
    
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    
    // Increment view count
    db.prepare('UPDATE blogs SET views = views + 1 WHERE id = ?').run(blog.id);
    
    // Get related posts (same category, exclude current)
    const relatedPosts = db.prepare(`
      SELECT b.*, c.name as category_name, c.slug as category_slug
      FROM blogs b 
      LEFT JOIN categories c ON b.category_id = c.id 
      WHERE b.category_id = ? AND b.id != ?
      ORDER BY b.created_at DESC
      LIMIT 3
    `).all(blog.category_id, blog.id);
    
    // Get recent posts
    const recentPosts = db.prepare(`
      SELECT b.*, c.name as category_name, c.slug as category_slug
      FROM blogs b 
      LEFT JOIN categories c ON b.category_id = c.id 
      WHERE b.id != ?
      ORDER BY b.created_at DESC
      LIMIT 5
    `).all(blog.id);
    
    // Format blog function
    const formatBlog = (b) => ({
      id: b.id,
      title: b.title,
      slug: b.slug,
      summary: b.excerpt || '',
      content: b.content || '',
      featured_image: b.featured_image || '/static/media/blog/images/default.jpg',
      category: b.category_name ? {
        name: b.category_name,
        slug: b.category_slug
      } : null,
      author: {
        name: b.author || 'Yale Admin',
        title: 'Administrator',
        avatar: '/static/media/users/default-avatar.svg'
      },
      created_at: new Date(b.created_at).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      }),
      view_count: b.views || 0
    });
    
    res.json({
      post: formatBlog(blog),
      related_posts: relatedPosts.map(formatBlog),
      recent_posts: recentPosts.map(formatBlog),
      categories: db.prepare('SELECT name, slug FROM categories').all()
    });
  } catch (error) {
    console.error('Error fetching blog detail:', error);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

export default { getBlogList, getBlogDetail, getCategories_API };
