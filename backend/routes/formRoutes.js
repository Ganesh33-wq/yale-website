// Form Submission Routes
import express from 'express';
import {
  submitContact,
  getContactSubmissions,
  deleteContactSubmission,
  submitCourseInquiry,
  getCourseInquiries,
  deleteCourseInquiry,
  submitSyllabusDownload,
  getSyllabusDownloads,
  deleteSyllabusDownload,
  submitInternshipApplication,
  getInternshipApplications,
  deleteInternshipApplication,
  getFormStats
} from '../controllers/formController.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// ==================== PUBLIC ROUTES (Form Submissions) ====================

// Contact Form
router.post('/contact', submitContact);

// Course Inquiry
router.post('/course-inquiry', submitCourseInquiry);

// Syllabus Download
router.post('/syllabus-download', submitSyllabusDownload);

// Internship Application
router.post('/internship-application', submitInternshipApplication);

// ==================== ADMIN ROUTES (View & Delete) ====================

// Form Stats
router.get('/admin/form-stats', authenticateAdmin, getFormStats);

// Contact Submissions
router.get('/admin/contacts', authenticateAdmin, getContactSubmissions);
router.delete('/admin/contacts/:id', authenticateAdmin, deleteContactSubmission);

// Course Inquiries
router.get('/admin/course-inquiries', authenticateAdmin, getCourseInquiries);
router.delete('/admin/course-inquiries/:id', authenticateAdmin, deleteCourseInquiry);

// Syllabus Downloads
router.get('/admin/syllabus-downloads', authenticateAdmin, getSyllabusDownloads);
router.delete('/admin/syllabus-downloads/:id', authenticateAdmin, deleteSyllabusDownload);

// Internship Applications
router.get('/admin/internship-applications', authenticateAdmin, getInternshipApplications);
router.delete('/admin/internship-applications/:id', authenticateAdmin, deleteInternshipApplication);

export default router;
