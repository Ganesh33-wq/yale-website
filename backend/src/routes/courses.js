const express = require('express');
const router = express.Router();
const {
  getAllCourses,
  getCourseBySlug,
} = require('../controllers/courseController');

// Course routes
router.get('/', getAllCourses);
router.get('/:slug', getCourseBySlug);

module.exports = router;
