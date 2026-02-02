// COPILOT: React version of Django templates/blog/blog_list.html rendered inside Django base.html body markup.
// Fetches blog posts from API and renders with same design/animations.
import { useEffect, useMemo, useState, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import baseTemplate from '../templates/base.html?raw';

const urlMap = {
  home: '/',
  about: '/about/',
  contact_page: '/contact/',
  contact: '/api/contact/',
  blog_list: '/blog/',
  blog_detail: '/blog/',
  python_training: '/course/best-python-training-in-coimbatore/',
  java_training: '/course/best-java-course-in-coimbatore/',
  full_stack_training: '/course/best-full-stack-course-in-coimbatore/',
  digital_marketing_course: '/course/best-digital-marketing-course-in-coimbatore/',
  ui_ux_design_course: '/course/best-ui-ux-designer-course-in-coimbatore/',
  ai_course: '/course/best-artificial-intelligence-course-in-coimbatore/',
  data_science_course: '/course/best-data-science-course-in-coimbatore/',
  cyber_security_course: '/course/best-cyber-security-course-in-coimbatore/',
  internship_training: '/internship-training-in-coimbatore/',
  final_year_project: '/services/final-year-project-center-in-coimbatore/',
};

const extractBody = (html) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
};

const replaceStatics = (html) => {
  let output = html.replace(/\{%-?\s*static\s+'([^']+)'\s*-?%\}/g, '/static/$1');
  Object.entries(urlMap).forEach(([key, value]) => {
    output = output.replace(new RegExp(`\{%-?\\s*url\\s+'${key}'[^%]*%\}`, 'g'), value);
  });
  return output;
};

const getBaseLayout = (baseHtml) => {
  const body = extractBody(baseHtml);
  return replaceStatics(body);
};

const BlogList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchParams.get('q') || '');
  const [currentCategory, setCurrentCategory] = useState(searchParams.get('category') || '');

  const baseLayout = useMemo(() => getBaseLayout(baseTemplate), []);

  // Fetch blog posts from API
  const fetchPosts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      const page = searchParams.get('page') || '1';
      const category = searchParams.get('category') || '';
      const q = searchParams.get('q') || '';
      
      if (page) params.append('page', page);
      if (category) params.append('category', category);
      if (q) params.append('q', q);

      const response = await fetch(`/api/blog/?${params.toString()}`);
      const data = await response.json();
      
      setPosts(data.posts || []);
      setCategories(data.categories || []);
      setPagination(data.pagination || null);
      setCurrentCategory(data.current_category || '');
      if (data.search_query !== undefined) {
        setLocalSearchQuery(data.search_query || '');
      }
      
      // Hide loader after data loads
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    document.title = 'Blog - Yale IT Academy';

    const initAnimations = () => {
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }

      if (window.WOW) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          mobile: true,
          live: true,
        });
        wow.init();
      }

      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
        setTimeout(() => window.AOS.refresh(), 200);
      }

      if (window.jQuery && window.jQuery.fn.tilt) {
        window.jQuery('.educate-tilt').tilt({
          maxTilt: 2,
          speed: 700,
          scale: 1
        });
      }

      // Sticky header
      const handleScroll = () => {
        const header = document.querySelector('header');
        if (header) {
          if (window.scrollY > 50) {
            header.classList.add('sticky');
          } else {
            header.classList.remove('sticky');
          }
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();

      // Mobile menu
      const menuToggle = document.querySelector('.hamburger-menu');
      const mobileNav = document.querySelector('.mobile_nav');
      const menuClose = document.querySelector('.mobile_nav .close');
      
      if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', (e) => {
          e.preventDefault();
          mobileNav.classList.add('show');
        });
      }
      
      if (menuClose && mobileNav) {
        menuClose.addEventListener('click', (e) => {
          e.preventDefault();
          mobileNav.classList.remove('show');
        });
      }
    };

    setTimeout(initAnimations, 100);
  }, []);

  // Refresh AOS when posts change
  useEffect(() => {
    if (!loading && window.AOS) {
      setTimeout(() => window.AOS.refresh(), 100);
    }
  }, [posts, loading]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set('category', category);
    } else {
      params.delete('category');
    }
    params.delete('page');
    setSearchParams(params);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (localSearchQuery) {
      params.set('q', localSearchQuery);
    } else {
      params.delete('q');
    }
    params.delete('page');
    setSearchParams(params);
  };

  const handlePageChange = (page) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    setSearchParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Generate static page content
  const staticContent = `
    <!-- Page Title Banner Start -->
    <section class="page_title_banner">
      <div class="container">
        <div class="content" style="padding: 160px 0 46px !important;">
          <div class="title text-left">
            <h1>Latest Insights & Articles</h1>
            <p class="mt-16">Stay updated with the latest trends in technology and education</p>
            <img src="/static/media/shapes/tag-2.png" alt="" class="tag">
          </div>
          <div class="educate-tilt" data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'>
            <img src="/static/media/resources/page_title.webp" alt="" class="banner-title-img">
          </div>
          <img src="/static/media/shapes/circle-lines-2.png" alt="" class="circle_vector">
        </div>
      </div>
      
      <div class="breadcrumb-wrapper">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
    <!-- Page Title Banner End -->

    <section class="py-60 blog-section">
      <div class="container blog-container">
      </div>
    </section>
  `;

  const renderedHtml = useMemo(() => {
    return baseLayout.replace(
      /<main>[\s\S]*?<\/main>/,
      `<main>\n${staticContent}\n</main>`
    );
  }, [baseLayout]);

  // Render blog posts
  const renderPosts = () => {
    if (loading) {
      return (
        <div className="col-12">
          <div className="loading-spinner"></div>
        </div>
      );
    }

    if (posts.length === 0) {
      return (
        <div className="col-12 text-center py-60">
          <div className="no-results">
            <h4 className="mb-16">No Posts Found</h4>
            <p className="mb-24">We couldn't find any posts matching your search criteria.</p>
            <Link to="/blog/" className="educate-btn">View All Posts</Link>
          </div>
        </div>
      );
    }

    return posts.map(post => (
      <div className="col-lg-4 col-md-6" key={post.id}>
        <div className="blog_card hover-up">
          <div className="blog_card_img_block">
            <img src={post.featured_image} alt={post.title} width="400" height="250" />
            <div className="blog-meta">
              <span className="date">{post.created_at}</span>
              {post.category && <span className="category">{post.category.name}</span>}
            </div>
          </div>
          <div className="blog_card_text_block">
            <h5 className="mb-16">
              <Link className="blog_title" to={`/blog/${post.slug}/`}>{post.title}</Link>
            </h5>
            <p className="mb-24">{post.summary}</p>
            <div className="blog_card_footer">
              <div className="author">
                <img src={post.author.avatar} alt={post.author.name} width="40" height="40" />
                <div className="author_info">
                  <h6 className="dark-gray mb-4p">{post.author.name}</h6>
                  <p className="small">{post.author.title}</p>
                </div>
              </div>
              <Link to={`/blog/${post.slug}/`} className="h6 color-primary educate_link_btn">
                Read More<i className="far fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // Render pagination
  const renderPagination = () => {
    if (!pagination || pagination.total_pages <= 1) return null;

    const pages = [];
    for (let i = 1; i <= pagination.total_pages; i++) {
      pages.push(i);
    }

    return (
      <div className="pagination_wrap mt-48">
        <ul className="pagination justify-content-center">
          {pagination.has_previous && (
            <li className="page-item">
              <button 
                className="page-link arrow" 
                onClick={() => handlePageChange(pagination.previous_page)}
              >
                <i className="far fa-chevron-left"></i>
              </button>
            </li>
          )}
          {pages.map(num => (
            <li className="page-item" key={num}>
              <button 
                className={`page-link ${pagination.current_page === num ? 'current' : ''}`}
                onClick={() => handlePageChange(num)}
              >
                {num}
              </button>
            </li>
          ))}
          {pagination.has_next && (
            <li className="page-item">
              <button 
                className="page-link arrow"
                onClick={() => handlePageChange(pagination.next_page)}
              >
                <i className="far fa-chevron-right"></i>
              </button>
            </li>
          )}
        </ul>
      </div>
    );
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
      
      <style>{`
        .filter_row {
          background: #fff;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 48px;
        }

        .left_block {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .select_filter {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .category-select {
          padding: 10px 15px;
          border-radius: 8px;
          border: 1px solid #eee;
          background: #f8f9fa;
          cursor: pointer;
          min-width: 150px;
        }

        .right_block {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .search_bar {
          position: relative;
          max-width: 300px;
        }

        .search_bar input {
          padding: 10px 15px 10px 40px;
          border-radius: 30px;
          border: 1px solid #eee;
          background: #f8f9fa;
          width: 100%;
        }

        .search_bar button {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #7a8582;
          cursor: pointer;
        }

        .blog_card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .blog_card.hover-up:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .blog_card_img_block {
          position: relative;
          overflow: hidden;
        }

        .blog_card_img_block img {
          width: 100%;
          height: 240px;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog_card:hover .blog_card_img_block img {
          transform: scale(1.05);
        }

        .blog_card_img_block .blog-meta {
          position: absolute;
          bottom: 15px;
          left: 15px;
          right: 15px;
          display: flex;
          gap: 10px;
        }

        .blog_card_img_block .blog-meta span {
          background: rgba(255,255,255,0.9);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: #0aa6d7;
          font-weight: 500;
        }

        .blog_card_text_block {
          padding: 24px;
        }

        .blog_title {
          color: #2a322d;
          text-decoration: none;
          transition: color 0.3s ease;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog_title:hover {
          color: #0aa6d7;
        }

        .blog_card_footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid #eee;
          padding-top: 20px;
          margin-top: 20px;
        }

        .author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .author img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .author_info {
          line-height: 1.2;
        }

        .pagination_wrap {
          text-align: center;
        }

        .pagination {
          display: flex;
          justify-content: center;
          gap: 5px;
          list-style: none;
          padding: 0;
        }

        .page-link {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #2a322d;
          border: none;
          background: #fff;
          box-shadow: 0 3px 10px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .page-link.current {
          background: #0aa6d7;
          color: #fff;
        }

        .page-link:hover {
          background: #0aa6d7;
          color: #fff;
        }

        .loading-spinner {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px;
        }

        .loading-spinner::after {
          content: '';
          width: 40px;
          height: 40px;
          border: 3px solid #eee;
          border-top-color: #0aa6d7;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .no-results {
          padding: 60px 20px;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .breadcrumb-wrapper {
          padding: 0.75rem 0;
          background-color: rgba(255, 255, 255, 0.8);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          position: absolute;
          bottom: 0;
          width: 100%;
          z-index: 10;
        }

        .breadcrumb {
          display: flex;
          flex-wrap: wrap;
          padding: 0;
          margin-bottom: 0;
          list-style: none;
          background-color: transparent;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: #6c757d;
        }

        .breadcrumb-item a {
          color: #5c9ce6;
          text-decoration: none;
        }

        .breadcrumb-item.active {
          color: #2c234d;
          font-weight: 500;
        }

        .breadcrumb-item + .breadcrumb-item::before {
          display: inline-block;
          padding: 0 0.5rem;
          color: #6c757d;
          content: "/";
        }

        @media (max-width: 768px) {
          .filter_row {
            flex-direction: column;
            align-items: stretch;
          }
          
          .right_block {
            flex-direction: column;
            align-items: stretch;
          }
          
          .search_bar {
            max-width: 100%;
          }
        }
      `}</style>

      {/* Inject React content into the blog container */}
      <div style={{ display: 'none' }} ref={(el) => {
        if (el) {
          requestAnimationFrame(() => {
            const container = document.querySelector('.blog-container');
            if (container) {
              // Always re-render when data changes
              container.innerHTML = '';
              
              // Create filter row
              const filterDiv = document.createElement('div');
              filterDiv.className = 'filter_row mb-48';
              filterDiv.innerHTML = `
                <div class="left_block">
                  <div class="select_filter">
                    <span class="dark-gray h6">Filter By:</span>
                    <select class="category-select" id="categorySelect">
                      <option value="">All Categories</option>
                      ${categories.map(cat => `
                        <option value="${cat.slug}" ${currentCategory === cat.slug ? 'selected' : ''}>${cat.name}</option>
                      `).join('')}
                    </select>
                  </div>
                </div>
                <div class="right_block">
                  ${pagination ? `<h6 class="dark-gray">Showing ${pagination.start_index}-${pagination.end_index} of ${pagination.total_count} articles</h6>` : ''}
                  <form class="search_bar" id="searchForm">
                    <button type="submit"><i class="fal fa-search"></i></button>
                    <input type="search" class="form-control" placeholder="Search articles..." value="${localSearchQuery}" id="searchInput">
                  </form>
                </div>
              `;
              container.appendChild(filterDiv);
              
              // Add event listeners
              const categorySelect = document.getElementById('categorySelect');
              if (categorySelect) {
                categorySelect.onchange = handleCategoryChange;
              }
              
              const searchForm = document.getElementById('searchForm');
              if (searchForm) {
                searchForm.onsubmit = handleSearchSubmit;
              }
              
              // Create posts container
              const postsDiv = document.createElement('div');
              postsDiv.className = 'row g-4';
              
              if (loading) {
                postsDiv.innerHTML = '<div class="col-12"><div class="loading-spinner"></div></div>';
              } else if (posts.length === 0) {
                postsDiv.innerHTML = `
                  <div class="col-12 text-center py-60">
                    <div class="no-results">
                      <h4 class="mb-16">No Posts Found</h4>
                      <p class="mb-24">We couldn't find any posts matching your search criteria.</p>
                      <a href="/blog/" class="educate-btn">View All Posts</a>
                    </div>
                  </div>
                `;
              } else {
                postsDiv.innerHTML = posts.map(post => `
                  <div class="col-lg-4 col-md-6">
                    <div class="blog_card hover-up">
                      <div class="blog_card_img_block">
                        <img src="${post.featured_image}" alt="${post.title}">
                        <div class="blog-meta">
                          <span class="date">${post.created_at}</span>
                          ${post.category ? `<span class="category">${post.category.name}</span>` : ''}
                        </div>
                      </div>
                      <div class="blog_card_text_block">
                        <h5 class="mb-16">
                          <a class="blog_title" href="/blog/${post.slug}/">${post.title}</a>
                        </h5>
                        <p class="mb-24">${post.summary}</p>
                        <div class="blog_card_footer">
                          <div class="author">
                            <img src="${post.author.avatar}" alt="${post.author.name}">
                            <div class="author_info">
                              <h6 class="dark-gray mb-4p">${post.author.name}</h6>
                              <p class="small">${post.author.title}</p>
                            </div>
                          </div>
                          <a href="/blog/${post.slug}/" class="h6 color-primary educate_link_btn">
                            Read More<i class="far fa-chevron-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                `).join('');
              }
              container.appendChild(postsDiv);
              
              // Create pagination
              if (pagination && pagination.total_pages > 1) {
                const paginationDiv = document.createElement('div');
                paginationDiv.className = 'pagination_wrap mt-48';
                
                let pagesHtml = '';
                for (let i = 1; i <= pagination.total_pages; i++) {
                  pagesHtml += `<li class="page-item"><button class="page-link ${pagination.current_page === i ? 'current' : ''}" data-page="${i}">${i}</button></li>`;
                }
                
                paginationDiv.innerHTML = `
                  <ul class="pagination justify-content-center">
                    ${pagination.has_previous ? `<li class="page-item"><button class="page-link arrow" data-page="${pagination.previous_page}"><i class="far fa-chevron-left"></i></button></li>` : ''}
                    ${pagesHtml}
                    ${pagination.has_next ? `<li class="page-item"><button class="page-link arrow" data-page="${pagination.next_page}"><i class="far fa-chevron-right"></i></button></li>` : ''}
                  </ul>
                `;
                container.appendChild(paginationDiv);
                
                paginationDiv.querySelectorAll('[data-page]').forEach(btn => {
                  btn.onclick = () => handlePageChange(parseInt(btn.getAttribute('data-page')));
                });
              }
              
              if (window.AOS) {
                window.AOS.refresh();
              }
            }
          });
        }
      }} />
    </>
  );
};

export default BlogList;
