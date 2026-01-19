import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const UIUXDesign = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true, offset: 100 });
    }
  }, []);

  return (
    <>
      <SEO 
        title="UI/UX Design Course in Coimbatore"
        description="Learn UI/UX Design with Yale IT Skill Hub in Coimbatore. Master design tools, user research, prototyping with 100% placement support."
        keywords="UI UX design course in Coimbatore, UI UX training in Coimbatore, best UI UX course in Coimbatore"
      />

      <CourseBanner 
        courseTitle="UI/UX Design Course in Coimbatore"
        courseName="UI/UX Design"
        courseType="course"
      />

      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">Master UI/UX Design with Industry Experts in Coimbatore</h2>
              <p className="mb-24">
                In today's digital landscape, user experience is paramount. Our UI/UX Design course at Yale IT Skill Hub provides comprehensive training in design principles, user research, wireframing, prototyping, and modern design tools. Learn to create intuitive, user-friendly interfaces that drive engagement and satisfaction. Our industry-focused curriculum prepares you for a rewarding career in UI/UX design.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img src="/static/media/courses/best-ui-ux-design-course-in-coimbatore/best-ui-ux-design-training-in-coimbatore.webp"
                  alt="Best UI/UX Design course in Coimbatore" 
                  title="Best UI/UX Design course in Coimbatore" 
                  className="br-20 mb-24" />
              </div>
            </div>
          </div>

          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key Features of Our <span className="fm-sec">UI/UX Design Course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img src="/static/media/courses/best-ui-ux-design-course-in-coimbatore/comprehensive-training-programs.webp"
                alt="UI/UX Design Training" className="img-fluid" />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-ui-ux-design-course-in-coimbatore/icons/book.png" alt="Comprehensive Curriculum" />
                <h2>Comprehensive Curriculum</h2>
                <p>Master Figma, Adobe XD, user research, wireframing, prototyping, and design systems.</p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-ui-ux-design-course-in-coimbatore/icons/tools.png" alt="Hands-On Projects" />
                <h2>Hands-On Projects</h2>
                <p>Build real-world design portfolios with case studies and interactive prototypes.</p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-ui-ux-design-course-in-coimbatore/icons/trainer.png" alt="Expert Instructors" />
                <h2>Expert Instructors</h2>
                <p>Learn from experienced UI/UX designers working in top product companies.</p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-ui-ux-design-course-in-coimbatore/icons/job.png" alt="Job Placement" />
                <h2>Job Placement Assistance</h2>
                <p>Portfolio reviews, interview prep, and placement support for design roles.</p>
              </div>
            </div>
          </div>

          <section className="our-approach py-60">
            <div className="container">
              <div className="section-heading text-center" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Approach</h6>
                <h2>Empowering Your <span className="fm-sec">Design Career</span></h2>
              </div>
              <div className="approach-cards">
                {[
                  { icon: 'compass', title: 'Career Advice', text: 'Personalized guidance for your design career path.' },
                  { icon: 'users', title: 'Join Our Team', text: 'Collaborative learning environment with fellow designers.' },
                  { icon: 'laptop-code', title: 'Hands-On Learning', text: 'Practice with real design tools and projects.' },
                  { icon: 'project-diagram', title: 'Real Projects', text: 'Build portfolio-worthy design case studies.' },
                  { icon: 'graduation-cap', title: 'Internship Opportunities', text: 'Work with design teams on live projects.' },
                  { icon: 'briefcase', title: 'Job Placement Support', text: 'Complete support for UI/UX design careers.' }
                ].map((item, index) => (
                  <div key={index} className="approach-card" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <div className="card-icon"><i className={`fas fa-${item.icon}`}></i></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <div className="card-shapes">
                      <div className="shape shape-1"></div>
                      <div className="shape shape-2"></div>
                      <div className="shape shape-3"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default UIUXDesign;
