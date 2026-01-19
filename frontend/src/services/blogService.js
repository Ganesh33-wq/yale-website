import api from './api';

export const blogService = {
  // Get all blogs with pagination
  getAllBlogs: (params = {}) => {
    return api.get('/blogs', { params });
  },

  // Get single blog by slug
  getBlogBySlug: (slug) => {
    return api.get(`/blogs/${slug}`);
  },

  // Get all categories
  getAllCategories: () => {
    return api.get('/blogs/categories');
  },

  // Get recent blogs
  getRecentBlogs: (limit = 5) => {
    return api.get('/blogs/recent', { params: { limit } });
  },

  // Add comment to blog
  addComment: (slug, data) => {
    return api.post(`/blogs/${slug}/comments`, data);
  },
};

export default blogService;
