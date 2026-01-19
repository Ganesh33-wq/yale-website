import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const CyberSecurity = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true, offset: 100 });
    }
  }, []);

  return (
    <>
      <SEO 
        title="Cyber Security Course in Coimbatore"
        description="Learn Ethical Hacking and Cyber Security at Yale IT Skill Hub. Master network security, penetration testing with 100% placement support."
        keywords="Cyber Security course in Coimbatore, Ethical Hacking training in Coimbatore, best cybersecurity institute in Coimbatore"
      />

      <CourseBanner 
        courseTitle="Cyber Security Course in Coimbatore"
        courseName="Cyber Security"
        courseType="course"
      />

      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">Master Cyber Security & Ethical Hacking</h2>
              <p className="mb-24">
                Protect digital assets and secure networks with Yale IT Skill Hub's Cyber Security course. Learn ethical hacking, penetration testing, network security, cryptography, and security operations. Our hands-on training with real-world scenarios prepares you for roles as security analysts, ethical hackers, and cybersecurity consultants. Get certified and become a guardian of digital security in today's connected world.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img src="/static/media/courses/best-cyber-security-course-in-coimbatore/best-cyber-security-training-in-coimbatore.webp"
                  alt="Best Cyber Security course in Coimbatore" 
                  title="Best Cyber Security course in Coimbatore" 
                  className="br-20 mb-24" />
              </div>
            </div>
          </div>

          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key Features of Our <span className="fm-sec">Cyber Security Course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img src="/static/media/courses/best-cyber-security-course-in-coimbatore/comprehensive-training-programs.webp"
                alt="Cyber Security Training" className="img-fluid" />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-cyber-security-course-in-coimbatore/icons/book.png" alt="Comprehensive Curriculum" />
                <h2>Comprehensive Curriculum</h2>
                <p>Master ethical hacking, penetration testing, network security, and cryptography.</p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-cyber-security-course-in-coimbatore/icons/tools.png" alt="Hands-On Projects" />
                <h2>Hands-On Projects</h2>
                <p>Practice on live environments with vulnerability assessments and security audits.</p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-cyber-security-course-in-coimbatore/icons/trainer.png" alt="Expert Instructors" />
                <h2>Expert Instructors</h2>
                <p>Learn from certified ethical hackers and cybersecurity professionals.</p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-cyber-security-course-in-coimbatore/icons/job.png" alt="Job Placement" />
                <h2>Job Placement Assistance</h2>
                <p>Get placed as a security analyst, ethical hacker, or SOC analyst.</p>
              </div>
            </div>
          </div>

          <section className="our-approach py-60">
            <div className="container">
              <div className="section-heading text-center" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Approach</h6>
                <h2>Empowering Your <span className="fm-sec">Cyber Security Career</span></h2>
              </div>
              <div className="approach-cards">
                {[
                  { icon: 'compass', title: 'Career Advice', text: 'Expert guidance for cybersecurity career paths.' },
                  { icon: 'users', title: 'Join Our Team', text: 'Collaborate on security projects and assessments.' },
                  { icon: 'laptop-code', title: 'Hands-On Learning', text: 'Practice with real hacking tools and techniques.' },
                  { icon: 'project-diagram', title: 'Real Projects', text: 'Conduct security audits on live systems.' },
                  { icon: 'graduation-cap', title: 'Internship Opportunities', text: 'Work with security teams in organizations.' },
                  { icon: 'briefcase', title: 'Job Placement Support', text: 'Launch your cybersecurity career with confidence.' }
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

export default CyberSecurity;
