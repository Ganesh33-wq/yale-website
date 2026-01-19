import React from 'react';

const CourseOverview = ({ overview, overviewPoints }) => {
  return (
    <section className="course-overview section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title" data-aos="fade-up">Course Overview</h2>
            <p className="overview-text" data-aos="fade-up" data-aos-delay="200">
              {overview}
            </p>
          </div>
        </div>
        
        {overviewPoints && overviewPoints.length > 0 && (
          <div className="row mt-4">
            <div className="col-12">
              <h3 className="subsection-title" data-aos="fade-up">What You'll Learn</h3>
              <ul className="overview-points">
                {overviewPoints.map((point, index) => (
                  <li key={index} data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                    <i className="fas fa-check-circle"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CourseOverview;
