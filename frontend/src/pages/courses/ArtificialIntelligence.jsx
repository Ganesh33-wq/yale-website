import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const ArtificialIntelligence = () => {
  useEffect(() => {
    if (window.AOS) {
      window.AOS.init({ duration: 1000, once: true, offset: 100 });
    }
  }, []);

  return (
    <>
      <SEO 
        title="Artificial Intelligence Course in Coimbatore"
        description="Learn AI and Machine Learning at Yale IT Skill Hub. Master neural networks, deep learning, NLP with hands-on projects and 100% placement support."
        keywords="AI course in Coimbatore, Artificial Intelligence training in Coimbatore, machine learning course in Coimbatore"
      />

      <CourseBanner 
        courseTitle="Artificial Intelligence Course in Coimbatore"
        courseName="AI Training"
        courseType="course"
      />

      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">Master Artificial Intelligence & Machine Learning</h2>
              <p className="mb-24">
                Dive into the world of Artificial Intelligence with Yale IT Skill Hub's comprehensive AI course. Learn machine learning algorithms, deep learning, neural networks, natural language processing, and computer vision. Our hands-on approach with real-world projects prepares you for high-demand AI roles in the industry. Get trained by experts and build AI solutions that make an impact.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img src="/static/media/courses/best-ai-course-in-coimbatore/best-ai-training-in-coimbatore.webp"
                  alt="Best AI course in Coimbatore" 
                  title="Best AI course in Coimbatore" 
                  className="br-20 mb-24" />
              </div>
            </div>
          </div>

          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key Features of Our <span className="fm-sec">AI Course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img src="/static/media/courses/best-ai-course-in-coimbatore/comprehensive-training-programs.webp"
                alt="AI Training" className="img-fluid" />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-ai-course-in-coimbatore/icons/book.png" alt="Comprehensive Curriculum" />
                <h2>Comprehensive Curriculum</h2>
                <p>Master ML algorithms, deep learning, TensorFlow, PyTorch, NLP, and computer vision.</p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-ai-course-in-coimbatore/icons/tools.png" alt="Hands-On Projects" />
                <h2>Hands-On Projects</h2>
                <p>Build AI models, chatbots, image recognition systems, and predictive analytics tools.</p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-ai-course-in-coimbatore/icons/trainer.png" alt="Expert Instructors" />
                <h2>Expert Instructors</h2>
                <p>Learn from AI researchers and practitioners with real-world AI implementation experience.</p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-ai-course-in-coimbatore/icons/job.png" alt="Job Placement" />
                <h2>Job Placement Assistance</h2>
                <p>Dedicated support for AI/ML engineer roles in top tech companies.</p>
              </div>
            </div>
          </div>

          <section className="our-approach py-60">
            <div className="container">
              <div className="section-heading text-center" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Approach</h6>
                <h2>Empowering Your <span className="fm-sec">AI Career</span></h2>
              </div>
              <div className="approach-cards">
                {[
                  { icon: 'compass', title: 'Career Advice', text: 'Expert guidance for AI career opportunities.' },
                  { icon: 'users', title: 'Join Our Team', text: 'Collaborate on cutting-edge AI projects.' },
                  { icon: 'laptop-code', title: 'Hands-On Learning', text: 'Practice with real AI frameworks and tools.' },
                  { icon: 'project-diagram', title: 'Real Projects', text: 'Build production-ready AI applications.' },
                  { icon: 'graduation-cap', title: 'Internship Opportunities', text: 'Work with AI teams in companies.' },
                  { icon: 'briefcase', title: 'Job Placement Support', text: 'Launch your AI/ML engineering career.' }
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

export default ArtificialIntelligence;
