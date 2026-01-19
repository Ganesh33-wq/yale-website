import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import axios from 'axios';
import { toast } from 'react-toastify';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    courseInterest: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        courseInterest: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again later.');
      console.error('Contact form error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Us - Yale IT Skill Hub"
        description="Get in touch with Yale IT Skill Hub - Best Software Training Center in Coimbatore. Contact us for Python, Java, Full Stack, Digital Marketing courses."
        keywords="contact yale it, software training coimbatore, it courses coimbatore, yale contact, yale it coimbatore"
      />
      
      {/* Page Title Banner Start */}
      <section className="page_title_banner">
        <div className="container">
          <div className="content" style={{ padding: '170px 0' }}>
            <div className="title">
              <h1>Contact Us</h1>
              <img src="/static/media/shapes/tag-2.png" alt="" className="tag" />
            </div>
            <div className="educate-tilt">
              <img src="/static/media/resources/page_title.webp" alt="" className="banner-title-img" />
            </div>
            <img src="/static/media/shapes/circle-lines-2.png" alt="" className="circle_vector" />
          </div>
        </div>
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-wrapper">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Title Banner End */}

      {/* Contact Section Start */}
      <section className="contact_section py-60">
        <div className="container">
          <div className="row">
            {/* Contact Information */}
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="contact_info">
                <h2 className="mb-24">Get in Touch</h2>
                <p className="mb-32">Have questions about our courses or services? We're here to help! Reach out to us through any of the following channels:</p>
                
                <div className="contact_links">
                  {/* Address */}
                  <a target="_blank" rel="noopener noreferrer" href="https://maps.app.goo.gl/XDS6ApM7yEjM4P3cA" className="contact_link_block mb-24">
                    <div className="icon mt-2">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <span>1st Floor, 215, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu 641044</span>
                  </a>
                  
                  {/* Email */}
                  <div className="contact_link_block mb-24">
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <span><a href="mailto:admin@yaleinfotech.com">admin@yaleinfotech.com</a></span>
                  </div>
                  
                  {/* Phone */}
                  <div className="contact_link_block">
                    <div className="icon">
                      <i className="fal fa-phone"></i>
                    </div>
                    <span><a href="tel:+916383277904">+91 6383277904</a></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7">
              <div className="contact_form_block">
                <h3 className="mb-24">Send us a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-24">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required 
                      />
                    </div>
                    <div className="col-md-6 mb-24">
                      <input 
                        type="email" 
                        className="form-control" 
                        name="email" 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        required 
                      />
                    </div>
                    <div className="col-12 mb-24">
                      <select 
                        className="form-control" 
                        name="courseInterest" 
                        value={formData.courseInterest}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Course of Interest</option>
                        <option value="Python Training">Python Training</option>
                        <option value="Java Training">Java Training</option>
                        <option value="Full Stack Training">Full Stack Training</option>
                        <option value="Digital Marketing Training">Digital Marketing Training</option>
                        <option value="UI UX Training">UI/UX Design Training</option>
                        <option value="AI Training">AI Training</option>
                        <option value="Data Science Training">Data Science Training</option>
                        <option value="Cyber Security Training">Cyber Security Training</option>
                        <option value="Internship Training">Internship Training</option>
                        <option value="Final Year Project">Final Year Project</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="col-12 mb-24">
                      <input 
                        type="text" 
                        className="form-control" 
                        name="subject" 
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject" 
                      />
                    </div>
                    <div className="col-12 mb-24">
                      <textarea 
                        className="form-control" 
                        name="message" 
                        rows="5" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message" 
                        required
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="educate-btn" disabled={isSubmitting}>
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <span className="educate-btn__curve"></span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section End */}

      {/* Map Section Start */}
      <section className="map_section pb-60">
        <div className="container">
          <div className="map_wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2954237517756!2d76.9734007!3d11.0164472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ad85081719%3A0x4e4e7e6546756091!2sYale%20It%20Skill%20Hub%20-%20Full%20Stack%20Developer%2C%20Java%20Course%2C%20Python%20Course%2C%20Software%20Testing%20Course%20in%20Coimbatore!5e0!3m2!1sen!2sin!4v1738824608061!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Yale IT Location"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Map Section End */}
    </>
  );
};

export default Contact;
