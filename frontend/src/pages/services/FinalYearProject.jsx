import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/Services.css';

const FinalYearProject = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const projectDomains = [
    {
      icon: 'fas fa-laptop-code',
      title: 'B.E CSE',
      tags: ['AI/ML', 'Web', 'Cloud'],
      description: 'Yale IT offers projects for B.E. CSE final-year students, focusing on trending technologies all at an affordable price. Our hands-on approach, guided by industry experts, ensures practical experience.',
      features: ['Trending Technologies', 'Industry Experts', 'Hands-on Training'],
      projectCount: '50+ Projects',
      category: 'be'
    },
    {
      icon: 'fas fa-microchip',
      title: 'B.E ECE',
      tags: ['IoT', 'Embedded', 'VLSI'],
      description: 'Innovative projects for ECE students covering embedded systems, IoT, VLSI design, and communication technologies with practical implementation.',
      features: ['IoT Solutions', 'Embedded Systems', 'VLSI Design'],
      projectCount: '40+ Projects',
      category: 'be'
    },
    {
      icon: 'fas fa-bolt',
      title: 'B.E EEE',
      tags: ['Power Systems', 'Automation', 'Smart Grid'],
      description: 'Power systems, renewable energy, and automation projects for EEE students with real-world applications and industry standards.',
      features: ['Power Electronics', 'Renewable Energy', 'Automation'],
      projectCount: '35+ Projects',
      category: 'be'
    },
    {
      icon: 'fas fa-cogs',
      title: 'B.E Mechanical',
      tags: ['CAD/CAM', 'Robotics', 'Automation'],
      description: 'Mechanical engineering projects covering design, analysis, robotics, and manufacturing with modern tools and techniques.',
      features: ['CAD Design', 'Robotics', 'Manufacturing'],
      projectCount: '30+ Projects',
      category: 'be'
    },
    {
      icon: 'fas fa-building',
      title: 'B.E Civil',
      tags: ['Structure', 'CAD', 'Analysis'],
      description: 'Civil engineering projects in structural analysis, construction management, and environmental engineering with software tools.',
      features: ['Structural Analysis', 'CAD Tools', 'Project Management'],
      projectCount: '25+ Projects',
      category: 'be'
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'MCA/MSc',
      tags: ['Full Stack', 'Data Science', 'Cloud'],
      description: 'Advanced projects for MCA/MSc students in software development, data science, cloud computing, and emerging technologies.',
      features: ['Advanced Topics', 'Research-based', 'Industry-ready'],
      projectCount: '45+ Projects',
      category: 'pg'
    },
    {
      icon: 'fas fa-code',
      title: 'BCA/BSc',
      tags: ['Web Dev', 'Mobile', 'Database'],
      description: 'Comprehensive projects for BCA/BSc students covering web development, mobile apps, and database management systems.',
      features: ['Practical Projects', 'Easy to Learn', 'Career-focused'],
      projectCount: '40+ Projects',
      category: 'ug'
    },
    {
      icon: 'fas fa-database',
      title: 'B.Tech IT',
      tags: ['Software', 'Networking', 'Security'],
      description: 'IT projects covering software engineering, networking, cybersecurity, and database management with industry tools.',
      features: ['Software Development', 'Network Security', 'Database Systems'],
      projectCount: '45+ Projects',
      category: 'be'
    }
  ];

  const features = [
    {
      icon: 'fas fa-user-tie',
      title: 'Expert Mentorship',
      description: 'Guidance from industry professionals with real-world experience'
    },
    {
      icon: 'fas fa-project-diagram',
      title: 'Industry Projects',
      description: 'Work on projects that solve real business problems'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Latest Technologies',
      description: 'Learn and implement cutting-edge technologies'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Project Certificate',
      description: 'Get certified project completion certificate'
    },
    {
      icon: 'fas fa-file-code',
      title: 'Complete Documentation',
      description: 'Detailed project documentation and reports'
    },
    {
      icon: 'fas fa-headset',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and guidance'
    }
  ];

  const benefits = [
    'Industry-standard project development',
    'Expert guidance and mentorship',
    'Complete project documentation',
    'Source code and deployment',
    'Project presentation training',
    'Placement assistance',
    'Certificate of completion',
    'Affordable pricing'
  ];

  return (
    <div className="final-year-project-page">
      {/* Page Title Banner */}
      <section className="page_title_banner project-banner">
        <div className="banner-shapes">
          <div className="shape-1"></div>
          <div className="shape-2"></div>
          <div className="shape-3"></div>
          <div className="floating-icons">
            <div className="floating-icon floating-icon-4" data-aos="fade-left" data-aos-delay="400">
              <img src="/static/media/icons/data.png" alt="icon" title="icon" className="tech-icon" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="banner-content" data-aos="fade-right">
                <div className="title-badge">
                  <span className="badge-icon"><i className="fas fa-rocket"></i></span>
                  <span className="badge-text">Launch Your Career</span>
                </div>
                <h1 className="banner-title">Final Year Project Center in Coimbatore</h1>
                <p className="banner-description">Get expert guidance and hands-on experience in building industry-standard projects. Stand out in the competitive tech world with our comprehensive project development support.</p>
                <div className="banner-features">
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Expert Mentorship</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Industry Projects</span>
                  </div>
                  <div className="feature-item">
                    <i className="fas fa-check-circle"></i>
                    <span>Latest Technologies</span>
                  </div>
                </div>
                <div className="banner-cta">
                  <a href="#project-domains" className="educate-btn">
                    <span className="educate-btn__curve"></span>
                    Explore Projects
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-image" data-aos="fade-left">
                <div className="image-wrapper">
                  <img src="/static/media/services/final-year-projec-center/project-banner.webp" alt="Final Year Project center in coimbatore" title="Final Year Project center in coimbatore" className="main-image" />
                  <div className="experience-badge">
                    <span className="number">5+</span>
                    <span className="text">Years Experience</span>
                  </div>
                  <div className="project-card">
                    <div className="card-icon">
                      <i className="fas fa-project-diagram"></i>
                    </div>
                    <div className="card-content">
                      <span className="number">500+</span>
                      <span className="text">Projects Completed</span>
                    </div>
                  </div>
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
                <li className="breadcrumb-item">Services</li>
                <li className="breadcrumb-item active" aria-current="page">Final Year Project</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Project Domains Section */}
      <section className="project-domains py-80" id="project-domains">
        <div className="container">
          <div className="section-header text-center" data-aos="fade-up">
            <h2 className="section-title">Project Domains</h2>
            <p className="section-description">Explore our comprehensive range of projects across various engineering and science streams</p>
            <div className="section-divider"></div>
          </div>

          <div className="row">
            {projectDomains.map((domain, index) => (
              <div key={index} className="col-lg-6 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="domain-card" data-category={domain.category}>
                  <div className="card-header">
                    <div className="icon-wrapper">
                      <i className={domain.icon}></i>
                    </div>
                    <h3>{domain.title}</h3>
                    <div className="tech-tags">
                      {domain.tags.map((tag, idx) => (
                        <span key={idx}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="card-body">
                    <p>{domain.description}</p>
                    <div className="features">
                      {domain.features.map((feature, idx) => (
                        <span key={idx}>
                          <i className="fas fa-check-circle"></i> {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to="/contact" className="explore-btn">
                      <span>Get Started</span>
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                    <div className="project-count">
                      <i className="fas fa-project-diagram"></i>
                      <span>{domain.projectCount}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="project-features py-80">
        <div className="container">
          <div className="section-heading text-center mb-5" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– What We Offer</h6>
            <h2>Why Choose <span className="fm-sec">Our Services</span></h2>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-card">
                  <div className="feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="benefits-image">
                <img src="/static/media/services/final-year-projec-center/project-banner.webp" alt="Project Benefits" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="benefits-content">
                <h2 className="mb-4">Key <span className="fm-sec">Benefits</span></h2>
                <p className="mb-4">Get the complete package for your final year project success</p>
                <ul className="benefits-list">
                  {benefits.map((benefit, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-80">
        <div className="container">
          <div className="cta-wrapper text-center" data-aos="zoom-in">
            <h2 className="mb-4">Ready to Start Your <span className="fm-sec">Final Year Project?</span></h2>
            <p className="mb-4">Get expert guidance and support for your academic project</p>
            <Link to="/contact" className="educate-btn">
              <span className="educate-btn__curve"></span>Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinalYearProject;
