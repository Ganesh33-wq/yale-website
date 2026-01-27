// COPILOT: Route registry mirroring Django urls.py. TODO: add routes matching every Django path (including trailing slashes).
import { Router } from 'express';
import { getHome } from '../controllers/exampleController.js';
import { getBlogList, getBlogDetail, getCategories_API } from '../controllers/blogController.js';
import { getCourse, getAllCourses } from '../controllers/courseController.js';
import { 
  getInternshipCategories, 
  getInternshipPrograms, 
  getAllInternships,
  createInternship, 
  updateInternship, 
  deleteInternship 
} from '../controllers/internshipController.js';
import { 
  adminLogin, 
  getAdminBlogs,
  getAdminCategories,
  createBlog, 
  updateBlog, 
  deleteBlog, 
  authMiddleware,
  upload 
} from '../controllers/adminController.js';
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

const router = Router();

router.get('/home/', getHome);

// Blog routes
router.get('/blog/', getBlogList);
router.get('/blog/categories/', getCategories_API);
router.get('/blog/:slug/', getBlogDetail);

// Course routes
router.get('/courses/', getAllCourses);
router.get('/course/:slug/', getCourse);

// Internship routes (public)
router.get('/internships/', getInternshipPrograms);
router.get('/internships/categories/', getInternshipCategories);

// Admin routes
router.post('/admin/login', adminLogin);
router.get('/admin/blogs', authMiddleware, getAdminBlogs);
router.get('/admin/categories', authMiddleware, getAdminCategories);
router.post('/admin/blogs', authMiddleware, upload.single('image'), createBlog);
router.put('/admin/blogs/:id', authMiddleware, upload.single('image'), updateBlog);
router.delete('/admin/blogs/:id', authMiddleware, deleteBlog);

// Admin internship routes
router.get('/admin/internships', authMiddleware, getAllInternships);
router.get('/admin/internship-categories', authMiddleware, getInternshipCategories);
router.post('/admin/internships', authMiddleware, createInternship);
router.put('/admin/internships/:id', authMiddleware, updateInternship);
router.delete('/admin/internships/:id', authMiddleware, deleteInternship);

// ==================== FORM SUBMISSION ROUTES ====================

// Public form submissions
router.post('/contact', submitContact);
router.post('/course-inquiry', submitCourseInquiry);
router.post('/syllabus-download', submitSyllabusDownload);
router.post('/internship-application', submitInternshipApplication);

// Admin form management routes
router.get('/admin/form-stats', authMiddleware, getFormStats);
router.get('/admin/contacts', authMiddleware, getContactSubmissions);
router.delete('/admin/contacts/:id', authMiddleware, deleteContactSubmission);
router.get('/admin/course-inquiries', authMiddleware, getCourseInquiries);
router.delete('/admin/course-inquiries/:id', authMiddleware, deleteCourseInquiry);
router.get('/admin/syllabus-downloads', authMiddleware, getSyllabusDownloads);
router.delete('/admin/syllabus-downloads/:id', authMiddleware, deleteSyllabusDownload);
router.get('/admin/internship-applications', authMiddleware, getInternshipApplications);
router.delete('/admin/internship-applications/:id', authMiddleware, deleteInternshipApplication);

// TODO: router.get('/about/', controller.about)

export default router;
