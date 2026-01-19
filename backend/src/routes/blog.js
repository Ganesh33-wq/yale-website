const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogBySlug,
  getAllCategories,
  addComment,
  getFeaturedBlogs,
} = require('../controllers/blogController');

// Blog routes
router.get('/', getAllBlogs);
router.get('/featured', getFeaturedBlogs);
router.get('/categories', getAllCategories);
router.get('/:slug', getBlogBySlug);
router.post('/:id/comments', addComment);

module.exports = router;
