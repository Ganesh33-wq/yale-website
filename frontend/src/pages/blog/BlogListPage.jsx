import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import SEO from '../../components/common/SEO';
import Loader from '../../components/common/Loader';
import { blogService } from '../../services/blogService';
import { toast } from 'react-toastify';
import '../../styles/Blog.css';

const BlogListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState({});
  const [loading, setLoading] = useState(true);

  const currentPage = parseInt(searchParams.get('page')) || 1;
  const category = searchParams.get('category') || '';
  const searchQuery = searchParams.get('q') || '';

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
    // eslint-disable-next-line
  }, [currentPage, category, searchQuery]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogService.getAllBlogs({ page: currentPage, category, search: searchQuery });
      setBlogs(response.data);
      setPagination(response.pagination);
    } catch (error) {
      toast.error('Failed to load blogs');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await blogService.getAllCategories();
      setCategories(response.data);
    } catch (error) {
      console.error('Failed to load categories:', error);
    }
  };

  const handleCategoryChange = (e) => {
    const categorySlug = e.target.value;
    if (categorySlug) {
      searchParams.set('category', categorySlug);
    } else {
      searchParams.delete('category');
    }
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('q');
    if (query) {
      searchParams.set('q', query);
    } else {
      searchParams.delete('q');
    }
    searchParams.set('page', '1');
    setSearchParams(searchParams);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  return (
    <>
      <SEO
        title="Blog - Yale IT Skill Hub"
        description="Read the latest articles and insights from Yale IT Skill Hub on technology, programming, and career development."
        keywords="yale it blog, software training articles, programming tutorials, tech blog coimbatore"
      />
      
      {/* Page Title Banner Start */}
      <section className="page_title_banner">
        <div className="container">
          <div className="content" style={{ padding: '160px 0 46px' }}>
            <div className="title text-left">
              <h1>Latest Insights & Articles</h1>
              <p className="mt-16">Stay updated with the latest trends in technology and education</p>
              <img src="/static/media/shapes/tag-2.png" alt="" className="tag" />
            </div>
            <div className="educate-tilt">
              <img src="/static/media/resources/page_title.webp" alt="" className="banner-title-img" />
            </div>
            <img src="/static/media/shapes/circle-lines-2.png" alt="" className="circle_vector" />
          </div>
        </div>
        
        {/* Breadcrumb Navigation */}
        <div className="breadcrumb-wrapper">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Blog</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      {/* Page Title Banner End */}
      
      {/* Blogs Area Start */}
      <section className="py-60">
        <div className="container">
          <div className="filter_row mb-48">
            <div className="left_block">
              <div className="select_filter">
                <span className="dark-gray h6">Filter By:</span>
                <select onChange={handleCategoryChange} value={category}>
                  <option value="">All Categories</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat.slug}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="right_block">
              {pagination.total > 0 && (
                <h6 className="dark-gray">
                  Showing {((currentPage - 1) * pagination.limit) + 1}-
                  {Math.min(currentPage * pagination.limit, pagination.total)} of {pagination.total} articles
                </h6>
              )}
              <form onSubmit={handleSearch} className="search_bar">
                <button type="submit"><i className="fal fa-search"></i></button>
                <input 
                  type="search" 
                  name="q" 
                  className="form-control" 
                  placeholder="Search articles..." 
                  defaultValue={searchQuery}
                />
              </form>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-60">
              <Loader />
            </div>
          ) : (
            <div className="row g-4">
              {blogs.length > 0 ? (
                blogs.map((post) => (
                  <div key={post._id} className="col-lg-4 col-md-6">
                    <div className="blog_card hover-up">
                      <div className="blog_card_img_block">
                        <img 
                          src={post.featuredImage || '/static/media/blog/default.jpg'} 
                          alt={post.title} 
                        />
                        <div className="blog-meta">
                          <span className="date">{formatDate(post.createdAt)}</span>
                          <span className="category">{post.category?.name || 'General'}</span>
                        </div>
                      </div>
                      <div className="blog_card_text_block">
                        <h5 className="mb-16">
                          <Link className="blog_title" to={`/blog/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h5>
                        <p className="mb-24">
                          {post.summary?.substring(0, 120)}...
                        </p>
                        <div className="blog_card_footer">
                          <div className="author">
                            <img 
                              src={post.author?.avatar || '/static/media/users/default-avatar.svg'} 
                              alt={post.author?.name || 'Admin'} 
                            />
                            <div className="author_info">
                              <h6 className="dark-gray mb-4p">
                                {post.author?.name || 'Admin'}
                              </h6>
                              <p className="small">
                                {post.author?.title || 'Administrator'}
                              </p>
                            </div>
                          </div>
                          <Link to={`/blog/${post.slug}`} className="h6 color-primary educate_link_btn">
                            Read More<i className="far fa-chevron-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center py-60">
                  <div className="no-results">
                    <img src="/static/media/shapes/no-results.svg" alt="No Results" className="mb-24" style={{ maxWidth: '200px' }} />
                    <h4 className="mb-16">No Posts Found</h4>
                    <p className="mb-24">We couldn't find any posts matching your search criteria.</p>
                    <Link to="/blog" className="educate-btn">View All Posts</Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {pagination.pages > 1 && (
            <div className="pagination_wrap mt-48">
              <ul className="pagination justify-content-center">
                {currentPage > 1 && (
                  <li className="page-item">
                    <button
                      onClick={() => {
                        searchParams.set('page', currentPage - 1);
                        setSearchParams(searchParams);
                      }}
                      className="page-link arrow"
                      aria-label="previous"
                    >
                      <i className="far fa-chevron-left"></i>
                    </button>
                  </li>
                )}

                {[...Array(pagination.pages)].map((_, index) => {
                  const pageNum = index + 1;
                  return (
                    <li key={pageNum} className="page-item">
                      <button
                        onClick={() => {
                          searchParams.set('page', pageNum);
                          setSearchParams(searchParams);
                        }}
                        className={`page-link ${currentPage === pageNum ? 'current' : ''}`}
                      >
                        {pageNum}
                      </button>
                    </li>
                  );
                })}

                {currentPage < pagination.pages && (
                  <li className="page-item">
                    <button
                      onClick={() => {
                        searchParams.set('page', currentPage + 1);
                        setSearchParams(searchParams);
                      }}
                      className="page-link arrow"
                      aria-label="next"
                    >
                      <i className="far fa-chevron-right"></i>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </section>
      {/* Blogs Area End */}
    </>
  );
};

export default BlogListPage;
