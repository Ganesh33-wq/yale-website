import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-card" data-aos="fade-up">
      {blog.featuredImage && (
        <div className="blog-image">
          <Link to={`/blog/${blog.slug}`}>
            <img src={blog.featuredImage} alt={blog.title} />
          </Link>
        </div>
      )}
      
      <div className="blog-content">
        {blog.category && (
          <div className="blog-category">
            <Link to={`/blog?category=${blog.category.slug}`}>
              {blog.category.name}
            </Link>
          </div>
        )}
        
        <h3 className="blog-title">
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        
        <p className="blog-summary">{blog.summary}</p>
        
        <div className="blog-meta">
          <span className="meta-item">
            <i className="fas fa-calendar"></i>
            {formatDate(blog.createdAt)}
          </span>
          <span className="meta-item">
            <i className="fas fa-eye"></i>
            {blog.viewCount} views
          </span>
        </div>
        
        <Link to={`/blog/${blog.slug}`} className="read-more">
          Read More <i className="fas fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
