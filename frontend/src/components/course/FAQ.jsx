import React, { useState } from 'react';

const FAQ = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="section-title" data-aos="fade-up">Frequently Asked Questions</h2>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-lg-10 mx-auto">
            <div className="faq-accordion">
              {faqs && faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                  data-aos="fade-up"
                  data-aos-delay={50 * (index + 1)}
                >
                  <div
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <h5>{faq.question}</h5>
                    <i className={`fas fa-${activeIndex === index ? 'minus' : 'plus'}`}></i>
                  </div>
                  {activeIndex === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
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

export default FAQ;
