import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const DataScience = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true, offset: 100 });
    }
  }, []);

  return (
    <>
      <SEO 
        title="Data Science Course in Coimbatore"
        description="Master Data Science at Yale IT Skill Hub. Learn Python, R, machine learning, data visualization, and analytics with 100% placement support."
        keywords="Data Science course in Coimbatore, Data Analytics training in Coimbatore, best data science institute in Coimbatore"
      />

      <CourseBanner 
        courseTitle="Data Science Course in Coimbatore"
        courseName="Data Science"
        courseType="course"
      />

      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">Become a Data Scientist with Industry-Ready Skills</h2>
              <p className="mb-24">
                Transform your career with Yale IT Skill Hub's Data Science course. Master data analysis, statistical modeling, machine learning, and data visualization using Python, R, SQL, and popular data science libraries. Our comprehensive curriculum covers everything from data collection and cleaning to advanced predictive modeling and deployment. Work on real datasets and build a strong portfolio to land high-paying data science roles.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img src="/static/media/courses/best-data-science-course-in-coimbatore/best-data-science-training-in-coimbatore.webp"
                  alt="Best Data Science course in Coimbatore" 
                  title="Best Data Science course in Coimbatore" 
                  className="br-20 mb-24" />
              </div>
            </div>
          </div>

          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key Features of Our <span className="fm-sec">Data Science Course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img src="/static/media/courses/best-data-science-course-in-coimbatore/comprehensive-training-programs.webp"
                alt="Data Science Training" className="img-fluid" />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-data-science-course-in-coimbatore/icons/book.png" alt="Comprehensive Curriculum" />
                <h2>Comprehensive Curriculum</h2>
                <p>Master Python, R, SQL, machine learning, deep learning, and data visualization tools.</p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-data-science-course-in-coimbatore/icons/tools.png" alt="Hands-On Projects" />
                <h2>Hands-On Projects</h2>
                <p>Work on real-world datasets and build predictive models for various industries.</p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-data-science-course-in-coimbatore/icons/trainer.png" alt="Expert Instructors" />
                <h2>Expert Instructors</h2>
                <p>Learn from experienced data scientists working in leading tech and analytics companies.</p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-data-science-course-in-coimbatore/icons/job.png" alt="Job Placement" />
                <h2>Job Placement Assistance</h2>
                <p>Get placed as a data scientist, data analyst, or ML engineer with our support.</p>
              </div>
            </div>
          </div>

          <section className="our-approach py-60">
            <div className="container">
              <div className="section-heading text-center" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Approach</h6>
                <h2>Empowering Your <span className="fm-sec">Data Science Career</span></h2>
              </div>
              <div className="approach-cards">
                {[
                  { icon: 'compass', title: 'Career Advice', text: 'Strategic guidance for data science career paths.' },
                  { icon: 'users', title: 'Join Our Team', text: 'Collaborate on data-driven projects.' },
                  { icon: 'laptop-code', title: 'Hands-On Learning', text: 'Practice with real datasets and tools.' },
                  { icon: 'project-diagram', title: 'Real Projects', text: 'Build analytical solutions for businesses.' },
                  { icon: 'graduation-cap', title: 'Internship Opportunities', text: 'Work with data teams in industries.' },
                  { icon: 'briefcase', title: 'Job Placement Support', text: 'Launch your data science career successfully.' }
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

export default DataScience;
