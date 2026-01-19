import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const FullStackTraining = () => {
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
        title="Full stack Developer course in Coimbatore"
        description="Yale It Skill Hub Full Stack Developer course in Coimbatore is ideal for beginners.Enroll now to gain skills get industry-ready and receive 100% placement."
        keywords="Become a full stack developer in Coimbatore with hands-on training in front-end & back-end technologies. Work on live projects & get certified."
      />

      <CourseBanner 
        courseTitle="Best Full Stack Developer Course in Coimbatore"
        courseName="Full Stack Training"
        courseType="course"
      />

      {/* Course Detail Area Start */}
      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">
                Fast-Track Your Tech Career with Our Full Stack Developer Course
              </h2>
              <p className="mb-24">
                To become a proficient full-stack developer, you must master both front-end and back-end development and understand how to integrate them seamlessly. This versatile skill set is highly sought after, as companies increasingly prefer professionals who can manage both aspects of development, making full-stack developers indispensable in the industry.

                To meet this growing demand, Yale IT offers the best full-stack developer course with comprehensive hands-on experience. Our industry-aligned, practical approach bridges the gap between theoretical learning and real-world applications, equipping you with the skills and confidence needed to excel in this competitive field.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img
                  src="/static/media/courses/best-full-stack-course-in-coimbatore/best-full-stack-training-in-coimbatore.webp"
                  alt="best full stack developer course in coimbatore" 
                  title="best full stack developer course in coimbatore" 
                  className="br-20 mb-24" 
                />
              </div>
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Highlights of Our <span className="fm-sec">Full Stack Developer course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img
                src="/static/media/courses/best-full-stack-course-in-coimbatore/comprehensive-training-programs.webp"
                alt="Comprehensive Full Stack Training Programs" 
                title="Comprehensive Full Stack Training Programs"
                className="img-fluid" 
              />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-full-stack-course-in-coimbatore/icons/book.png"
                  alt="Full Stack Comprehensive Curriculum" 
                  title="Full Stack Comprehensive Curriculum" 
                />
                <h2>Comprehensive Curriculum</h2>
                <p>
                  Master both frontend (React, HTML, CSS) and backend (Node.js, Express, MongoDB) technologies with our complete course.
                </p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-full-stack-course-in-coimbatore/icons/tools.png"
                  alt="Full Stack Hands-On Projects" 
                  title="Full Stack Hands-On Projects" 
                />
                <h2>Hands-On Projects</h2>
                <p>
                  Build real-world applications from scratch and deploy them to production servers.
                </p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-full-stack-course-in-coimbatore/icons/trainer.png"
                  alt="Expert Instructors for Full Stack Course" 
                  title="Expert Instructors for Full Stack Course" 
                />
                <h2>Expert Instructors</h2>
                <p>
                  Learn from experienced full-stack developers working in top tech companies.
                </p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-full-stack-course-in-coimbatore/icons/job.png"
                  alt="Get 100% Job Placement Assistance"
                  title="Get 100% Job Placement Assistance" 
                />
                <h2>Job Placement Assistance</h2>
                <p>
                  Receive dedicated placement support with mock interviews and resume preparation.
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

export default FullStackTraining;
