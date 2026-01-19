import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const Home = () => {
  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }

    // Generate random positions for floating icons
    const root = document.documentElement;
    for (let i = 1; i <= 15; i++) {
      root.style.setProperty(`--random-${i}`, Math.random());
    }
  }, []);

  return (
    <>
      <SEO 
        title="Yale IT Skill Hub Best Software Training Institute in Coimbatore"
        description="Yale IT Skill Hub, Coimbatore project-based software training and software course in Coimbatore, with hands-on experience and IT industrial skills."
        keywords="Best IT training institute in coimbatore, IT training institute in coimbatore, Best IT training academy in coimbatore, Software Training Institute in Coimbatore"
      />

      {/* Hero Banner Start */}
      <section className="hero-banner-1">
        <div className="container position-relative">
          {/* Floating Icons */}
          <div className="floating-icons">
            <img src="/static/media/icons/banner/html.png" alt="HTML" title="HTML" className="floating-icon floating-icon-1" />
            <img src="/static/media/icons/banner/react.png" alt="React" title="React" className="floating-icon floating-icon-2" />
            <img src="/static/media/icons/banner/python.png" alt="Python" title="Python" className="floating-icon floating-icon-3" />
            <img src="/static/media/icons/banner/java.png" alt="Java" title="Java" className="floating-icon floating-icon-4" />
            <img src="/static/media/icons/banner/figma.png" alt="Figma" title="Figma" className="floating-icon floating-icon-5" />
            <img src="/static/media/icons/banner/instagram.png" alt="Instagram" title="Instagram" className="floating-icon floating-icon-6" />
            <img src="/static/media/icons/banner/facebook.png" alt="Facebook" title="Facebook" className="floating-icon floating-icon-7" />
            <img src="/static/media/icons/banner/linux.png" alt="Linux" title="Linux" className="floating-icon floating-icon-8" />
            <img src="/static/media/icons/banner/mongo.png" alt="MongoDB" title="MongoDB" className="floating-icon floating-icon-9" />
            <img src="/static/media/icons/banner/laravel.png" alt="Laravel" title="Laravel" className="floating-icon floating-icon-10" />
          </div>

          <div className="content">
            <div className="text_block wow fadeInUp" data-wow-delay="800ms">
              <div className="row justify-content-center text-center">
                <div className="col-xl-8 col-lg-10">
                  <h1 className="mb-16 title mt-5 mt-md-0" style={{color: '#0aa6d7'}} data-aos="fade-up">
                    Top Software Training Institute in <span className="fm-sec" style={{color: '#2bac44 !important'}}>Coimbatore</span>
                  </h1>
                  <h4 className="mb-48" data-aos="fade-up" data-aos-delay="200">
                    Master in-demand skills and kickstart your IT career.
                  </h4>
                  <div className="btn_block d-flex justify-content-center" data-aos="fade-up" data-aos-delay="400">
                    <a href="#courses-section" className="educate-btn sec">
                      <span className="educate-btn__curve"></span>Explore Our Courses
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Banner End */}

      {/* About Area Start */}
      <section className="py-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-48 mb-lg-0" data-aos="fade-right">
              <div className="heading mb-16">
                <h6 className="color-primary mb-8">–––– Job-Ready Training</h6>
                <h2>
                  Get your dream IT job with <span className="fm-sec">Coimbatore's Top Software Training Institute</span>
                </h2>
              </div>
              <p className="mb-32">
                At Yale IT Skill Hub, we offer the best IT courses in Coimbatore, designed to equip students with job-oriented skills that meet industry demands. Whether you're looking to advance your career or start a new one in the tech world, our courses provide comprehensive training and hands-on experience to ensure you're job-ready. With expert instructors and a curriculum customized to the latest industry trends, Yale IT Skill Hub stands out as a renowned software training institute in Manchester of South India, Coimbatore.
              </p>
              <div className="text-start wow fadeInUp" data-wow-delay="600ms">
                <Link to="/about" className="educate-btn">
                  <span className="educate-btn__curve"></span>Read More
                </Link>
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-left">
              <div className="educate-tilt">
                <img loading="lazy" src="/static/media/resources/about-1.webp" alt="Software Training Institute in Coimbatore" title="Software Training Institute in Coimbatore" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}

      {/* Courses Area Start */}
      <section className="courses-2 py-60" id="courses-section">
        <div className="container">
          <div className="section-title mb-48 text-center mx-auto" data-aos="fade-up">
            <div className="heading">
              <h6 className="color-primary mb-8">Popular Courses</h6>
              <h2>Explore our industry-ready IT courses<span className="fm-sec">&nbsp;in Coimbatore</span></h2>
              <p className="text-center mt-2 mb-4 mx-auto">
                Yale IT Skill Hub offers a wide range of comprehensive IT courses to equip students with the skills to excel in the ever-evolving tech industry.
              </p>
            </div>
          </div>
          <div className="row">
            {/* Python Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24" data-aos="fade-up" data-aos-delay="0" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified python course" title="certified python course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/python-training">Full stack Python Course</Link></h4>
                    <p>Our Full stack Python course combines theory with hands-on coding practice, ensuring you master real-world applications. We focus on project-based learning to help you build practical skills and gain confidence in Python development.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/python.png" alt="python course" title="python course" />
                    <Link to="/course/python-training" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* Java Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified java course" title="certified java course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/java-training">Full stack Java Course</Link></h4>
                    <p>In our Full stack Java course, you'll learn through a mix of detailed lessons and real-world projects, building expertise in Java programming. Our instructors guide you step-by-step to develop robust applications, from core concepts to advanced topics.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/java.png" alt="java course" title="java course" />
                    <Link to="/course/java-training" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* Full Stack Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24" data-aos="fade-up" data-aos-delay="400" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified mern stack course" title="certified mern stack course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/full-stack-training">Full stack Developer MERN Course</Link></h4>
                    <p>This course emphasizes hands-on experience with MERN technologies, from front-end design with React to back-end development with Node.js. You will work on live projects to apply what you learn and develop real-world applications.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/node.png" alt="mern stack course" title="mern stack course" />
                    <Link to="/course/full-stack-training" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* Digital Marketing Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified digital marketing course" title="certified digital marketing course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/digital-marketing">Digital Marketing Course</Link></h4>
                    <p>Our digital marketing course uses case studies, interactive sessions, and practical exercises to teach strategies that work in the real world. We ensure you gain expertise in SEO, SEM, content marketing, and more through live campaigns and practical tasks.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/digi.png" alt="digital marketing course" title="digital marketing course" />
                    <Link to="/course/digital-marketing" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* UI/UX Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24 mb-lg-0" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified ui ux designer course" title="certified ui ux designer course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/ui-ux-design">UI UX Designer Course</Link></h4>
                    <p>Through hands-on projects and design tools like Adobe XD and Figma, you will learn how to create user-friendly and engaging digital interfaces. Our course focuses on the entire design process, from wireframing to prototyping and user testing.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/figma.png" alt="Ui/Ux Designer course" title="Ui/Ux Designer course" />
                    <Link to="/course/ui-ux-design" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* AI Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified ai course" title="certified ai course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/ai">AI Course</Link></h4>
                    <p>Our AI course uses real-world datasets and practical exercises to teach machine learning and deep learning. You will work on projects and build AI models that can be implemented in various industries, ensuring you gain industry-ready skills.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/ai.png" alt="ai course" title="ai course" />
                    <Link to="/course/ai" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* Data Science Course */}
            <div className="col-lg-6">
              <div className="course__card mb-24 mb-lg-0" data-aos="fade-up" data-aos-delay="1200" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified data science course" title="certified data science course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-3"><Link to="/course/data-science">Data Science Course</Link></h4>
                    <p>This course combines theoretical learning with practical exercises, allowing you to analyze real-world data and apply statistical and machine learning models. You will work on hands-on projects to develop skills in data analysis, visualization, and predictive modeling.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/data.png" alt="data science course" title="data science course" />
                    <Link to="/course/data-science" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>

            {/* Cyber Security Course */}
            <div className="col-lg-6">
              <div className="course__card" data-aos="fade-up" data-aos-delay="1400" data-aos-duration="800">
                <div className="course__card__icon">
                  <img loading="lazy" src="/static/media/courses/verified-badge.webp" alt="certified cybersecurity course" title="certified cybersecurity course" />
                </div>
                <div className="course__card__content">
                  <div className="left__block">
                    <h4 className="mb-4p pb-2"><Link to="/course/cyber-security">Cybersecurity Course</Link></h4>
                    <p>Our cybersecurity course includes practical labs, case studies, and real-world simulations to teach you how to protect against cyber threats. You'll gain hands-on experience in ethical hacking, network security, and risk management techniques.</p>
                  </div>
                  <div className="right__block">
                    <img loading="lazy" className="verified-badge mt-2 mb-3" src="/static/media/icons/security.png" alt="cybersecurity course" title="cybersecurity course" />
                    <Link to="/course/cyber-security" className="educate-btn sm mx-xl-auto me-2">
                      <span className="educate-btn__curve"></span>Know More
                    </Link>
                  </div>
                  <img loading="lazy" src="/static/media/shapes/vector-1.png" alt="shape" title="shape" className="bottom_vector" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Courses Area End */}

      {/* Features Area Start */}
      <section className="py-60">
        <div className="container">
          <div className="section-title mb-48 mx-auto text-center">
            <div className="heading">
              <h6 className="color-primary mb-8">Key Highlights</h6>
              <h2>Key highlights of our <span className="fm-sec">IT courses</span></h2>
            </div>
          </div>
          <div className="row row-gap-4 justify-content-center mt-4">
            <div className="cards row">
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <span className="close"></span>
                  <span className="arrow"></span>
                  <article>
                    <h4 style={{fontSize: '20px'}}>Expert trainers with industry experience</h4>
                    <div className="pic">
                      <img loading="lazy" src="/static/media/resources/features/teacher.webp" alt="expert trainers with industry experience" title="expert trainers with industry experience" />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <span className="close"></span>
                  <span className="arrow"></span>
                  <article>
                    <h4 style={{fontSize: '20px'}}>Hands-on projects and real-time learning</h4>
                    <div className="pic">
                      <img loading="lazy" src="/static/media/resources/features/hands-on-projects.webp" alt="hands-on projects and real-time learning" title="hands-on projects and real-time learning" />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <span className="close"></span>
                  <span className="arrow"></span>
                  <article>
                    <h4 style={{fontSize: '20px'}}>Flexible batch timings (weekdays/weekends)</h4>
                    <div className="pic">
                      <img loading="lazy" src="/static/media/resources/features/batch.webp" alt="flexible batch timings" title="flexible batch timings" />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <span className="close"></span>
                  <span className="arrow"></span>
                  <article>
                    <h4 style={{fontSize: '20px'}}>Interactive learning methods (online & offline)</h4>
                    <div className="pic">
                      <img loading="lazy" src="/static/media/resources/features/online-class.webp" alt="interactive learning methods" title="interactive learning methods" />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <span className="close"></span>
                  <span className="arrow"></span>
                  <article>
                    <h4 style={{fontSize: '20px'}}>Comprehensive current trend courses are offered</h4>
                    <div className="pic">
                      <img loading="lazy" src="/static/media/resources/features/course-syllabus.webp" alt="comprehensive courses" title="comprehensive courses" />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                <div className="card" data-aos="zoom-in" data-aos-delay="100">
                  <span className="close"></span>
                  <span className="arrow"></span>
                  <article>
                    <h4 style={{fontSize: '20px'}}>100% placement assistance</h4>
                    <div className="pic">
                      <img loading="lazy" src="/static/media/resources/features/placement.webp" alt="100% placement assistance" title="100% placement assistance" />
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Area End */}

      {/* Placement Section Start */}
      <div className="py-30 bg-white">
        <div className="container">
          <div className="section-title mb-48 row justify-content-between gap-md-0 gap-4">
            <div className="heading col-12 col-md-3 col-lg-4">
              <h6 className="color-primary mb-8">–––– Our Students</h6>
              <h2>100% Placement Assistance <span className="fm-sec">for Every Student</span></h2>
            </div>
            <div className="col-12 col-md-9 col-lg-8">
              <p>At Yale IT Skill Hub, we provide 100% placement assistance for every student. Our strong connections with top companies ensure that you have access to guaranteed IT placements. Our dedicated placement team supports you with resume building, interview preparation, and placement drives, ensuring you are fully prepared for the competitive job market.</p>
            </div>
          </div>
          
          {/* Gallery Grid */}
          <div className="gallery-grid mt-5">
            <div className="row g-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <div key={num} className="col-lg-3 col-md-3" data-aos="flip-left" data-aos-delay="100">
                  <div className="gallery-item">
                    <div className="gallery-image">
                      <img loading="lazy" src={`/static/media/resources/placements/placement-${num}.webp`} alt={`Placement ${num}`} className="img-fluid" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Brand Logos */}
          <div className="row mb-5 align-items-center justify-content-center text-center mt-5">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="col-lg-3 mb-3">
                <img loading="lazy" src={`/static/media/brand/brand-${num}.png`} alt="Placement Partners" title="Placement Partners" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Placement Section End */}

      {/* Testimonials Section */}
      <section className="py-30 px-5">
        <iframe 
          title="Testimonials" 
          src="https://widget.tagembed.com/2152553"
          style={{width:'100%', height:'600px', border:'none'}}
        ></iframe>
      </section>

      {/* Blog Section Start */}
      <section className="py-60">
        <div className="container">
          <div className="section-title mb-48">
            <div className="heading">
              <h6 className="color-primary mb-8" style={{textAlign: 'center'}}>Blogs</h6>
              <h2 className="mb-5">Tech Insights for <span className="fm-sec">Tomorrow's Innovators</span></h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog_card mb-24 mb-xl-0" data-aos="fade-up" data-aos-delay="100">
                <div className="blog_card_img_block">
                  <img loading="lazy" src="/static/media/blog/b-1.webp" alt="Career Success 2025" />
                  <p className="date">9 May 2024</p>
                </div>
                <div className="blog_card_text_block">
                  <h4 className="mb-8">
                    <Link className="blog_title" to="/blog">Why Software Skills are the Key to Career Success in 2025</Link>
                  </h4>
                  <p className="mb-24">Discuss the growing demand for software professionals, top skills in demand, and how training can bridge the gap between job seekers and opportunities.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/blog" className="h6 color-primary educate_link_btn">
                      Read More<i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog_card mb-24 mb-xl-0" data-aos="fade-up" data-aos-delay="100">
                <div className="blog_card_img_block">
                  <img loading="lazy" src="/static/media/blog/b-2.webp" alt="Top IT Courses" />
                  <p className="date">9 May 2024</p>
                </div>
                <div className="blog_card_text_block">
                  <h4 className="mb-8">
                    <Link className="blog_title" to="/blog">Top 5 Software Courses to Kickstart Your IT Career</Link>
                  </h4>
                  <p className="mb-24">Explore in-demand courses like Python, Data Science, Full-Stack Development, and how each course prepares you for high-paying roles.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/blog" className="h6 color-primary educate_link_btn">
                      Read More<i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog_card" data-aos="fade-up" data-aos-delay="100">
                <div className="blog_card_img_block">
                  <img loading="lazy" src="/static/media/blog/b-3.webp" alt="Hands-On Training" />
                  <p className="date">9 May 2024</p>
                </div>
                <div className="blog_card_text_block">
                  <h4 className="mb-8">
                    <Link className="blog_title" to="/blog">The Importance of Hands-On Training in IT Education</Link>
                  </h4>
                  <p className="mb-24">Highlight how practical learning, live projects, and internships enhance job readiness compared to theory-based programs...</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/blog" className="h6 color-primary educate_link_btn">
                      Read More<i className="far fa-chevron-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section End */}
    </>
  );
};

export default Home;
