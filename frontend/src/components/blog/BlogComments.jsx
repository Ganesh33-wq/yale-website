import React from 'react';
import { useForm } from '../../hooks/useForm';
import { blogService } from '../../services/blogService';
import { toast } from 'react-toastify';

const BlogComments = ({ blogSlug, comments = [] }) => {
  const initialState = {
    name: '',
    email: '',
    comment: '',
  };

  const handleSubmit = async (values) => {
    try {
      const response = await blogService.addComment(blogSlug, values);
      toast.success(response.message || 'Comment submitted for approval!');
    } catch (error) {
      toast.error(error.message || 'Failed to submit comment');
      throw error;
    }
  };

  const { values, errors, submitting, handleChange, handleSubmit: onSubmit } = useForm(
    initialState,
    handleSubmit
  );

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-comments-section">
      <h3 className="comments-title">Comments ({comments.length})</h3>
      
      {comments.length > 0 && (
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment._id} className="comment-item">
              <div className="comment-header">
                <h5 className="comment-author">{comment.name}</h5>
                <span className="comment-date">{formatDate(comment.createdAt)}</span>
              </div>
              <p className="comment-text">{comment.comment}</p>
            </div>
          ))}
        </div>
      )}
      
      <div className="comment-form-section">
        <h4>Leave a Comment</h4>
        <form onSubmit={onSubmit} className="comment-form">
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
            
            <div className="col-12 mb-3">
              <textarea
                className={`form-control ${errors.comment ? 'is-invalid' : ''}`}
                placeholder="Your Comment *"
                name="comment"
                rows="5"
                value={values.comment}
                onChange={handleChange}
                required
              ></textarea>
              {errors.comment && <div className="invalid-feedback">{errors.comment}</div>}
            </div>
            
            <div className="col-12">
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Post Comment'}
              </button>
              <p className="form-note">Your comment will be visible after approval.</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogComments;
