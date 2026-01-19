const express = require('express');
const router = express.Router();
const {
  submitContactForm,
  submitCourseInquiry,
  submitInternshipInquiry,
  downloadSyllabus,
} = require('../controllers/contactController');

// Contact routes
router.post('/contact', submitContactForm);
router.post('/course-inquiry', submitCourseInquiry);
router.post('/internship-inquiry', submitInternshipInquiry);
router.post('/syllabus-download', downloadSyllabus);

module.exports = router;
