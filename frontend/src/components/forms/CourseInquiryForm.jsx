import React from 'react';
import { useForm } from '../../hooks/useForm';
import { contactService } from '../../services/contactService';
import { toast } from 'react-toastify';

const CourseInquiryForm = ({ courseName }) => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    course: courseName || '',
    message: '',
  };

  const handleSubmit = async (values) => {
    try {
      const response = await contactService.submitCourseInquiry(values);
      toast.success(response.message || 'Inquiry submitted successfully!');
    } catch (error) {
      toast.error(error.message || 'Failed to submit inquiry');
      throw error;
    }
  };

  const { values, errors, submitting, handleChange, handleSubmit: onSubmit } = useForm(
    initialState,
    handleSubmit
  );

  return (
    <form onSubmit={onSubmit} className="inquiry-form">
      <div className="mb-3">
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
      
      <div className="mb-3">
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
      
      <div className="mb-3">
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
      
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Course Name"
          name="course"
          value={values.course}
          onChange={handleChange}
          readOnly={!!courseName}
        />
      </div>
      
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Message (Optional)"
          name="message"
          rows="3"
          value={values.message}
          onChange={handleChange}
        ></textarea>
      </div>
      
      <button type="submit" className="btn btn-primary w-100" disabled={submitting}>
        {submitting ? 'Submitting...' : 'Submit Inquiry'}
      </button>
    </form>
  );
};

export default CourseInquiryForm;
