import React from 'react';

const CourseBanner = ({ course }) => {
  return (
    <section className="course-banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <h1 className="course-title" data-aos="fade-up">{course.title}</h1>
            <p className="course-description" data-aos="fade-up" data-aos-delay="200">
              {course.description}
            </p>
            <div className="course-meta" data-aos="fade-up" data-aos-delay="400">
              <span className="meta-item">
                <i className="fas fa-layer-group"></i> {course.category}
              </span>
              <span className="meta-item">
                <i className="fas fa-signal"></i> {course.difficulty}
              </span>
              <span className="meta-item">
                <i className="fas fa-video"></i> {course.videoCount} Videos
              </span>
              <span className="meta-item">
                <i className="fas fa-clock"></i> {course.duration} Hours
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="course-price-card" data-aos="fade-left">
              <div className="price">₹{course.price.toLocaleString()}</div>
              <p className="price-label">Course Fee</p>
              <div className="course-stats">
                <div className="stat">
                  <i className="fas fa-tasks"></i>
                  <span>{course.assignments} Assignments</span>
                </div>
                <div className="stat">
                  <i className="fas fa-certificate"></i>
                  <span>Certificate Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseBanner;
