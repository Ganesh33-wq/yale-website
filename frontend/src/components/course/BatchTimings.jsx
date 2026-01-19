import React from 'react';

const BatchTimings = ({ upcomingBatches }) => {
  return (
    <section className="batch-timings-section section-padding bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h2 className="section-title" data-aos="fade-up">Upcoming Batch Timings</h2>
            <p className="section-subtitle" data-aos="fade-up" data-aos-delay="200">
              New batches starting every Monday
            </p>
          </div>
        </div>
        
        <div className="row mt-4">
          {upcomingBatches && upcomingBatches.map((date, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="batch-card" data-aos="zoom-in" data-aos-delay={100 * (index + 1)}>
                <div className="batch-icon">
                  <i className="fas fa-calendar-alt"></i>
                </div>
                <div className="batch-date">{date}</div>
                <div className="batch-label">Batch {index + 1}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row mt-4">
          <div className="col-12 text-center">
            <p className="timing-note">
              <i className="fas fa-info-circle"></i>
              Classes available on weekdays and weekends. Flexible timing options available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchTimings;
