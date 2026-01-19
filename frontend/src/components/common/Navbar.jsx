import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
    setIsCoursesOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCourses = () => {
    setIsCoursesOpen(!isCoursesOpen);
  };

  return (
    <header>
      <nav className="main-menu">
        <div className="container">
          <div className="main-menu__block">
            <div className="main-menu__left">
              <div className="main-menu__logo">
                <Link to="/">
                  <img 
                    className="logo-img" 
                    src="/static/images/yale-it-logo.png" 
                    alt="Yale IT Skill Hub"
                    title="Yale IT Skill Hub"
                  />
                </Link>
              </div>

              <div className="main-menu__nav">
                <ul className="main-menu__list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li className="dropdown">
                    <a href="#courses">Courses</a>
                    <ul>
                      <li><Link to="/course/python-training">Python Training</Link></li>
                      <li><Link to="/course/java-training">Java Training</Link></li>
                      <li><Link to="/course/full-stack-training">Full Stack Development</Link></li>
                      <li><Link to="/course/digital-marketing">Digital Marketing</Link></li>
                      <li><Link to="/course/ui-ux-design">UI/UX Design</Link></li>
                      <li><Link to="/course/ai">Artificial Intelligence</Link></li>
                      <li><Link to="/course/data-science">Data Science</Link></li>
                      <li><Link to="/course/cyber-security">Cyber Security</Link></li>
                    </ul>
                  </li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
            </div>

            <div className="main-menu__right">
              <div className="mobile-nav__btn mobile-nav__toggler">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <Link to="/contact" className="educate-btn educate-btn-second">
                <span className="educate-btn__curve"></span>
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-nav__wrapper ${isMenuOpen ? 'expanded' : ''}`}>
        <div className="mobile-nav__overlay mobile-nav__toggler" onClick={toggleMenu}></div>
        <div className="mobile-nav__content">
          <span className="mobile-nav__close mobile-nav__toggler" onClick={toggleMenu}>
            <i className="fa fa-times"></i>
          </span>

          <div className="logo-box">
            <Link to="/" aria-label="logo image">
              <img src="/static/images/yale-it-logo.png" width="155" alt="Yale IT" />
            </Link>
          </div>

          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li className={`dropdown ${isCoursesOpen ? 'open' : ''}`}>
                <a href="#courses" onClick={toggleCourses}>
                  Courses
                  <button className="dropdown-btn">
                    <i className={`fa fa-angle-${isCoursesOpen ? 'up' : 'down'}`}></i>
                  </button>
                </a>
                <ul style={{ display: isCoursesOpen ? 'block' : 'none' }}>
                  <li><Link to="/course/python-training">Python Training</Link></li>
                  <li><Link to="/course/java-training">Java Training</Link></li>
                  <li><Link to="/course/full-stack-training">Full Stack Development</Link></li>
                  <li><Link to="/course/digital-marketing">Digital Marketing</Link></li>
                  <li><Link to="/course/ui-ux-design">UI/UX Design</Link></li>
                  <li><Link to="/course/ai">Artificial Intelligence</Link></li>
                  <li><Link to="/course/data-science">Data Science</Link></li>
                  <li><Link to="/course/cyber-security">Cyber Security</Link></li>
                </ul>
              </li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope"></i>
              <a href="mailto:yaleinfotech@gmail.com">yaleinfotech@gmail.com</a>
            </li>
            <li>
              <i className="fa fa-phone-alt"></i>
              <a href="tel:+916383277904">+91 6383277904</a>
            </li>
          </ul>

          <div className="mobile-nav__social">
            <a href="https://www.facebook.com/yaleitskillhub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/yaleitskillhub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/yaleit" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.youtube.com/@yaleitskillhub" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="floating-buttons">
        <Link to="/contact" className="floating-button book-demo-button" data-tooltip="Book Demo">
          <i className="fas fa-calendar-check"></i>
        </Link>
        <a href="tel:+916383277904" className="floating-button call-button" data-tooltip="Call Us">
          <i className="fas fa-phone-alt"></i>
        </a>
        <a href="https://wa.me/916383277904" target="_blank" rel="noopener noreferrer" className="floating-button whatsapp-button" data-tooltip="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
