// Admin Controller - SQLite Database
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import db from '../database/db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Admin credentials
const ADMIN_CREDENTIALS = {
  username: 'yaleadmin',
  password: 'yale@123',
};

// Simple token (in production, use JWT)
const ADMIN_TOKEN = 'yale-admin-token-2026';

// Uploads directory
const UPLOADS_DIR = path.join(__dirname, '../uploads/blog');

// Ensure upload directory exists
if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

// Configure multer for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

export const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed!'));
  }
});

// Auth middleware
export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, message: 'Unauthorized' });
  }
  const token = authHeader.split(' ')[1];
  if (token !== ADMIN_TOKEN) {
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
  next();
};

// Login controller
export const adminLogin = (req, res) => {
  const { username, password } = req.body;
  
  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    res.json({
      success: true,
      token: ADMIN_TOKEN,
      user: { username: ADMIN_CREDENTIALS.username },
    });
  } else {
    res.status(401).json({
      success: false,
      message: 'Invalid username or password',
    });
  }
};

// Get all categories (for dropdown)
export const getAdminCategories = (req, res) => {
  try {
    const categories = db.prepare('SELECT * FROM categories ORDER BY name').all();
    res.json({ success: true, categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ success: false, message: 'Error fetching categories' });
  }
};

// Get all blogs (admin)
export const getAdminBlogs = (req, res) => {
  try {
    const blogs = db.prepare(`
      SELECT b.*, c.name as category_name 
      FROM blogs b 
      LEFT JOIN categories c ON b.category_id = c.id 
      ORDER BY b.created_at DESC
    `).all();
    
    res.json({
      success: true,
      blogs: blogs.map(blog => ({
        id: blog.id,
        title: blog.title,
        slug: blog.slug,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category_name,
        category_id: blog.category_id,
        image: blog.featured_image,
        author: blog.author,
        is_featured: blog.is_featured === 1,
        views: blog.views,
        created_at: blog.created_at,
        updated_at: blog.updated_at
      }))
    });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ success: false, message: 'Error fetching blogs' });
  }
};

// Create blog
export const createBlog = (req, res) => {
  try {
    const { title, slug, content, excerpt, category, is_featured } = req.body;
    
    // Check for duplicate slug
    const existing = db.prepare('SELECT id FROM blogs WHERE slug = ?').get(slug);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'A blog with this slug already exists',
      });
    }
    
    // Get category ID
    let categoryId = null;
    if (category) {
      const cat = db.prepare('SELECT id FROM categories WHERE name = ? OR slug = ?').get(category, category);
      categoryId = cat ? cat.id : null;
    }
    
    const imagePath = req.file ? `/uploads/blog/${req.file.filename}` : null;
    const featured = is_featured === 'true' || is_featured === true ? 1 : 0;
    
    const result = db.prepare(`
      INSERT INTO blogs (title, slug, excerpt, content, featured_image, category_id, author, is_featured)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).run(title, slug, excerpt, content, imagePath, categoryId, 'Yale Admin', featured);
    
    res.json({
      success: true,
      message: 'Blog created successfully',
      blog: { id: result.lastInsertRowid, title, slug }
    });
  } catch (error) {
    console.error('Error creating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating blog: ' + error.message,
    });
  }
};

// Update blog
export const updateBlog = (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, content, excerpt, category, is_featured } = req.body;
    
    // Check blog exists
    const blog = db.prepare('SELECT * FROM blogs WHERE id = ?').get(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Check for duplicate slug (excluding current blog)
    const existing = db.prepare('SELECT id FROM blogs WHERE slug = ? AND id != ?').get(slug, id);
    if (existing) {
      return res.status(400).json({
        success: false,
        message: 'A blog with this slug already exists',
      });
    }
    
    // Get category ID
    let categoryId = null;
    if (category) {
      const cat = db.prepare('SELECT id FROM categories WHERE name = ? OR slug = ?').get(category, category);
      categoryId = cat ? cat.id : null;
    }
    
    const featured = is_featured === 'true' || is_featured === true ? 1 : 0;
    let imagePath = blog.featured_image;
    
    if (req.file) {
      // Delete old image if exists
      if (blog.featured_image) {
        const oldImagePath = path.join(__dirname, '..', blog.featured_image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }
      imagePath = `/uploads/blog/${req.file.filename}`;
    }
    
    db.prepare(`
      UPDATE blogs 
      SET title = ?, slug = ?, excerpt = ?, content = ?, featured_image = ?, 
          category_id = ?, is_featured = ?, updated_at = CURRENT_TIMESTAMP
      WHERE id = ?
    `).run(title, slug, excerpt, content, imagePath, categoryId, featured, id);
    
    res.json({
      success: true,
      message: 'Blog updated successfully',
    });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error updating blog',
    });
  }
};

// Delete blog
export const deleteBlog = (req, res) => {
  try {
    const { id } = req.params;
    
    // Check blog exists
    const blog = db.prepare('SELECT * FROM blogs WHERE id = ?').get(id);
    if (!blog) {
      return res.status(404).json({
        success: false,
        message: 'Blog not found',
      });
    }
    
    // Delete image if exists
    if (blog.featured_image) {
      const imagePath = path.join(__dirname, '..', blog.featured_image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
    
    db.prepare('DELETE FROM blogs WHERE id = ?').run(id);
    
    res.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting blog',
    });
  }
};

export default {
  authMiddleware,
  adminLogin,
  getAdminBlogs,
  getAdminCategories,
  createBlog,
  updateBlog,
  deleteBlog,
  upload
};
