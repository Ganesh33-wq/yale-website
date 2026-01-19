import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const JavaTraining = () => {
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
        title="Java Course in Coimbatore"
        description="Join Yale IT Skill Hub for the best Java course in Coimbatore, covering basics to advanced, with expert guidance and 100% placement support."
        keywords="Java course in coimbatore, Java training institute in Coimbatore, Java training in Coimbatore"
      />

      <CourseBanner 
        courseTitle="Java Course in Coimbatore"
        courseName="Java Training"
        courseType="course"
      />

      {/* Course Detail Area Start */}
      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">
                Full Stack Java Programming with Expert Trainers in Coimbatore
              </h2>
              <p className="mb-24">
                Java, known as Just A Virtual Accelerator is a fundamental building block of web and app development. To become a skilled Java developer, you need to master its various aspects comprehensively. While there are countless resources to learn Java, finding a structured and effective learning path is challenging without expert guidance from industry professionals. That's where Yale Institute excels, offering the best Java training in Coimbatore. As a company providing one-stop IT solutions, Yale brings unmatched expertise to its Java course in Coimbatore, ensuring a practical, industry-focused approach that equips you with job-ready skills.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img
                  src="/static/media/courses/best-java-training-in-coimbatore/best-java-training-in-coimbatore.webp"
                  alt="Best Java course in Coimbatore" 
                  title="Best Java course in Coimbatore" 
                  className="br-20 mb-24" 
                />
              </div>
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key Highlights of <span className="fm-sec">Our Java Course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img
                src="/static/media/courses/best-java-training-in-coimbatore/comprehensive-training-programs.webp"
                alt="Comprehensive Java Training Programs" 
                title="Comprehensive Java Training Programs"
                className="img-fluid" 
              />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-java-training-in-coimbatore/icons/book.png"
                  alt="Java Comprehensive Curriculum" 
                  title="Java Comprehensive Curriculum" 
                />
                <h2>Comprehensive Curriculum</h2>
                <p>
                  Our Java course covers everything from core concepts to advanced topics like Spring Boot, Hibernate, and Microservices.
                </p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-java-training-in-coimbatore/icons/tools.png"
                  alt="Java Hands-On Projects" 
                  title="Java Hands-On Projects" 
                />
                <h2>Hands-On Projects</h2>
                <p>
                  Gain real-world experience through live projects and coding challenges that help you apply what you've learned.
                </p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-java-training-in-coimbatore/icons/trainer.png"
                  alt="Expert Instructors for Java Course" 
                  title="Expert Instructors for Java Course" 
                />
                <h2>Expert Instructors</h2>
                <p>
                  Learn from seasoned Java professionals with years of industry experience who guide you step-by-step.
                </p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-java-training-in-coimbatore/icons/job.png"
                  alt="Get 100% Job Placement Assistance with Our Java Course"
                  title="Get 100% Job Placement Assistance with Our Java Course" 
                />
                <h2>Job Placement Assistance</h2>
                <p>
                  Receive support with resume building and interview preparation to secure opportunities in top tech companies.
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
                  <p>
                    Personalized guidance to identify your strengths and navigate the evolving IT industry landscape.
                  </p>
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
                  <p>
                    Be part of a team focused on continuous learning and collaborative skill development.
                  </p>
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
                  <p>
                    Gain practical experience through our interactive and application-based learning approach.
                  </p>
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
                  <p>
                    Work on live projects to develop practical skills and solve real industry challenges.
                  </p>
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
                  <p>
                    Gain valuable experience working alongside industry professionals in real work environments.
                  </p>
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
                  <p>
                    Comprehensive placement assistance to help you successfully launch your IT career.
                  </p>
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

export default JavaTraining;
