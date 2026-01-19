import React from 'react';
import { useForm } from '../../hooks/useForm';
import { contactService } from '../../services/contactService';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  const handleSubmit = async (values) => {
    try {
      const response = await contactService.submitContact(values);
      toast.success(response.message || 'Message sent successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to send message');
      throw error;
    }
  };

  const { values, errors, submitting, handleChange, handleSubmit: onSubmit } = useForm(
    initialState,
    handleSubmit
  );

  return (
    <form onSubmit={onSubmit} className="contact-form">
      <div className="row">
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            placeholder="Your Name *"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>
        
        <div className="col-md-6 mb-3">
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Your Email *"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>
        
        <div className="col-md-6 mb-3">
          <input
            type="tel"
            className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
            placeholder="Phone Number *"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        
        <div className="col-md-6 mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
          />
        </div>
        
        <div className="col-12 mb-3">
          <textarea
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            placeholder="Your Message *"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>
        
        <div className="col-12">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
