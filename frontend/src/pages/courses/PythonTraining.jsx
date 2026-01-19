import React, { useEffect } from 'react';
import CourseBanner from '../../components/courses/CourseBanner';
import SEO from '../../components/common/SEO';
import '../../styles/CoursePages.css';

const PythonTraining = () => {
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
        title="Python Course Training in Coimbatore"
        description="Python Course Training in Coimbatore: Yale IT Skill Hub offers the Python training in Coimbatore with real-time, project-oriented practical exposure."
        keywords="Python Training in Coimbatore,Python Training institute in Coimbatore, Python course in Coimbatore, python course, Python Training in Coimbatore"
      />

      <CourseBanner 
        courseTitle="Python Course Training in Coimbatore"
        courseName="Python Training"
        courseType="course"
      />

      {/* Course Detail Area Start */}
      <section className="course_detail py-60">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h2 className="mb-12">
                Full stack python with the best training in Coimbatore
              </h2>
              <p className="mb-24">
                In the rapidly changing world of 2025, many career paths face uncertainty. However, choosing a career that is future-proof remains a daunting challenge. One of the most in-demand skills today is Python programming. The key to mastering Python lies in understanding the underlying logic, which paves the way for excellence. To truly grasp these concepts, expert guidance and a practical, hands-on learning approach are essential. This is where Yale Institute makes a difference, offering affordable classes designed to equip you with real-world Python skills and practical expertise. This strategic approach of the program makes it to make out as the Best python training in Coimbatore.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img
                  src="/static/media/courses/best-python-training-in-coimbatore/best-python-training-in-coimbatore.webp"
                  alt="best python training in coimbatore" 
                  title="best python training in coimbatore" 
                  className="br-20 mb-24" 
                />
              </div>
            </div>
          </div>

          {/* Bento Grid Section Start */}
          <div className="section-heading" data-aos="fade-up">
            <h6 className="color-primary mb-8">–––– Our Programs</h6>
            <h2>Key highlights of our <span className="fm-sec">python course</span></h2>
          </div>
          <div className="bento-grid py-40">
            <div className="bento-item item1">
              <img
                src="/static/media/courses/best-python-training-in-coimbatore/key-highlights-of-our-python-course.webp"
                alt="Key highlights of our python course" 
                title="Key highlights of our python course" 
                className="img-fluid" 
              />
            </div>
            <div className="bento-item item2">
              <div className="bento-content">
                <img src="/static/media/courses/best-python-training-in-coimbatore/icons/book.png"
                  alt="Python Comprehensive Curriculum" 
                  title="Python Comprehensive Curriculum" 
                />
                <h2>Comprehensive Curriculum</h2>
                <p>
                  Our Python course covers everything from basic syntax to advanced concepts like data structures, libraries, and web development frameworks.
                </p>
              </div>
            </div>
            <div className="bento-item item3">
              <div className="bento-content">
                <img src="/static/media/courses/best-python-training-in-coimbatore/icons/tools.png"
                  alt="Python Hands-On Projects" 
                  title="Python Hands-On Projects" 
                />
                <h2>Hands-On Projects</h2>
                <p>
                  Gain real-world experience through live projects and coding challenges that help you apply what you've learned.
                </p>
              </div>
            </div>
            <div className="bento-item item4">
              <div className="bento-content">
                <img src="/static/media/courses/best-python-training-in-coimbatore/icons/trainer.png"
                  alt="Expert Instructors for Python Course" 
                  title="Expert Instructors for Python Course" 
                />
                <h2>Expert Instructors</h2>
                <p>
                  Learn from seasoned Python professionals with years of industry experience who guide you step-by-step.
                </p>
              </div>
            </div>
            <div className="bento-item item5">
              <div className="bento-content">
                <img src="/static/media/courses/best-python-training-in-coimbatore/icons/job.png"
                  alt="Get 100% Job Placement Assistance with Our Python Course"
                  title="Get 100% Job Placement Assistance with Our Python Course" 
                />
                <h2>Job Placement Assistance</h2>
                <p>
                  Receive support with resume building and interview preparation to secure opportunities in top tech companies.
                </p>
              </div>
            </div>
          </div>
          {/* Bento Grid Section End */}

          {/* Our Approach Section Start */}
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
          {/* Our Approach Section End */}

          {/* Curriculum Strip Section Start */}
          <section className="curriculum-strip py-40">
            <div className="container">
              <div className="curriculum-wrapper">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="curriculum-content" data-aos="fade-right">
                      <div className="icon-box mb-3">
                        <i className="fas fa-book-open fa-2x" style={{color: '#22afdb'}}></i>
                      </div>
                      <h3 className="mb-3">Explore Our Comprehensive Python Syllabus</h3>
                      <ul className="feature-list">
                        <li>
                          <i className="fas fa-check-circle" style={{color: '#22afdb'}}></i>
                          Python Fundamentals & OOP Concepts
                        </li>
                        <li>
                          <i className="fas fa-check-circle" style={{color: '#22afdb'}}></i>
                          Data Structures & Algorithms
                        </li>
                        <li>
                          <i className="fas fa-check-circle" style={{color: '#22afdb'}}></i>
                          Web Development with Django
                        </li>
                        <li>
                          <i className="fas fa-check-circle" style={{color: '#22afdb'}}></i>
                          Data Science & Machine Learning Basics
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="download-card" data-aos="fade-left">
                      <div className="card-inner">
                        <div className="pdf-icon">
                          <i className="far fa-file-pdf fa-3x text-danger"></i>
                        </div>
                        <h4 className="mb-3">Download Complete Syllabus</h4>
                        <p className="mb-4">
                          Get detailed information about course modules.
                        </p>
                        <div className="main-menu__right">
                          <a href="/static/media/courses/best-python-training-in-coimbatore/syllabus/python-syllabus.pdf" 
                             className="educate-btn sm d-xl-flex" 
                             download>
                            <span className="educate-btn__curve"></span>Download Syllabus
                          </a>
                        </div>
                      </div>
                      <div className="shape-1"></div>
                      <div className="shape-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Curriculum Strip Section End */}

          {/* Course Schedule Section Start */}
          <section className="course-schedule py-60">
            <div className="">
              <div className="section-heading text-center mb-5" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Course Details</h6>
                <h2>Program <span className="fm-sec">Overview</span></h2>
              </div>

              <div className="course-details-wrapper" data-aos="fade-up">
                <div className="details-list">
                  <div className="detail-item">
                    <div className="detail-icon">
                      <i className="fas fa-calendar-alt"></i>
                    </div>
                    <div className="detail-content">
                      <h3>Course Duration</h3>
                      <p>3 to 4 Months</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <i className="fas fa-laptop"></i>
                    </div>
                    <div className="detail-content">
                      <h3>Training Mode</h3>
                      <div className="mode-list">
                        <span className="mode-item">
                          <i className="fas fa-globe"></i> Online Classes
                        </span>
                        <span className="mode-item">
                          <i className="fas fa-building"></i> Offline Classes
                        </span>
                        <span className="mode-item">
                          <i className="fas fa-house"></i> One-on-One Classes
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-item">
                    <div className="detail-icon">
                      <i className="fas fa-users"></i>
                    </div>
                    <div className="detail-content">
                      <h3>Target Audience</h3>
                      <div className="audience-list">
                        <span className="audience-item">
                          <i className="fas fa-graduation-cap"></i> 12th Completed Students
                        </span>
                        <span className="audience-item">
                          <i className="fas fa-briefcase"></i> Working Professionals
                        </span>
                        <span className="audience-item">
                          <i className="fas fa-house"></i> Career Switchers
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="detail-item batch-timing-container">
                    <div className="detail-icon">
                      <i className="fas fa-clock"></i>
                    </div>
                    <div className="detail-content">
                      <h3>Batch Timings</h3>
                      <p className="batch-subtitle">Next available batches starting soon</p>
                      <div className="batch-schedule">
                        <div className="batch-row">
                          <div className="batch-date">
                            <span className="date-number">15</span>
                            <span className="date-month">Jan/2026</span>
                          </div>
                          <div className="batch-info">
                            <div className="batch-type">Mon (Mon - Fri)</div>
                            <div className="batch-label">WEEKDAYS BATCH</div>
                          </div>
                          <div className="batch-time">
                            <div className="time"><i className="fas fa-clock-o time-icon"></i> 08:00 AM (IST)</div>
                            <div className="duration"><i className="fas fa-hourglass-half duration-icon"></i> (Class 2Hrs | 8Hrs) / Per Session</div>
                          </div>
                        </div>
                      </div>
                      <div className="batch-note">
                        <i className="fas fa-info-circle"></i> Weekend batches also available. Contact us for more information.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="enroll-action text-center mt-4">
                  <a href="#course-form" className="educate-btn">
                    <span className="educate-btn__curve"></span>
                    Enroll Now
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* Course Schedule Section End */}

          {/* Tab Section Start */}
          <section className="course-tabs py-60">
            <div className="container">
              <div className="nav-container mb-4">
                <ul className="nav nav-pills" id="courseTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" data-bs-toggle="pill" data-bs-target="#certification" type="button">
                      <i className="fas fa-certificate me-2"></i>
                      <span>Certification</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#why-python" type="button">
                      <i className="fas fa-rocket me-2"></i>
                      <span>Why Python</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#job-opportunities" type="button">
                      <i className="fas fa-briefcase me-2"></i>
                      <span>Job Opportunities</span>
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" data-bs-toggle="pill" data-bs-target="#course-fees" type="button">
                      <i className="fas fa-tags me-2"></i>
                      <span>Course Fees</span>
                    </button>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="courseTabContent">
                <div className="tab-pane fade show active" id="certification">
                  <div className="tab-card">
                    <div className="tab-card-body">
                      <h3>Earn your Python Certification and Elevate your Career</h3>
                      <div className="row align-items-center justify-content-center">
                        <div className="col-lg-8">
                          <div className="content-wrapper">
                            <p>
                              In today's competitive job market, companies increasingly seek candidates with verified skills, and a Python certification is a key asset to stand out. Earning this certification boosts your credibility and enhances your chances of being noticed by top employers. With Yale's recognized certification, you can demonstrate your Python expertise, helping you secure a job with a competitive package.
                            </p>
                            <div className="highlight-points">
                              <div className="highlight-item">
                                <i className="fas fa-award"></i>
                                <div className="highlight-text">
                                  <h4>Industry Recognition</h4>
                                  <p>Yale-certified Python expertise</p>
                                </div>
                              </div>
                              <div className="highlight-item">
                                <i className="fas fa-chart-line"></i>
                                <div className="highlight-text">
                                  <h4>Career Growth</h4>
                                  <p>Enhanced job prospects</p>
                                </div>
                              </div>
                              <div className="highlight-item">
                                <i className="fas fa-shield-alt"></i>
                                <div className="highlight-text">
                                  <h4>Skill Validation</h4>
                                  <p>Verified technical expertise</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="certificate-image">
                            <img src="/static/media/certificate/certificate-python.webp"
                              alt="Certificate python course in coimbatore" 
                              title="Certificate python course in coimbatore"
                              className="img-fluid" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="why-python">
                  <div className="tab-card">
                    <div className="tab-card-body">
                      <h3>Why Python is a Must-Learn Skill in 2025</h3>
                      <div className="content-wrapper">
                        <p>
                          Python has solidified its place as a key programming language in 2025, driven by its simplicity and versatility. It is the foundation for high-demand fields such as artificial intelligence, data science, and automation, making it an essential skill for anyone looking to stay competitive in today's tech world.
                        </p>
                        <p>
                          Its powerful libraries and frameworks, allows developers to build solutions quickly and efficiently. As industries continue to innovate and rely more on data-driven technologies, Python's role as a universal language will only grow, making it a must-learn skill for the future.
                        </p>
                        <div className="highlight-points">
                          <div className="highlight-item">
                            <i className="fas fa-robot"></i>
                            <div className="highlight-text">
                              <h4>AI & Automation</h4>
                              <p>Leading language for AI development</p>
                            </div>
                          </div>
                          <div className="highlight-item">
                            <i className="fas fa-database"></i>
                            <div className="highlight-text">
                              <h4>Data Science</h4>
                              <p>Powerful data analysis capabilities</p>
                            </div>
                          </div>
                          <div className="highlight-item">
                            <i className="fas fa-code"></i>
                            <div className="highlight-text">
                              <h4>Versatility</h4>
                              <p>Wide range of applications</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="job-opportunities">
                  <div className="tab-card">
                    <div className="tab-card-body">
                      <h3>Job Opportunities for Python Developers</h3>
                      <div className="content-wrapper">
                        <p>
                          The demand for Python developers is rising, with opportunities across industries like tech, finance, healthcare, and e-commerce. Python's use in web development, data analysis, automation, and high-growth fields like AI and machine learning creates a wide range of roles in data science, software engineering, and AI research.
                        </p>
                        <p>
                          As companies seek skilled Python developers for innovative projects, job opportunities remain strong, offering excellent career prospects and competitive salaries.
                        </p>
                        <div className="highlight-points">
                          <div className="highlight-item">
                            <i className="fas fa-industry"></i>
                            <div className="highlight-text">
                              <h4>Multiple Industries</h4>
                              <p>Tech, Finance, Healthcare & more</p>
                            </div>
                          </div>
                          <div className="highlight-item">
                            <i className="fas fa-laptop-code"></i>
                            <div className="highlight-text">
                              <h4>Diverse Roles</h4>
                              <p>Development, Data Science & AI</p>
                            </div>
                          </div>
                          <div className="highlight-item">
                            <i className="fas fa-coins"></i>
                            <div className="highlight-text">
                              <h4>Competitive Pay</h4>
                              <p>Excellent salary prospects</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="course-fees">
                  <div className="tab-card">
                    <div className="tab-card-body">
                      <h3>Flexible and Affordable Python Course Fees</h3>
                      <div className="content-wrapper">
                        <p>
                          Our Python course is available at an affordable price of ₹17,000, offering excellent value for comprehensive training. With flexible learning options, you can access high-quality education without exceeding your budget. Invest in your future today with an affordable course that ensures quality and practical skills.
                        </p>
                        <div className="price-box">
                          <div className="price-amount">
                            <span className="currency">₹</span>
                            <span className="amount">17,000</span>
                          </div>
                        </div>
                        <div className="highlight-points">
                          <div className="highlight-item">
                            <i className="fas fa-clock"></i>
                            <div className="highlight-text">
                              <h4>Flexible Schedule</h4>
                              <p>Learn at your own pace</p>
                            </div>
                          </div>
                          <div className="highlight-item">
                            <i className="fas fa-graduation-cap"></i>
                            <div className="highlight-text">
                              <h4>Complete Training</h4>
                              <p>Comprehensive curriculum</p>
                            </div>
                          </div>
                          <div className="highlight-item">
                            <i className="fas fa-credit-card"></i>
                            <div className="highlight-text">
                              <h4>Easy Payment</h4>
                              <p>Flexible payment options</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Tab Section End */}
        </div>
      </section>
      {/* Course Detail Area End */}
    </>
  );
};

export default PythonTraining;
