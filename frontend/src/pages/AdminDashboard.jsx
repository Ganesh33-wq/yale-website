import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('blogs'); // 'blogs', 'internships', 'contacts', 'course-inquiries', 'syllabus-downloads', 'internship-applications'
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Blog state
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    excerpt: '',
    category: '',
    image: null,
    is_featured: false,
  });
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [imagePreview, setImagePreview] = useState(null);
  
  // Internship state
  const [internships, setInternships] = useState([]);
  const [internshipCategories, setInternshipCategories] = useState([]);
  const [showInternshipForm, setShowInternshipForm] = useState(false);
  const [editingInternship, setEditingInternship] = useState(null);
  const [internshipFormData, setInternshipFormData] = useState({
    title: '',
    slug: '',
    description: '',
    duration: '1 Week - 1 Month',
    icon: 'fab fa-python',
    badge: 'Popular',
    badge_type: 'normal',
    category_id: '',
    technologies: '',
    is_active: true,
    sort_order: 0,
  });

  // Form submissions state
  const [contacts, setContacts] = useState([]);
  const [courseInquiries, setCourseInquiries] = useState([]);
  const [syllabusDownloads, setSyllabusDownloads] = useState([]);
  const [internshipApplications, setInternshipApplications] = useState([]);
  const [formStats, setFormStats] = useState({ contacts: 0, inquiries: 0, downloads: 0, applications: 0 });

  // Check authentication
  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      navigate('/admin');
      return;
    }
    fetchBlogs();
    fetchCategories();
    fetchInternships();
    fetchInternshipCategories();
    fetchFormStats();
    fetchContacts();
    fetchCourseInquiries();
    fetchSyllabusDownloads();
    fetchInternshipApplications();
  }, [navigate]);

  // Close sidebar on tab change (mobile)
  useEffect(() => {
    setSidebarOpen(false);
  }, [activeTab]);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/categories', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setCategories(data.categories || []);
      }
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/blogs', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setBlogs(data.blogs || []);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  // Internship API calls
  const fetchInternships = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/internships', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (data.success) {
        setInternships(data.programs || []);
      }
    } catch (error) {
      console.error('Error fetching internships:', error);
    }
  };

  const fetchInternshipCategories = async () => {
    try {
      const response = await fetch('/api/internships/categories/');
      const data = await response.json();
      setInternshipCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching internship categories:', error);
    }
  };

  // Form submissions fetch functions
  const fetchFormStats = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/form-stats', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setFormStats(data.stats);
      }
    } catch (error) {
      console.error('Error fetching form stats:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/contacts', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setContacts(data.submissions || []);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchCourseInquiries = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/course-inquiries', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setCourseInquiries(data.inquiries || []);
      }
    } catch (error) {
      console.error('Error fetching course inquiries:', error);
    }
  };

  const fetchSyllabusDownloads = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/syllabus-downloads', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setSyllabusDownloads(data.downloads || []);
      }
    } catch (error) {
      console.error('Error fetching syllabus downloads:', error);
    }
  };

  const fetchInternshipApplications = async () => {
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch('/api/admin/internship-applications', {
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        setInternshipApplications(data.applications || []);
      }
    } catch (error) {
      console.error('Error fetching internship applications:', error);
    }
  };

  // Delete handlers for form submissions
  const handleDeleteContact = async (id) => {
    if (!window.confirm('Are you sure you want to delete this contact submission?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        fetchContacts();
        fetchFormStats();
        setMessage({ type: 'success', text: 'Contact deleted successfully!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting contact' });
    }
  };

  const handleDeleteCourseInquiry = async (id) => {
    if (!window.confirm('Are you sure you want to delete this course inquiry?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/course-inquiries/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        fetchCourseInquiries();
        fetchFormStats();
        setMessage({ type: 'success', text: 'Course inquiry deleted successfully!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting course inquiry' });
    }
  };

  const handleDeleteSyllabusDownload = async (id) => {
    if (!window.confirm('Are you sure you want to delete this syllabus download record?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/syllabus-downloads/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        fetchSyllabusDownloads();
        fetchFormStats();
        setMessage({ type: 'success', text: 'Download record deleted successfully!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting download record' });
    }
  };

  const handleDeleteInternshipApplication = async (id) => {
    if (!window.confirm('Are you sure you want to delete this internship application?')) return;
    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/internship-applications/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });
      const data = await response.json();
      if (data.success) {
        fetchInternshipApplications();
        fetchFormStats();
        setMessage({ type: 'success', text: 'Application deleted successfully!' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Error deleting application' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin');
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    setFormData({
      ...formData,
      title,
      slug: generateSlug(title),
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const token = localStorage.getItem('adminToken');
    const formDataToSend = new FormData();
    
    formDataToSend.append('title', formData.title);
    formDataToSend.append('slug', formData.slug);
    formDataToSend.append('content', formData.content);
    formDataToSend.append('excerpt', formData.excerpt);
    formDataToSend.append('category', formData.category);
    formDataToSend.append('is_featured', formData.is_featured);
    
    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      const url = editingBlog 
        ? `/api/admin/blogs/${editingBlog.id}`
        : '/api/admin/blogs';
      
      const response = await fetch(url, {
        method: editingBlog ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: editingBlog ? 'Blog updated successfully!' : 'Blog created successfully!' });
        setFormData({
          title: '',
          slug: '',
          content: '',
          excerpt: '',
          category: '',
          image: null,
          is_featured: false,
        });
        setImagePreview(null);
        setShowCreateForm(false);
        setEditingBlog(null);
        fetchBlogs();
      } else {
        setMessage({ type: 'error', text: data.message || 'Error saving blog' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Please try again.' });
      console.error('Error:', error);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      excerpt: blog.excerpt,
      category: blog.category,
      image: null,
      is_featured: blog.is_featured,
    });
    setImagePreview(blog.image ? `${blog.image}` : null);
    setShowCreateForm(true);
  };

  const handleDelete = async (blogId) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/blogs/${blogId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Blog deleted successfully!' });
        fetchBlogs();
      } else {
        setMessage({ type: 'error', text: data.message || 'Error deleting blog' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Please try again.' });
    }
  };

  const cancelEdit = () => {
    setShowCreateForm(false);
    setEditingBlog(null);
    setFormData({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      category: '',
      image: null,
      is_featured: false,
    });
    setImagePreview(null);
  };

  // Internship CRUD handlers
  const generateInternshipSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  };

  const handleInternshipTitleChange = (e) => {
    const title = e.target.value;
    setInternshipFormData({
      ...internshipFormData,
      title,
      slug: generateInternshipSlug(title),
    });
  };

  const handleInternshipSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const token = localStorage.getItem('adminToken');
    const dataToSend = {
      ...internshipFormData,
      technologies: internshipFormData.technologies.split(',').map(t => t.trim()).filter(t => t),
    };

    try {
      const url = editingInternship 
        ? `/api/admin/internships/${editingInternship.id}`
        : '/api/admin/internships';
      
      const response = await fetch(url, {
        method: editingInternship ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (data.success) {
        setMessage({ type: 'success', text: editingInternship ? 'Internship updated successfully!' : 'Internship created successfully!' });
        setInternshipFormData({
          title: '',
          slug: '',
          description: '',
          duration: '1 Week - 1 Month',
          icon: 'fab fa-python',
          badge: 'Popular',
          badge_type: 'normal',
          category_id: '',
          technologies: '',
          is_active: true,
          sort_order: 0,
        });
        setShowInternshipForm(false);
        setEditingInternship(null);
        fetchInternships();
      } else {
        setMessage({ type: 'error', text: data.message || 'Error saving internship' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Please try again.' });
      console.error('Error:', error);
    }
  };

  const handleInternshipEdit = (internship) => {
    setEditingInternship(internship);
    setInternshipFormData({
      title: internship.title,
      slug: internship.slug,
      description: internship.description,
      duration: internship.duration,
      icon: internship.icon,
      badge: internship.badge,
      badge_type: internship.badge_type || 'normal',
      category_id: internship.category_id,
      technologies: Array.isArray(internship.technologies) ? internship.technologies.join(', ') : internship.technologies,
      is_active: internship.is_active,
      sort_order: internship.sort_order,
    });
    setShowInternshipForm(true);
  };

  const handleInternshipDelete = async (internshipId) => {
    if (!window.confirm('Are you sure you want to delete this internship?')) return;

    try {
      const token = localStorage.getItem('adminToken');
      const response = await fetch(`/api/admin/internships/${internshipId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      const data = await response.json();
      if (data.success) {
        setMessage({ type: 'success', text: 'Internship deleted successfully!' });
        fetchInternships();
      } else {
        setMessage({ type: 'error', text: data.message || 'Error deleting internship' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Server error. Please try again.' });
    }
  };

  const cancelInternshipEdit = () => {
    setShowInternshipForm(false);
    setEditingInternship(null);
    setInternshipFormData({
      title: '',
      slug: '',
      description: '',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-python',
      badge: 'Popular',
      badge_type: 'normal',
      category_id: '',
      technologies: '',
      is_active: true,
      sort_order: 0,
    });
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="admin-container">
      {/* Mobile Menu Toggle */}
      <button 
        className="mobile-menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle menu"
      >
        {sidebarOpen ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Sidebar Overlay */}
      <div 
        className={`sidebar-overlay ${sidebarOpen ? 'active' : ''}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="logo-wrapper">
            <img 
              src="/static/images/yale-it-logo.png" 
              alt="Yale IT Skill Hub" 
              className="sidebar-logo-img"
            />
          </div>
        </div>
        <nav className="admin-nav">
          <div className="nav-section">
            <span className="nav-section-title">MANAGEMENT</span>
            <button 
              onClick={() => setActiveTab('blogs')}
              className={`nav-item ${activeTab === 'blogs' ? 'active' : ''}`}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
              Blog Posts
              <span className="nav-badge">{blogs.length}</span>
            </button>
            <button 
              onClick={() => setActiveTab('internships')}
              className={`nav-item ${activeTab === 'internships' ? 'active' : ''}`}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
              </svg>
              Internships
              <span className="nav-badge">{internships.length}</span>
            </button>
          </div>
          <div className="nav-section">
            <span className="nav-section-title">FORM SUBMISSIONS</span>
            <button 
              onClick={() => setActiveTab('contacts')}
              className={`nav-item ${activeTab === 'contacts' ? 'active' : ''}`}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Contact Forms
              <span className="nav-badge">{formStats.contacts}</span>
            </button>
            <button 
              onClick={() => setActiveTab('course-inquiries')}
              className={`nav-item ${activeTab === 'course-inquiries' ? 'active' : ''}`}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              Course Inquiries
              <span className="nav-badge">{formStats.inquiries}</span>
            </button>
            <button 
              onClick={() => setActiveTab('syllabus-downloads')}
              className={`nav-item ${activeTab === 'syllabus-downloads' ? 'active' : ''}`}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Syllabus Downloads
              <span className="nav-badge">{formStats.downloads}</span>
            </button>
            <button 
              onClick={() => setActiveTab('internship-applications')}
              className={`nav-item ${activeTab === 'internship-applications' ? 'active' : ''}`}
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
              </svg>
              Applications
              <span className="nav-badge">{formStats.applications}</span>
            </button>
          </div>
          <div className="nav-section">
            <span className="nav-section-title">QUICK LINKS</span>
            <a href="/" className="nav-item" target="_blank" rel="noopener noreferrer">
              <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
              View Website
            </a>
          </div>
        </nav>
        <div className="sidebar-footer">
          <div className="user-info">
            <div className="user-avatar">A</div>
            <div className="user-details">
              <span className="user-name">Admin</span>
              <span className="user-role">Administrator</span>
            </div>
          </div>
          <button onClick={handleLogout} className="logout-btn">
            <svg className="logout-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
              <polyline points="16 17 21 12 16 7"></polyline>
              <line x1="21" y1="12" x2="9" y2="12"></line>
            </svg>
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-main">
        {message.text && (
          <div className={`admin-message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Blogs Tab */}
        {activeTab === 'blogs' && (
          <>
            <div className="admin-header">
              <h1 className="page-title">Blog Management</h1>
              <button 
                onClick={() => { setShowCreateForm(true); setEditingBlog(null); }}
                className="create-btn"
              >
                + Create New Blog
              </button>
            </div>

            {/* Create/Edit Blog Form */}
            {showCreateForm && (
              <div className="form-container">
                <div className="form-header">
                  <h2 className="form-title">{editingBlog ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
                  <button onClick={cancelEdit} className="close-btn">✕</button>
                </div>
                
                <form onSubmit={handleSubmit} className="admin-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Title *</label>
                      <input
                        type="text"
                        value={formData.title}
                        onChange={handleTitleChange}
                        className="form-input"
                        placeholder="Enter blog title"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Slug</label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                        className="form-input"
                        placeholder="auto-generated-slug"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Category *</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="form-select"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.id || cat.slug} value={cat.name || cat}>{cat.name || cat}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Featured Image</label>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="form-file"
                      />
                      {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="image-preview" />
                      )}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Excerpt *</label>
                    <textarea
                      value={formData.excerpt}
                      onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                      className="form-textarea"
                      rows="3"
                      placeholder="Short description of the blog post"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Content *</label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      className="form-textarea"
                      rows="12"
                      placeholder="Write your blog content here... (HTML supported)"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={formData.is_featured}
                        onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                        className="form-checkbox"
                      />
                      Featured Post
                    </label>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={cancelEdit} className="cancel-btn">
                      Cancel
                    </button>
                    <button type="submit" className="submit-btn">
                      {editingBlog ? 'Update Blog' : 'Create Blog'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Blog List */}
            <div className="list-container">
              <h2 className="section-title">All Blog Posts ({blogs.length})</h2>
              
              {blogs.length === 0 ? (
                <div className="empty-state">
                  <p>No blog posts yet. Create your first blog post!</p>
                </div>
              ) : (
                <div className="admin-table">
                  <div className="table-header">
                    <div className="table-cell">Image</div>
                    <div className="table-cell title-cell">Title</div>
                    <div className="table-cell">Category</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {blogs.map((blog) => (
                    <div key={blog.id} className="table-row">
                      <div className="table-cell" data-label="Image">
                        <img 
                          src={blog.image ? `${blog.image}` : '/static/media/blog/default.jpg'} 
                          alt={blog.title}
                          className="blog-thumb"
                        />
                      </div>
                      <div className="table-cell title-cell" data-label="Title">
                        <span>
                          <strong>{blog.title}</strong>
                          {blog.is_featured && <span className="featured-badge">Featured</span>}
                        </span>
                      </div>
                      <div className="table-cell" data-label="Category">
                        <span>{blog.category}</span>
                      </div>
                      <div className="table-cell" data-label="Date">
                        <span>{new Date(blog.created_at).toLocaleDateString()}</span>
                      </div>
                      <div className="table-cell" data-label="Actions">
                        <button onClick={() => handleEdit(blog)} className="edit-btn">Edit</button>
                        <button onClick={() => handleDelete(blog.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Internships Tab */}
        {activeTab === 'internships' && (
          <>
            <div className="admin-header">
              <h1 className="page-title">Internship Programs</h1>
              <button 
                onClick={() => { setShowInternshipForm(true); setEditingInternship(null); }}
                className="create-btn"
              >
                + Add New Program
              </button>
            </div>

            {/* Create/Edit Internship Form */}
            {showInternshipForm && (
              <div className="form-container">
                <div className="form-header">
                  <h2 className="form-title">{editingInternship ? 'Edit Internship' : 'Add New Internship'}</h2>
                  <button onClick={cancelInternshipEdit} className="close-btn">✕</button>
                </div>
                
                <form onSubmit={handleInternshipSubmit} className="admin-form">
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label">Title *</label>
                      <input
                        type="text"
                        value={internshipFormData.title}
                        onChange={handleInternshipTitleChange}
                        className="form-input"
                        placeholder="e.g., Full Stack Python"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Slug</label>
                      <input
                        type="text"
                        value={internshipFormData.slug}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, slug: e.target.value })}
                        className="form-input"
                        placeholder="auto-generated-slug"
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Category *</label>
                      <select
                        value={internshipFormData.category_id}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, category_id: e.target.value })}
                        className="form-select"
                        required
                      >
                        <option value="">Select Category</option>
                        {internshipCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Duration *</label>
                      <input
                        type="text"
                        value={internshipFormData.duration}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, duration: e.target.value })}
                        className="form-input"
                        placeholder="e.g., 1 Week - 1 Month"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Icon Class *</label>
                      <input
                        type="text"
                        value={internshipFormData.icon}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, icon: e.target.value })}
                        className="form-input"
                        placeholder="e.g., fab fa-python"
                        required
                      />
                      <small className="help-text">Use FontAwesome classes (fab fa-*, fas fa-*)</small>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Badge Text *</label>
                      <input
                        type="text"
                        value={internshipFormData.badge}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, badge: e.target.value })}
                        className="form-input"
                        placeholder="e.g., Most Popular, Trending"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Badge Type</label>
                      <select
                        value={internshipFormData.badge_type}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, badge_type: e.target.value })}
                        className="form-select"
                      >
                        <option value="normal">Normal</option>
                        <option value="hot">Hot (Red)</option>
                        <option value="trending">Trending (Blue)</option>
                      </select>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">Sort Order</label>
                      <input
                        type="number"
                        value={internshipFormData.sort_order}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, sort_order: parseInt(e.target.value) || 0 })}
                        className="form-input"
                        placeholder="0"
                      />
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Description *</label>
                    <textarea
                      value={internshipFormData.description}
                      onChange={(e) => setInternshipFormData({ ...internshipFormData, description: e.target.value })}
                      className="form-textarea"
                      rows="3"
                      placeholder="Brief description of the internship program"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="form-label">Technologies * (comma separated)</label>
                    <input
                      type="text"
                      value={internshipFormData.technologies}
                      onChange={(e) => setInternshipFormData({ ...internshipFormData, technologies: e.target.value })}
                      className="form-input"
                      placeholder="e.g., Django, Flask, HTML/CSS, JavaScript"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={internshipFormData.is_active}
                        onChange={(e) => setInternshipFormData({ ...internshipFormData, is_active: e.target.checked })}
                        className="form-checkbox"
                      />
                      Active (visible on website)
                    </label>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={cancelInternshipEdit} className="cancel-btn">
                      Cancel
                    </button>
                    <button type="submit" className="submit-btn">
                      {editingInternship ? 'Update Program' : 'Add Program'}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Internship List */}
            <div className="list-container">
              <h2 className="section-title">All Internship Programs ({internships.length})</h2>
              
              {internships.length === 0 ? (
                <div className="empty-state">
                  <p>No internship programs yet. Add your first program!</p>
                </div>
              ) : (
                <div className="admin-table">
                  <div className="table-header">
                    <div className="table-cell">Icon</div>
                    <div className="table-cell title-cell">Title</div>
                    <div className="table-cell">Category</div>
                    <div className="table-cell">Badge</div>
                    <div className="table-cell">Status</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {internships.map((prog) => (
                    <div key={prog.id} className="table-row">
                      <div className="table-cell" data-label="Icon">
                        <div className="icon-preview">
                          <i className={prog.icon}></i>
                        </div>
                      </div>
                      <div className="table-cell title-cell" data-label="Title">
                        <strong>{prog.title}</strong>
                      </div>
                      <div className="table-cell" data-label="Category">{prog.category?.name || 'N/A'}</div>
                      <div className="table-cell" data-label="Badge">
                        <span className={`badge-preview ${prog.badge_type === 'hot' ? 'hot' : prog.badge_type === 'trending' ? 'trending' : 'default'}`}>
                          {prog.badge}
                        </span>
                      </div>
                      <div className="table-cell" data-label="Status">
                        <span className={`status-badge ${prog.is_active ? 'active' : 'inactive'}`}>
                          {prog.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </div>
                      <div className="table-cell" data-label="Actions">
                        <button onClick={() => handleInternshipEdit(prog)} className="edit-btn">Edit</button>
                        <button onClick={() => handleInternshipDelete(prog.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Contacts Tab */}
        {activeTab === 'contacts' && (
          <>
            <div className="content-header">
              <h1 className="page-title">Contact Form Submissions</h1>
            </div>
            <div className="list-container">
              <h2 className="section-title">All Contact Submissions ({contacts.length})</h2>
              
              {contacts.length === 0 ? (
                <div className="empty-state">
                  <p>No contact submissions yet.</p>
                </div>
              ) : (
                <div className="admin-table">
                  <div className="table-header">
                    <div className="table-cell">Name</div>
                    <div className="table-cell">Email</div>
                    <div className="table-cell">Phone</div>
                    <div className="table-cell">Subject</div>
                    <div className="table-cell">Message</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {contacts.map((contact) => (
                    <div key={contact.id} className="table-row">
                      <div className="table-cell" data-label="Name"><strong>{contact.name}</strong></div>
                      <div className="table-cell" data-label="Email">{contact.email}</div>
                      <div className="table-cell" data-label="Phone">{contact.phone || '-'}</div>
                      <div className="table-cell" data-label="Subject">{contact.subject || '-'}</div>
                      <div className="table-cell" data-label="Message">
                        <span className="message-preview" title={contact.message}>
                          {contact.message?.substring(0, 50)}{contact.message?.length > 50 ? '...' : ''}
                        </span>
                      </div>
                      <div className="table-cell" data-label="Date">
                        {new Date(contact.created_at).toLocaleDateString()}
                      </div>
                      <div className="table-cell" data-label="Actions">
                        <button onClick={() => handleDeleteContact(contact.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Course Inquiries Tab */}
        {activeTab === 'course-inquiries' && (
          <>
            <div className="content-header">
              <h1 className="page-title">Course Inquiries</h1>
            </div>
            <div className="list-container">
              <h2 className="section-title">All Course Inquiries ({courseInquiries.length})</h2>
              
              {courseInquiries.length === 0 ? (
                <div className="empty-state">
                  <p>No course inquiries yet.</p>
                </div>
              ) : (
                <div className="admin-table">
                  <div className="table-header">
                    <div className="table-cell">Name</div>
                    <div className="table-cell">Email</div>
                    <div className="table-cell">Phone</div>
                    <div className="table-cell">Course</div>
                    <div className="table-cell">Message</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {courseInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="table-row">
                      <div className="table-cell" data-label="Name"><strong>{inquiry.name}</strong></div>
                      <div className="table-cell" data-label="Email">{inquiry.email}</div>
                      <div className="table-cell" data-label="Phone">{inquiry.phone}</div>
                      <div className="table-cell" data-label="Course">{inquiry.course || '-'}</div>
                      <div className="table-cell" data-label="Message">
                        <span className="message-preview" title={inquiry.message}>
                          {inquiry.message?.substring(0, 50)}{inquiry.message?.length > 50 ? '...' : ''}
                        </span>
                      </div>
                      <div className="table-cell" data-label="Date">
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </div>
                      <div className="table-cell" data-label="Actions">
                        <button onClick={() => handleDeleteCourseInquiry(inquiry.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Syllabus Downloads Tab */}
        {activeTab === 'syllabus-downloads' && (
          <>
            <div className="content-header">
              <h1 className="page-title">Syllabus Download Requests</h1>
            </div>
            <div className="list-container">
              <h2 className="section-title">All Syllabus Downloads ({syllabusDownloads.length})</h2>
              
              {syllabusDownloads.length === 0 ? (
                <div className="empty-state">
                  <p>No syllabus download requests yet.</p>
                </div>
              ) : (
                <div className="admin-table">
                  <div className="table-header">
                    <div className="table-cell">Name</div>
                    <div className="table-cell">Email</div>
                    <div className="table-cell">Phone</div>
                    <div className="table-cell">Course</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {syllabusDownloads.map((download) => (
                    <div key={download.id} className="table-row">
                      <div className="table-cell" data-label="Name"><strong>{download.name}</strong></div>
                      <div className="table-cell" data-label="Email">{download.email}</div>
                      <div className="table-cell" data-label="Phone">{download.phone}</div>
                      <div className="table-cell" data-label="Course">{download.course || '-'}</div>
                      <div className="table-cell" data-label="Date">
                        {new Date(download.created_at).toLocaleDateString()}
                      </div>
                      <div className="table-cell" data-label="Actions">
                        <button onClick={() => handleDeleteSyllabusDownload(download.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}

        {/* Internship Applications Tab */}
        {activeTab === 'internship-applications' && (
          <>
            <div className="content-header">
              <h1 className="page-title">Internship Applications</h1>
            </div>
            <div className="list-container">
              <h2 className="section-title">All Applications ({internshipApplications.length})</h2>
              
              {internshipApplications.length === 0 ? (
                <div className="empty-state">
                  <p>No internship applications yet.</p>
                </div>
              ) : (
                <div className="admin-table">
                  <div className="table-header">
                    <div className="table-cell">Name</div>
                    <div className="table-cell">Email</div>
                    <div className="table-cell">Phone</div>
                    <div className="table-cell">College</div>
                    <div className="table-cell">City</div>
                    <div className="table-cell">Program</div>
                    <div className="table-cell">Duration</div>
                    <div className="table-cell">Students</div>
                    <div className="table-cell">Date</div>
                    <div className="table-cell">Actions</div>
                  </div>
                  {internshipApplications.map((app) => (
                    <div key={app.id} className="table-row">
                      <div className="table-cell" data-label="Name"><strong>{app.name}</strong></div>
                      <div className="table-cell" data-label="Email">{app.email}</div>
                      <div className="table-cell" data-label="Phone">{app.phone}</div>
                      <div className="table-cell" data-label="College">{app.college || '-'}</div>
                      <div className="table-cell" data-label="City">{app.city || '-'}</div>
                      <div className="table-cell" data-label="Program">{app.program || '-'}</div>
                      <div className="table-cell" data-label="Duration">{app.duration || '-'}</div>
                      <div className="table-cell" data-label="Students">{app.students || 1}</div>
                      <div className="table-cell" data-label="Date">
                        {new Date(app.created_at).toLocaleDateString()}
                      </div>
                      <div className="table-cell" data-label="Actions">
                        <button onClick={() => handleDeleteInternshipApplication(app.id)} className="delete-btn">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
