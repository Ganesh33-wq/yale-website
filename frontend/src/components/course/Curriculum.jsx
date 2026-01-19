import React, { useState } from 'react';

const Curriculum = ({ curriculum }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="curriculum-section section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title" data-aos="fade-up">Course Curriculum</h2>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-lg-8 mx-auto">
            <div className="curriculum-accordion">
              {curriculum && curriculum.map((item, index) => (
                <div
                  key={index}
                  className={`curriculum-item ${activeIndex === index ? 'active' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={100 * (index + 1)}
                >
                  <div
                    className="curriculum-header"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="curriculum-title">
                      <span className="number">{index + 1}</span>
                      <h4>{item.title}</h4>
                    </div>
                    <div className="curriculum-meta">
                      <span className="details">{item.details}</span>
                      <i className={`fas fa-chevron-${activeIndex === index ? 'up' : 'down'}`}></i>
                    </div>
                  </div>
                  {activeIndex === index && item.description && (
                    <div className="curriculum-body">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
