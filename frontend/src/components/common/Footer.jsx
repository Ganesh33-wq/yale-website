import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer_main pt-60 pb-20">
        <img src="/static/media/shapes/vector-7.png" alt="shape" title="shape" className="vector_shape" />
        <img src="/static/media/shapes/dots-1.png" alt="dots" title="dots" className="dots" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-3">
              <div className="footer_widget">
                <Link to="/" className="mb-8 logo-img">
                  <img src="/static/images/yale-it-logo.png" alt="Yale IT Skill Hub" title="Yale IT Skill Hub" />
                </Link>
                <p className="description_text">
                  Yale IT Skill Hub in Coimbatore connects academic knowledge with real-world
                  skills, helping students secure high-paying jobs through expert training and industry-ready expertise.
                </p>
                <div className="bottom-row">
                  <ul className="unstyled social_icons_list">
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/yaleitskillhub_official">
                        <img src="/static/media/icons/brands/Instagram.png" alt="instagram" title="instagram" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/yaleitskillhub">
                        <img src="/static/media/icons/brands/Facebook.png" alt="facebook" title="facebook" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://youtube.com/@yaleitskillhub">
                        <img src="/static/media/icons/brands/youtube.png" alt="youtube" title="youtube" />
                      </a>
                    </li>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/yaleit">
                        <img src="/static/media/icons/brands/Linkedin.png" alt="linkedin" title="linkedin" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-sm-6">
              <div className="footer_widget">
                <h5 className="medium-black mb-16">Courses</h5>
                <ul className="unstyled list">
                  <li><Link to="/course/python-training"><i className="fad fa-chevron-right"></i>Full Stack Python Course</Link></li>
                  <li><Link to="/course/java-training"><i className="fad fa-chevron-right"></i>Full Stack Java Course</Link></li>
                  <li><Link to="/course/full-stack-training"><i className="fad fa-chevron-right"></i>Full Stack Developer Course</Link></li>
                  <li><Link to="/course/digital-marketing"><i className="fad fa-chevron-right"></i>Digital Marketing Course</Link></li>
                  <li><Link to="/course/ui-ux-design"><i className="fad fa-chevron-right"></i>UI UX Designer Course</Link></li>
                  <li><Link to="/course/ai"><i className="fad fa-chevron-right"></i>AI Course</Link></li>
                  <li><Link to="/course/data-science"><i className="fad fa-chevron-right"></i>Data Science Course</Link></li>
                  <li><Link to="/course/cyber-security"><i className="fad fa-chevron-right"></i>Cyber Security Course</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-sm-6">
              <div className="footer_widget">
                <h5 className="medium-black mb-16">Quick Links</h5>
                <ul className="unstyled list">
                  <li><Link to="/about"><i className="fad fa-chevron-right"></i>About Us</Link></li>
                  <li><Link to="/blog"><i className="fad fa-chevron-right"></i>Blog</Link></li>
                  <li><Link to="/contact"><i className="fad fa-chevron-right"></i>Contact Us</Link></li>
                </ul>
              </div>
              <div className="footer_widget">
                <h5 className="medium-black mb-16">Services</h5>
                <ul className="unstyled list">
                  <li><Link to="/services/internship"><i className="fad fa-chevron-right"></i>Internship Training</Link></li>
                  <li><Link to="/services/final-year-project"><i className="fad fa-chevron-right"></i>Final year project</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="footer_widget">
                <h5 className="medium-black mb-16">Contact Us</h5>
                <ul className="unstyled list">
                  <li className="mb-16">
                    <i className="fal fa-map-marker-alt"></i>
                    <a href="https://maps.app.goo.gl/wS9hYiCMVXATkWi68" target="_blank" rel="noopener noreferrer">
                      1st Floor, 215, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu 641044
                    </a>
                  </li>
                  <li className="mb-16">
                    <a href="mailto:admin@yaleinfotech.com">
                      <i className="fal fa-envelope"></i> admin@yaleinfotech.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+916383277904">
                      <i className="fal fa-phone-alt"></i>+91 6383277904
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright_row">
        <p> 2024 Yale IT All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
