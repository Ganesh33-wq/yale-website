import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../../styles/Services.css';

const InternshipTraining = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    window.scrollTo(0, 0);
  }, []);

  const internshipPrograms = [
    {
      icon: 'fab fa-python',
      badge: 'Most Popular',
      badgeClass: 'hot',
      title: 'Full Stack Python',
      duration: '1 Week - 1 Month',
      description: 'Learn to build full-stack applications using Python with frameworks like Django and Flask, and frontend technologies.',
      tech: ['Django', 'Flask', 'HTML/CSS', 'JavaScript'],
      category: 'fullstack'
    },
    {
      icon: 'fab fa-java',
      badge: 'Trending',
      badgeClass: 'trending',
      title: 'Full Stack Java',
      duration: '1 Week - 1 Month',
      description: 'Master full-stack Java development with Spring Boot, and frontend technologies like HTML, CSS, and JavaScript.',
      tech: ['Spring Boot', 'HTML/CSS', 'JavaScript'],
      category: 'fullstack'
    },
    {
      icon: 'fas fa-bullhorn',
      badge: 'High Demand',
      badgeClass: '',
      title: 'Digital Marketing',
      duration: '1 Week - 1 Month',
      description: 'Gain expertise in SEO, SEM, social media strategies, and analytics to boost business growth and online presence.',
      tech: ['SEO', 'SEM', 'Analytics'],
      category: 'marketing'
    },
    {
      icon: 'fab fa-android',
      badge: 'Popular',
      badgeClass: '',
      title: 'Android Development',
      duration: '1 Week - 1 Month',
      description: 'Learn to develop mobile apps with intuitive interfaces, seamless functionality, and API integration.',
      tech: ['Android SDK', 'Kotlin', 'APIs'],
      category: 'mobile'
    },
    {
      icon: 'fas fa-vial',
      badge: 'Growing',
      badgeClass: '',
      title: 'Selenium Testing',
      duration: '1 Week - 1 Month',
      description: 'Master automated testing with Selenium WebDriver. Learn to create test scripts for web applications.',
      tech: ['Selenium', 'Java', 'TestNG'],
      category: 'testing'
    },
    {
      icon: 'fab fa-react',
      badge: 'Hot',
      badgeClass: 'hot',
      title: 'React Development',
      duration: '1 Week - 1 Month',
      description: 'Build modern, interactive web applications using React.js and related technologies.',
      tech: ['React', 'Redux', 'JavaScript'],
      category: 'frontend'
    }
  ];

  const features = [
    {
      icon: 'fas fa-user-graduate',
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Hands-on Projects',
      description: 'Work on real-world projects to build your portfolio'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Industry Certificate',
      description: 'Get certified upon successful completion of internship'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Career Guidance',
      description: 'Receive placement assistance and career counseling'
    }
  ];

  const highlights = [
    'Real-world project experience',
    'Industry-relevant skill development',
    'Mentorship from experienced professionals',
    'Certificate of completion',
    'Flexible duration options',
    'Placement assistance'
  ];

  return (
    <div className="internship-training-page">
      {/* Page Title Banner */}
      <section className="page_title_banner">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Internship Training in Coimbatore</h1>
              <img src="/static/media/shapes/tag-2.png" alt="icon" title="icon" className="tag" />
            </div>
            <div className="educate-tilt">
              <img src="/static/media/resources/page_title.webp" alt="Internship Training in Coimbatore" title="Internship Training in Coimbatore" className="banner-title-img" />
            </div>
            <img src="/static/media/shapes/circle-lines-2.png" alt="icon" title="icon" className="circle_vector" />
          </div>
        </div>
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-wrapper">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item">Services</li>
                <li className="breadcrumb-item active" aria-current="page">Internship Training</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero-section py-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="hero-content">
                <div className="section-tag">
                  <span className="tag-line"></span>
                  <h6>Transform Your Career</h6>
                </div>
                <h2 className="mb-4">Launch Your Career with <span className="highlight">Real-World Experience</span></h2>
                <p className="lead mb-4">Are you a college student looking to gain hands-on experience in the field you're passionate about? Yale IT offers internship training in Coimbatore specifically designed for students pursuing various academic paths.</p>
                
                <div className="course-paths">
                  <div className="path-tag">B.E</div>
                  <div className="path-tag">B.Sci</div>
                  <div className="path-tag">B.Com</div>
                  <div className="path-tag">MCA</div>
                  <div className="path-tag">MBA</div>
                  <div className="path-tag">CSE</div>
                  <div className="path-tag">IT</div>
                  <div className="path-tag">EEE</div>
                  <div className="path-tag">ECE</div>
                </div>

                <p className="mt-4">Our internships provide the perfect opportunity to apply academic knowledge to real-world scenarios, allowing you to develop practical skills that will enhance your future career. At Yale IT, we are committed to helping students bridge the gap between theory and practice, preparing you for the challenges ahead.</p>

                <div className="cta-buttons mt-5">
                  <Link to="/contact" className="educate-btn">
                    <span className="educate-btn__curve"></span>Apply Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="hero-image">
                <div className="image-wrapper educate-tilt">
                  <img src="/static/media/services/internship-training/intership-training.webp" alt="Internship Training" title="Internship Training" className="main-image" />
                  <div className="floating-card card-2">
                    <i className="fas fa-certificate"></i>
                    <span>Industry Certificate</span>
                  </div>
                  <div className="experience-badge">
                    <span className="number">100+</span>
                    <span className="text">Students Trained</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Programs Section */}
      <section className="internship-programs py-80">
        <div className="container">
          <div className="section-heading text-center mb-5" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Internship Training <span className="fm-sec">Programs</span> We Offer</h2>
            <p className="mt-3">Choose from our diverse range of internship programs designed to kickstart your career</p>
          </div>

          <div className="programs-grid">
            {internshipPrograms.map((program, index) => (
              <div key={index} className="program-item" data-category={program.category} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="program-header">
                  <div className="program-icon">
                    <i className={program.icon}></i>
                  </div>
                  <div className={`program-badge ${program.badgeClass}`}>{program.badge}</div>
                </div>
                <h3>{program.title}</h3>
                <div className="program-meta">
                  <span><i className="fas fa-clock"></i> {program.duration}</span>
                </div>
                <p className="program-desc">{program.description}</p>
                <div className="program-tech">
                  {program.tech.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="course-features py-80">
        <div className="container">
          <div className="section-heading text-center mb-5" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Why Choose Us</h6>
            <h2>What You'll <span className="fm-sec">Get</span></h2>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
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

      {/* Key Highlights Section */}
      <section className="key-highlights py-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6" data-aos="fade-right">
              <div className="highlights-image">
                <img src="/static/media/services/internship-training/intership-training.webp" alt="Internship Highlights" className="img-fluid rounded" />
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="highlights-content">
                <h2 className="mb-4">Key <span className="fm-sec">Highlights</span></h2>
                <ul className="highlights-list">
                  {highlights.map((highlight, index) => (
                    <li key={index}>
                      <i className="fas fa-check-circle"></i>
                      <span>{highlight}</span>
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
            <h2 className="mb-4">Ready to Start Your <span className="fm-sec">Internship Journey?</span></h2>
            <p className="mb-4">Join hundreds of students who have kickstarted their careers with our internship programs</p>
            <Link to="/contact" className="educate-btn">
              <span className="educate-btn__curve"></span>Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipTraining;
