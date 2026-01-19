import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../styles/CourseBanner.css';

const CourseBanner = ({ courseTitle, courseName, courseType = 'course' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: courseName
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      await axios.post('/api/course-inquiry/', formData);
      setMessage({ text: 'Thank you! We will contact you soon.', type: 'success' });
      setFormData({ name: '', phone: '', course: courseName });
    } catch (error) {
      setMessage({ text: 'Something went wrong. Please try again.', type: 'danger' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page_title_banner">
      <div className="banner-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
        <div className="shape-3"></div>
      </div>
      <div className="container banner-container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="banner-content">
              <div className="title-wrapper">
                <span className="subtitle">Welcome to Yale IT</span>
                <h1 className="banner-title">{courseTitle}</h1>
                <p className="banner-description">Transform your career with our industry-leading training program. Join thousands of successful graduates.</p>
                <div className="banner-features">
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Expert Trainers</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Placement Assistance</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Hands-on Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="course-inquiry-form" id="course-form">
              <div className="form-wrapper">
                <div className="form-header">
                  <div className="header-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3 className="inquiry-title">Enquire Now</h3>
                  <p className="form-subtitle">Get a Free Demo Class</p>
                </div>

                <form onSubmit={handleSubmit} className="course-form">
                  <input type="hidden" name="course" value={courseName} />
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-icon">
                        <i className="fas fa-user"></i>
                      </span>
                      <input 
                        type="text" 
                        className="form-control custom-input" 
                        name="name" 
                        placeholder="Your Name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        style={{paddingLeft: '40px'}} 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-icon">
                        <i className="fas fa-phone-alt"></i>
                      </span>
                      <input 
                        type="tel" 
                        className="form-control custom-input" 
                        name="phone" 
                        placeholder="Phone Number" 
                        value={formData.phone}
                        onChange={handleChange}
                        required 
                        pattern="[0-9]{10}" 
                        style={{paddingLeft: '40px'}} 
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <button type="submit" className="submit-btn" disabled={loading}>
                      <span className="btn-text">{loading ? 'Submitting...' : 'Submit Inquiry'}</span>
                      {loading && (
                        <div className="btn-loader">
                          <div className="spinner-border spinner-border-sm" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      )}
                    </button>
                  </div>

                  {message.text && (
                    <div className="form-message">
                      <div className={`alert alert-${message.type}`} role="alert">
                        {message.text}
                      </div>
                    </div>
                  )}

                  <div className="trust-badges">
                    <div className="badge-item">
                      <i className="fas fa-shield-alt"></i>
                      <span>100% Secure</span>
                    </div>
                    <div className="badge-item">
                      <i className="fas fa-clock"></i>
                      <span>24/7 Support</span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Home</Link></li>
              {courseType === 'course' && <li className="breadcrumb-item">Courses</li>}
              {courseType === 'service' && <li className="breadcrumb-item">Services</li>}
              {courseType === 'internship' && (
                <li className="breadcrumb-item"><Link to="/internship-training-in-coimbatore">Internships</Link></li>
              )}
              <li className="breadcrumb-item active" aria-current="page">{courseName}</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;
