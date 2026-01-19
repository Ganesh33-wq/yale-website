import api from './api';

export const courseService = {
  // Get all courses
  getAllCourses: () => {
    return api.get('/courses');
  },

  // Get single course by slug
  getCourseBySlug: (slug) => {
    return api.get(`/courses/${slug}`);
  },
};

export default courseService;
