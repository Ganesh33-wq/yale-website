import api from './api';

export const contactService = {
  // Submit contact form
  submitContact: (data) => {
    return api.post('/contact', data);
  },

  // Submit course inquiry
  submitCourseInquiry: (data) => {
    return api.post('/course-inquiry', data);
  },

  // Submit internship inquiry
  submitInternshipInquiry: (data) => {
    return api.post('/internship-inquiry', data);
  },

  // Request syllabus download
  downloadSyllabus: (data) => {
    return api.post('/syllabus-download', data);
  },
};

export default contactService;
