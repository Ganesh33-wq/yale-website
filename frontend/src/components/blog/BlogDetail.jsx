import React from 'react';

const BlogDetail = ({ blog }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="blog-detail">
      {blog.featuredImage && (
        <div className="blog-featured-image">
          <img src={blog.featuredImage} alt={blog.title} />
        </div>
      )}
      
      <div className="blog-header">
        {blog.category && (
          <span className="blog-category">{blog.category.name}</span>
        )}
        <h1 className="blog-title">{blog.title}</h1>
        
        <div className="blog-meta">
          <span className="meta-item">
            <i className="fas fa-user"></i> {blog.author}
          </span>
          <span className="meta-item">
            <i className="fas fa-calendar"></i> {formatDate(blog.createdAt)}
          </span>
          <span className="meta-item">
            <i className="fas fa-eye"></i> {blog.viewCount} views
          </span>
        </div>
      </div>
      
      {blog.tableOfContents && blog.tableOfContents.length > 0 && (
        <div className="table-of-contents">
          <h4>Table of Contents</h4>
          <ul>
            {blog.tableOfContents.map((item, index) => (
              <li key={index} className={`toc-level-${item.level}`}>
                <a href={`#${item.id}`}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
};

export default BlogDetail;
