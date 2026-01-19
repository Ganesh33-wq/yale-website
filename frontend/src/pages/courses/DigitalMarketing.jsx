import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const DigitalMarketing = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }, []);

  return (
    <>
      <SEO 
        title="Digital Marketing Course in Coimbatore"
        description="We provide Digital Marketing Training in Coimbatore with 100% placement support. Learn top courses with 100% job placement."
        keywords="digital marketing course in Coimbatore, digital marketing classes in Coimbatore, best digital marketing courses in Coimbatore."
      />

      <CourseBanner 
        courseTitle="Digital Marketing Course in Coimbatore"
        courseName="Digital Marketing Training"
        courseType="course"
      />

      {/* Course Detail Area Start */}
      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">
                Digital Marketing with the best training in Coimbatore
              </h2>
              <p className="mb-24">
                In today's digital-first world, effective digital marketing is essential for businesses to reach their target audience and stand out in a crowded marketplace. As more companies recognize its value, the demand for skilled digital marketers has surged, making it a high-paying and highly rewarding career choice. However, success in this field isn't immediate—it requires time, continuous effort, and strategic implementation to achieve meaningful results. To truly understand the complexities of digital marketing, it's crucial to engage in hands-on training and real-world application. At Yale, we provide expert-led courses, offering the best Digital Marketing course in Coimbatore, designed to give you practical experience. Our programs help you develop the skills and strategies needed to succeed in the competitive field of digital marketing.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img
                  src="/static/media/courses/best-digital-marketing-in-coimbatore/best-digital-marketing-training-in-coimbatore.webp"
                  alt="Best Digital Marketing course in Coimbatore" 
                  title="Best Digital Marketing course in Coimbatore" 
                  className="br-20 mb-24" 
                />
              </div>
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key Features of Our <span className="fm-sec">Digital Marketing Course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img
                src="/static/media/courses/best-digital-marketing-in-coimbatore/comprehensive-training-programs.webp"
                alt="Comprehensive Digital Marketing Training" 
                title="Comprehensive Digital Marketing Training"
                className="img-fluid" 
              />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-digital-marketing-in-coimbatore/icons/book.png"
                  alt="Digital Marketing Comprehensive Curriculum" 
                  title="Digital Marketing Comprehensive Curriculum" 
                />
                <h2>Comprehensive Curriculum</h2>
                <p>
                  Master SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, and Analytics.
                </p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-digital-marketing-in-coimbatore/icons/tools.png"
                  alt="Digital Marketing Hands-On Projects" 
                  title="Digital Marketing Hands-On Projects" 
                />
                <h2>Hands-On Projects</h2>
                <p>
                  Work on real campaigns and learn to optimize marketing strategies for better results.
                </p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-digital-marketing-in-coimbatore/icons/trainer.png"
                  alt="Expert Instructors for Digital Marketing" 
                  title="Expert Instructors for Digital Marketing" 
                />
                <h2>Expert Instructors</h2>
                <p>
                  Learn from digital marketing professionals with proven track records in successful campaigns.
                </p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-digital-marketing-in-coimbatore/icons/job.png"
                  alt="Get 100% Job Placement Assistance"
                  title="Get 100% Job Placement Assistance" 
                />
                <h2>Job Placement Assistance</h2>
                <p>
                  Get certified and receive placement support to kickstart your digital marketing career.
                </p>
              </div>
            </div>
          </div>

          {/* Our Approach Section */}
          <section className="our-approach py-60">
            <div className="container">
              <div className="section-heading text-center" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Approach</h6>
                <h2>Empowering Your <span className="fm-sec">IT Career Journey</span></h2>
              </div>

              <div className="approach-cards">
                <div className="approach-card" data-aos="fade-up" data-aos-delay="100">
                  <div className="card-icon">
                    <i className="fas fa-compass"></i>
                  </div>
                  <h3>Career Advice</h3>
                  <p>Personalized guidance to identify your strengths and navigate the evolving IT industry landscape.</p>
                  <div className="card-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>

                <div className="approach-card" data-aos="fade-up" data-aos-delay="200">
                  <div className="card-icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Join Our Team</h3>
                  <p>Be part of a team focused on continuous learning and collaborative skill development.</p>
                  <div className="card-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>

                <div className="approach-card" data-aos="fade-up" data-aos-delay="300">
                  <div className="card-icon">
                    <i className="fas fa-laptop-code"></i>
                  </div>
                  <h3>Hands-On Learning</h3>
                  <p>Gain practical experience through our interactive and application-based learning approach.</p>
                  <div className="card-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>

                <div className="approach-card" data-aos="fade-up" data-aos-delay="400">
                  <div className="card-icon">
                    <i className="fas fa-project-diagram"></i>
                  </div>
                  <h3>Real Projects</h3>
                  <p>Work on live projects to develop practical skills and solve real industry challenges.</p>
                  <div className="card-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>

                <div className="approach-card" data-aos="fade-up" data-aos-delay="500">
                  <div className="card-icon">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3>Internship Opportunities</h3>
                  <p>Gain valuable experience working alongside industry professionals in real work environments.</p>
                  <div className="card-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>

                <div className="approach-card" data-aos="fade-up" data-aos-delay="600">
                  <div className="card-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <h3>Job Placement Support</h3>
                  <p>Comprehensive placement assistance to help you successfully launch your IT career.</p>
                  <div className="card-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default DigitalMarketing;
