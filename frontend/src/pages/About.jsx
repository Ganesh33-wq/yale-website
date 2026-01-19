import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';

const About = () => {
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
        title="About - Yale IT Skill Hub Training Institute in Coimbatore"
        description="Upgrade your tech skills with the best software training institute in Coimbatore. Hands-on learning, expert mentors & job-focused courses"
        keywords="Software training institute Coimbatore, best software training institute in Coimbatore, Top software training institute in Coimbatore"
      />

      {/* Page Banner Start */}
      <section className="page_title_banner">
        <div className="container">
          <div className="content" style={{padding: '160px 0 46px'}}>    
            <div className="title">
              <h1>About Us</h1>
              <img src="/static/media/shapes/tag-2.png" alt="icon" title="icon" className="tag" />
            </div>
            <div className="educate-tilt">
              <img src="/static/media/resources/page_title.webp" alt="icon" title="icon" className="banner-title-img" />
            </div>
            <img src="/static/media/shapes/circle-lines-2.png" alt="circle vector" title="icon" className="circle_vector" />
          </div>
        </div>
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-wrapper">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Banner End */}

      {/* About Area Start */}
      <section className="about-section py-40">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-48 mb-lg-0">
              <div className="heading mb-16">
                <h6 className="color-primary mb-8">–––– About us</h6>
                <h2>Building Strong IT Careers for a <span className="fm-sec"> Brighter Future</span></h2>
              </div>
              <p className="mb-32">
                Yale IT Skill Hub, founded in 2023 and based in Coimbatore, is a team of skilled engineers specializing in both enterprise IT solutions and value-added IT solutions. Our enterprise solutions help businesses set up and manage scalable, efficient IT infrastructures. Our value-added solutions enhance these systems with custom features, integrations, and ongoing support to improve overall performance and functionality. As a "ONE STOP IT SOLUTION" provider, we address every aspect of a company's IT infrastructure needs. With advanced technology from our trusted partners, we deliver effective solutions and continuous support to help our customers succeed. Building on our industry experience, we have turned into Coimbatore's top IT training academy, equipping students with the skills they need to succeed in this competitive field.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img style={{borderRadius: '20px'}} src="/static/media/resources/about-2.webp" alt="Best Software Training Institute in Coimbatore" title="Best Software Training Institute in Coimbatore" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area End */}

      {/* Benefits Area Start */}
      <section className="benefits py-60">
        <div className="container">
          <div className="heading_block">
            <h6 className="color-primary mb-8">–––– Mission & Vision</h6>
            <h2 className="mb-32">Our Purpose and Aspirations<br /><span className="fm-sec">Yale IT Skill Hub</span></h2>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-lg-4 col-sm-6 card_block wow fadeInUp" data-wow-delay="600ms">
              <div className="feature__card mb-24 mb-sm-0">
                <div className="feature__icon">
                  <img src="/static/media/icons/Check-mark.png" alt="Our Mission icon" title="Our Mission icon" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">Our Mission</h5>
                  <p>Our mission is to provide students with top-quality IT training, bridging the gap between talent and technology. At Yale IT Skill Hub, we encourage creativity, critical thinking, and career development, equipping students with the skills and knowledge needed to succeed in the software industry.</p>
                  <img src="/static/media/shapes/feture-bg-shape.png" alt="background shape" title="background shape" className="feature-bg-shape" />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4 col-sm-6 card_block wow fadeInUp" data-wow-delay="400ms">
              <div className="feature__card mb-24 mb-xl-0">
                <div className="feature__icon">
                  <img src="/static/media/icons/Quality.png" alt="Our Vision icon" title="Our Vision icon" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">Our Vision</h5>
                  <p>Our vision is to develop highly skilled students and inspire the next generation by sharing knowledge of the latest technologies. We aim to become a leading institution dedicated to nurturing exceptionally talented students for years to come.</p>
                  <img src="/static/media/shapes/feture-bg-shape.png" alt="background shape" title="background shape" className="feature-bg-shape" />
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-lg-4 col-sm-6 offset-xxl-2 card_block wow fadeInUp" data-wow-delay="200ms">
              <div className="feature__card mb-24 mb-xl-0">
                <div className="feature__icon">
                  <img src="/static/media/icons/Pricing.png" alt="Our Values icon" title="Our Values icon" />
                </div>
                <div className="feature__content">
                  <h5 className="mb-8">Our Values</h5>
                  <p>At Yale Info Tech, we create a safe, peaceful environment that promotes growth. Our commitment to excellence inspires us to exceed expectations, nurture uniqueness, and provide continuous feedback, enabling students to focus on problem-solving and make a meaningful impact.</p>
                  <img src="/static/media/shapes/feture-bg-shape.png" alt="background shape" title="background shape" className="feature-bg-shape" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Area End */}

      {/* Programs and Services Section Start */}
      <section className="programs-services py-40">
        <div className="container">
          <div className="row justify-content-center mb-2">
            <div className="col-lg-8 text-center">
              <div className="section-heading" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Programs</h6>
                <h2>Comprehensive Training <span className="fm-sec">Programs</span></h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="marquee-wrapper">
          {/* First Layer */}
          <div className="marquee-block">
            <div className="marquee-inner to-left">
              <div className="marquee-content">
                <div className="capsule-item"><Link to="/course/python-training">Python course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/java-training">Java course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/full-stack-training">Full stack course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/digital-marketing">Digital marketing course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/python-training">Python coaching centre in Coimbatore</Link></div>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <div className="capsule-item"><Link to="/course/ui-ux-design">UI UX designer course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/ai">Ai course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/data-science">Data science course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/cyber-security">Cyber security course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/services/final-year-project">ieee project centre in coimbatore</Link></div>
              </div>
            </div>
          </div>

          {/* Second Layer */}
          <div className="marquee-block">
            <div className="marquee-inner to-right">
              <div className="marquee-content">
                <div className="capsule-item"><Link to="/services/internship">Internship training in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/services/final-year-project">Final year project in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/full-stack-training">Full stack developer course in Coimbatore with placement</Link></div>
                <div className="capsule-item"><Link to="/course/python-training">Python training in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/java-training">Java training in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/services/final-year-project">Final year project in coimbatore</Link></div>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <div className="capsule-item"><Link to="/course/full-stack-training">Full stack training in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/digital-marketing">Digital marketing training in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/ui-ux-design">ui ux design course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/ai">Artificial intelligence course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/data-science">Data analytic course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/python-training">Python programming course in Coimbatore</Link></div>
              </div>
            </div>
          </div>

          {/* Third Layer */}
          <div className="marquee-block">
            <div className="marquee-inner to-left">
              <div className="marquee-content">
                <div className="capsule-item"><Link to="/course/data-science">Artificial intelligence and Data science course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/digital-marketing">Digital marketing training institute in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/cyber-security">Ethical hacking course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/cyber-security">Best ethical hacking institute in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/services/internship">Inplant training in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/data-science">Best data science course in coimbatore</Link></div>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <div className="capsule-item"><Link to="/services/final-year-project">Final year project centre in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/python-training">Python Training Institute in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/java-training">Java Training Institute in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/full-stack-training">Full stack developer course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/ui-ux-design">ui ux training institute in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/java-training">Java full stack course in Coimbatore</Link></div>
              </div>
            </div>
          </div>

          {/* Fourth Layer */}
          <div className="marquee-block">
            <div className="marquee-inner to-right">
              <div className="marquee-content">
                <div className="capsule-item"><Link to="/course/digital-marketing">Best digital marketing course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/python-training">Python programming course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/ui-ux-design">ui ux course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/data-science">Data scientist course in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/cyber-security">Best ethical hacking institute in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/java-training">Java full stack developer course in Coimbatore</Link></div>
              </div>
              <div className="marquee-content" aria-hidden="true">
                <div className="capsule-item"><Link to="/services/final-year-project">Best final year project centre in coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/python-training">Python course training in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/java-training">Java training with placement in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/full-stack-training">Full stack web development course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/ui-ux-design">Best ui ux designing course in Coimbatore</Link></div>
                <div className="capsule-item"><Link to="/course/digital-marketing">Digital marketing institute in Coimbatore</Link></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Programs and Services Section End */}

      {/* Why Choose Us Section Start */}
      <section className="why-choose-us py-60">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-heading" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Why Choose Us</h6>
                <h2>Empowering Your <span className="fm-sec">IT Career Journey</span></h2>
                <p className="mt-3">Discover why Yale IT Skill Hub is the preferred choice for aspiring IT professionals</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center g-4">
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="why-choose-card text-center">
                <div className="icon-wrapper-container">
                  <div className="icon-wrapper primary">
                    <img className="icon-img" src="/static/media/icons/why-choose-us/itsolution.png" alt="Comprehensive IT Solutions" title="Comprehensive IT Solutions" />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="mb-8">Comprehensive IT Solutions</h4>
                  <p>One-stop provider for all IT infrastructure training needs, offering practical and industry-relevant expertise for modern tech challenges.</p>
                </div>
                <div className="hover-effect"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="why-choose-card text-center">
                <div className="icon-wrapper-container">
                  <div className="icon-wrapper secondary">
                    <img className="icon-img" src="/static/media/icons/why-choose-us/experience.png" alt="Industry Experience" title="Industry Experience" />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="mb-8">Industry Experience</h4>
                  <p>Real-world knowledge and hands-on skills essential for excelling in the IT field, backed by practical industry exposure.</p>
                </div>
                <div className="hover-effect"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="why-choose-card text-center">
                <div className="icon-wrapper-container">
                  <div className="icon-wrapper tertiary">
                    <img className="icon-img" src="/static/media/icons/why-choose-us/training.png" alt="Expert-Led Training" title="Expert-Led Training" />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="mb-8">Expert-Led Training</h4>
                  <p>Programs led by seasoned industry professionals, ensuring top-quality education and practical insights for career growth.</p>
                </div>
                <div className="hover-effect"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="why-choose-card text-center">
                <div className="icon-wrapper-container">
                  <div className="icon-wrapper quaternary">
                    <img className="icon-img" src="/static/media/icons/why-choose-us/learning.png" alt="Adaptable Learning" title="Adaptable Learning" />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="mb-8">Adaptable Learning</h4>
                  <p>Flexible courses aligned with evolving IT sector demands, providing personalized support and learning options.</p>
                </div>
                <div className="hover-effect"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="why-choose-card text-center">
                <div className="icon-wrapper-container">
                  <div className="icon-wrapper quinary">
                    <img className="icon-img" src="/static/media/icons/why-choose-us/graduate.png" alt="Career Advancement" title="Career Advancement" />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="mb-8">Career Advancement</h4>
                  <p>Comprehensive career guidance to enhance technical skills and secure rewarding IT roles in leading companies.</p>
                </div>
                <div className="hover-effect"></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
              <div className="why-choose-card text-center">
                <div className="icon-wrapper-container">
                  <div className="icon-wrapper senary">
                    <img className="icon-img" src="/static/media/icons/why-choose-us/partner.png" alt="Trusted Partner" title="Trusted Partner" />
                  </div>
                </div>
                <div className="card-content">
                  <h4 className="mb-8">Trusted Partner</h4>
                  <p>Your dedicated partner in achieving competitive salaries and building a bright future in the IT industry.</p>
                </div>
                <div className="hover-effect"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section End */}

      {/* Unique approach Section Start */}
      <section className="about-section pt-60 pb-30">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <div className="educate-tilt">
                <img style={{borderRadius: '20px'}} src="/static/media/resources/unique-approach-of-yaleit.webp" alt="Our software training institute unique approach" className="img-fluid" title="Our software training institute unique approach" />
              </div>
            </div>
            <div className="col-lg-6 mb-48 mb-lg-0 pt-3">
              <div className="heading mb-16">
                <h6 className="color-primary mb-8">–––– Our Unique Approach</h6>
                <h2>Learn, practice, and get hired<span className="fm-sec">Our unique approach to IT education</span></h2>
              </div>
              <p className="mb-32">
                At Yale IT Skill Hub, we take a unique approach to IT education that bridges the gap between theoretical knowledge and practical application. Our focus is on helping students not only learn key concepts but also practice them through hands-on experiences and live projects. This real-world exposure ensures that our students gain the skills, confidence, and problem-solving abilities required to succeed in the IT industry. We are dedicated to making students job-ready, enabling them to secure rewarding positions with competitive salaries. With continuous support, mentorship, and career guidance, our approach prepares students to excel in the ever-evolving IT field.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Unique approach Section End */}

      {/* Team Section Start */}
      <section className="team-section pt-40 py-80 py-lg-40">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-8 text-center">
              <div className="section-heading" data-aos="fade-up">
                <h6 className="color-primary mb-8">–––– Our Team</h6>
                <h2>Meet Our Expert <span className="fm-sec">Trainers</span></h2>
                <p className="mt-3">Learn from industry professionals with years of hands-on experience in their respective domains</p>
              </div>
            </div>
          </div>

          <div className="row gap-5 gap-lg-0">
            <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="100">
              <div className="team__card mb-24">
                <div className="team__img_block">
                  <img src="/static/media/backgrounds/team-bg.png" alt="team member" title="team member" className="team_img" />
                  <div className="team__content_block">
                    <div className="team__text_block">
                      <img src="/static/media/team/empty-profile.webp" alt="Mohan Python Django trainer" title="Mohan Python Django trainer" className="team_profile_img" style={{borderRadius: '50%', width: '150px', height: '150px'}} />
                      <h5 className="mb-8"><a href="#team">Mohan</a></h5>
                      <ul className="team__info unstyled mb-16">
                        <li><i className="fas fa-star"></i>4.9</li>
                        <li><i className="fal fa-laptop-code"></i>Python Django Developer</li>
                        <li><i className="fal fa-clock"></i>4+ years experience</li>
                      </ul>
                      <img src="/static/media/shapes/feture-bg-shape.png" alt="background shape" title="background shape" className="text_block_bg_shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="200">
              <div className="team__card mb-24">
                <div className="team__img_block">
                  <img src="/static/media/backgrounds/team-bg.png" alt="Team Member" title="Team Member" className="team_img" />
                  <div className="team__content_block">
                    <div className="team__text_block">
                      <img src="/static/media/team/empty-profile.webp" alt="Vijay Kumar Java Spring Boot Developer" title="Vijay Kumar Java Spring Boot Developer" className="team_profile_img" style={{borderRadius: '50%', width: '150px', height: '150px'}} />
                      <h5 className="mb-8"><a href="#team">Vijay Kumar</a></h5>
                      <ul className="team__info unstyled mb-16">
                        <li><i className="fas fa-star"></i>4.8</li>
                        <li><i className="fal fa-code"></i>Java Spring Boot Developer</li>
                        <li><i className="fal fa-clock"></i>12+ years experience</li>
                      </ul>
                      <img src="/static/media/shapes/feture-bg-shape.png" title="background shape" alt="background shape" className="text_block_bg_shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="300">
              <div className="team__card mb-24">
                <div className="team__img_block">
                  <img src="/static/media/backgrounds/team-bg.png" alt="Team Member" title="Team Member" className="team_img" />
                  <div className="team__content_block">
                    <div className="team__text_block">
                      <img src="/static/media/team/empty-profile.webp" alt="Shaanmathy Digital Marketing Expert" title="Shaanmathy Digital Marketing Expert" className="team_profile_img" style={{borderRadius: '50%', width: '150px', height: '150px'}} />
                      <h5 className="mb-8"><a href="#team">Shaanmathy</a></h5>
                      <ul className="team__info unstyled mb-16">
                        <li><i className="fas fa-star"></i>5.0</li>
                        <li><i className="fal fa-paint-brush"></i>Digital Marketing Expert</li>
                        <li><i className="fal fa-clock"></i>5+ years experience</li>
                      </ul>
                      <img src="/static/media/shapes/feture-bg-shape.png" title="background shape" alt="background shape" className="text_block_bg_shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
              <div className="team__card mb-24">
                <div className="team__img_block">
                  <img src="/static/media/backgrounds/team-bg.png" alt="Team Member" title="Team Member" className="team_img" />
                  <div className="team__content_block">
                    <div className="team__text_block">
                      <img src="/static/media/team/empty-profile.webp" alt="Naveen UI/UX Developer" title="Naveen UI/UX Developer" className="team_profile_img" style={{borderRadius: '50%', width: '150px', height: '150px'}} />
                      <h5 className="mb-8"><a href="#team">Naveen</a></h5>
                      <ul className="team__info unstyled mb-16">
                        <li><i className="fas fa-star"></i>4.9</li>
                        <li><i className="fal fa-chart-line"></i>UI/UX Developer</li>
                        <li><i className="fal fa-clock"></i>4+ years experience</li>
                      </ul>
                      <img src="/static/media/shapes/feture-bg-shape.png" alt="Background Shape" className="text_block_bg_shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay="400">
              <div className="team__card mb-24">
                <div className="team__img_block">
                  <img src="/static/media/backgrounds/team-bg.png" alt="Team Member" title="Team Member" className="team_img" />
                  <div className="team__content_block">
                    <div className="team__text_block">
                      <img src="/static/media/team/empty-profile.webp" alt="Nithish Cybersecurity Specialist" title="Nithish Cybersecurity Specialist" className="team_profile_img" style={{borderRadius: '50%', width: '150px', height: '150px'}} />
                      <h5 className="mb-8"><a href="#team">Nithish</a></h5>
                      <ul className="team__info unstyled mb-16">
                        <li><i className="fas fa-star"></i>4.9</li>
                        <li><i className="fal fa-chart-line"></i>Cybersecurity Specialist</li>
                        <li><i className="fal fa-clock"></i>7+ years experience</li>
                      </ul>
                      <img src="/static/media/shapes/feture-bg-shape.png" alt="background shape" title="background shape" className="text_block_bg_shape" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section End */}
    </>
  );
};

export default About;
