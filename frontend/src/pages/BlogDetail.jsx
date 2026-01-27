// COPILOT: React version of Django templates/blog/blog_detail.html rendered inside Django base.html body markup.
// Fetches single blog post from API and renders with same design/animations.
import { useEffect, useMemo, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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

// Get base page layout (header, footer) without the dynamic content
const getBaseLayout = (baseHtml) => {
  const body = extractBody(baseHtml);
  return replaceStatics(body);
};

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [advertisements, setAdvertisements] = useState([]);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseLayout = useMemo(() => getBaseLayout(baseTemplate), []);

  // Fetch blog post from API
  const fetchPost = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/blog/${slug}/`);
      if (!response.ok) {
        if (response.status === 404) {
          setError('Post not found');
          return;
        }
        throw new Error('Failed to fetch post');
      }
      const data = await response.json();
      
      setPost(data.post || null);
      setRelatedPosts(data.related_posts || []);
      setAdvertisements(data.advertisements || []);
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching blog post:', error);
      setError('Failed to load post');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [slug]);

  useEffect(() => {
    if (post) {
      document.title = `${post.meta_title || post.title} - Yale IT Academy`;
    }

    // Initialize animations after content loads
    const initAnimations = () => {
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }

      // Initialize WOW
      if (window.WOW) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          mobile: true,
          live: true,
        });
        wow.init();
      }

      // Initialize AOS
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
        setTimeout(() => window.AOS.refresh(), 200);
      }

      // Initialize tilt
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

        // Sticky sidebar
        const sidebar = document.querySelector('.blog-sidebar-content');
        if (sidebar) {
          const headerHeight = header ? header.offsetHeight : 80;
          sidebar.style.top = `${headerHeight + 20}px`;
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

      // TOC smooth scroll
      document.querySelectorAll('.toc_link').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const targetId = link.getAttribute('href').substring(1);
          const target = document.getElementById(targetId);
          if (target) {
            const headerHeight = document.querySelector('header')?.offsetHeight || 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        });
      });
    };

    setTimeout(initAnimations, 100);

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, [post]);

  // Handle contact form submission
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const jsonData = {
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        phone: formData.get('phone') || '',
        subject: formData.get('subject') || '',
        message: formData.get('message') || '',
      };
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
      });
      const data = await response.json();
      
      if (data.success) {
        alert('Thank you! Your message has been sent successfully.');
        form.reset();
      } else {
        alert(data.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Generate blog content HTML
  const generateBlogContent = () => {
    if (loading) {
      return `
        <section class="py-60">
          <div class="container">
            <div class="loading-spinner"></div>
          </div>
        </section>
      `;
    }

    if (error || !post) {
      return `
        <section class="py-60">
          <div class="container text-center">
            <div class="no-results">
              <h4 class="mb-16">${error || 'Post not found'}</h4>
              <p class="mb-24">The blog post you're looking for doesn't exist or has been removed.</p>
              <a href="/blog/" class="educate-btn">Back to Blog</a>
            </div>
          </div>
        </section>
      `;
    }

    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(post.title);

    return `
      <!-- Page Title Banner Start -->
      <section class="page_title_banner">
        <div class="container">
          <div class="content" style="padding: 190px 0 46px !important;">
            <div class="title text-left">
              <div class="banner-title-wrapper">
                <h1>${post.title}</h1>
              </div>
              <img src="/static/media/shapes/tag-2.png" alt="" class="tag">
            </div>
            <div class="educate-tilt" data-tilt-options='{ "glare": false, "maxGlare": 0, "maxTilt": 2, "speed": 700, "scale": 1 }'>
              <img src="/static/media/resources/page_title.webp" alt="" class="banner-title-img">
            </div>
            <img src="/static/media/shapes/circle-lines-2.png" alt="" class="circle_vector">
          </div>
        </div>
        
        <!-- Breadcrumb Navigation -->
        <div class="breadcrumb-wrapper">
          <div class="container">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="/">Home</a></li>
                <li class="breadcrumb-item"><a href="/blog/">Blog</a></li>
                <li class="breadcrumb-item active" aria-current="page">${post.title.length > 40 ? post.title.substring(0, 40) + '...' : post.title}</li>
              </ol>
            </nav>
          </div>
        </div>
      </section>
      <!-- Page Title Banner End -->

      <!-- Blog Detail Area Start -->
      <section class="py-60">
        <div class="container">
          <div class="row">
            <!-- Sidebar -->
            <div class="col-lg-4">
              <div class="blog-sidebar" id="blogSidebar">
                <div class="blog-sidebar-content">
                  <!-- Advertisement Section -->
                  <div class="sidebar-widget advertisement-widget">
                    ${advertisements.map(ad => `
                      <div class="ad-item mb-4">
                        <a href="${ad.url}" target="_blank">
                          <img src="${ad.image}" alt="${ad.title}" class="img-fluid br-20">
                        </a>
                      </div>
                    `).join('')}
                  </div>

                  <!-- Contact Form Widget -->
                  <div class="contact-form-widget">
                    <h4 class="widget-title">Get in Touch</h4>
                    <form id="sidebarContactForm" class="contact-form">
                      <div class="form-group mb-3">
                        <input type="text" class="form-control" name="name" placeholder="Your Name" required>
                      </div>
                      <div class="form-group mb-3">
                        <input type="email" class="form-control" name="email" placeholder="Your Email" required>
                      </div>
                      <div class="form-group mb-3">
                        <input type="text" class="form-control" name="subject" placeholder="Subject" required>
                      </div>
                      <div class="form-group mb-3">
                        <textarea class="form-control" name="message" rows="4" placeholder="Your Message" required></textarea>
                      </div>
                      <button type="submit" class="educate-btn w-100">
                        <span class="educate-btn__curve"></span>Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <!-- Main Content -->
            <div class="col-lg-8">
              <div class="blog_detail_content">
                <!-- Featured Image -->
                <div class="featured_image mb-32">
                  <img src="${post.featured_image}" alt="${post.title}" class="img-fluid br-20">
                </div>

                <!-- Post Title and Meta -->
                <div class="post_header mb-32">
                  <h2 class="post_title mb-16">${post.title}</h2>
                  <div class="post_meta">
                    <span class="author">
                      <i class="far fa-user me-2"></i>
                      ${post.author.name}
                    </span>
                    <span class="date ms-4">
                      <i class="far fa-calendar me-2"></i>
                      ${post.created_at}
                    </span>
                    ${post.category ? `
                      <span class="category ms-4">
                        <i class="far fa-folder me-2"></i>
                        ${post.category.name}
                      </span>
                    ` : ''}
                  </div>
                </div>

                ${post.table_of_contents && post.table_of_contents.length > 0 ? `
                  <!-- Table of Contents -->
                  <div class="table_of_contents mb-32">
                    <div class="toc_header">
                      <h4 class="mb-24">Table of contents</h4>
                    </div>
                    <div class="toc_content">
                      <div class="toc_scroll">
                        <ul class="toc_list">
                          ${post.table_of_contents.map((item, index) => `
                            <li class="toc_item level-${item.level || 2}">
                              <a href="#${item.id}" class="toc_link">
                                <span class="toc_number">${index + 1}.</span>
                                ${item.text}
                              </a>
                            </li>
                          `).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                ` : ''}

                <!-- Author Info -->
                <div class="author_info_card mb-32">
                  <div class="author_avatar">
                    <img src="${post.author.avatar}" alt="${post.author.name}">
                  </div>
                  <div class="author_details">
                    <h6>${post.author.name}</h6>
                    <p class="mb-8">${post.author.title}</p>
                    <div class="social_links">
                      ${post.author.social_links?.linkedin ? `<a href="${post.author.social_links.linkedin}" class="social_link" target="_blank"><i class="fab fa-linkedin-in"></i></a>` : ''}
                      ${post.author.social_links?.twitter ? `<a href="${post.author.social_links.twitter}" class="social_link" target="_blank"><i class="fab fa-twitter"></i></a>` : ''}
                      ${post.author.social_links?.github ? `<a href="${post.author.social_links.github}" class="social_link" target="_blank"><i class="fab fa-github"></i></a>` : ''}
                    </div>
                  </div>
                </div>

                <!-- Post Summary -->
                <div class="post_summary mb-32">
                  <p class="lead">${post.summary}</p>
                </div>

                <!-- Post Content -->
                <div class="post_content mb-32">
                  ${post.content}
                </div>

                <!-- Share Section -->
                <div class="share_section">
                  <h6 class="mb-16">Share this article:</h6>
                  <div class="share_buttons d-flex flex-wrap">
                    <a href="https://api.whatsapp.com/send?text=${shareUrl}" target="_blank" class="share_btn whatsapp" style="background-color: #25D366;">
                      <i class="fab fa-whatsapp"></i> Whatsapp
                    </a>
                    <a href="https://www.instagram.com/?url=${shareUrl}" target="_blank" class="share_btn instagram" style="background-color: #E1306C;">
                      <i class="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}" target="_blank" class="share_btn facebook">
                      <i class="fab fa-facebook-f"></i> Facebook
                    </a>
                    <a href="https://www.youtube.com/redirect?q=${shareUrl}" target="_blank" class="share_btn youtube">
                      <i class="fab fa-youtube"></i> YouTube
                    </a>
                    <a href="https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}" target="_blank" class="share_btn linkedin">
                      <i class="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                    <a href="https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}" target="_blank" class="share_btn twitter" style="background-color: #1DA1F2;">
                      <i class="fab fa-twitter"></i> Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Blog Detail Area End -->

      ${relatedPosts.length > 0 ? `
        <!-- Related Posts Section -->
        <section class="py-60 bg-light">
          <div class="container">
            <div class="section-title mb-48">
              <div class="heading">
                <h6 class="color-primary mb-8">–––– Related Articles</h6>
                <h2>You Might Also Like</h2>
              </div>
            </div>
            <div class="row g-4">
              ${relatedPosts.map(rp => `
                <div class="col-lg-4 col-md-6">
                  <div class="blog_card hover-up">
                    <div class="blog_card_img_block">
                      <img src="${rp.featured_image}" alt="${rp.title}">
                      <div class="blog-meta">
                        <span class="date">${rp.created_at}</span>
                        ${rp.category ? `<span class="category">${rp.category.name}</span>` : ''}
                      </div>
                    </div>
                    <div class="blog_card_text_block">
                      <h3 class="mb-16">
                        <a class="blog_title" href="/blog/${rp.slug}/">${rp.title}</a>
                      </h3>
                      <p class="mb-24">${rp.summary}</p>
                      <div class="blog_card_footer">
                        <div class="author">
                          <img src="${rp.author.avatar}" alt="${rp.author.name}">
                          <div class="author_info">
                            <h6 class="dark-gray mb-4p">${rp.author.name}</h6>
                            <p class="small">${rp.author.title}</p>
                          </div>
                        </div>
                        <a href="/blog/${rp.slug}/" class="h6 color-primary educate_link_btn">
                          Read More<i class="far fa-chevron-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      ` : ''}
    `;
  };

  // Inject blog content into base layout
  const renderedHtml = useMemo(() => {
    return baseLayout.replace(
      /<main>[\s\S]*?<\/main>/,
      `<main>\n${generateBlogContent()}\n</main>`
    );
  }, [baseLayout, post, loading, error, relatedPosts, advertisements]);

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
      
      <style>{`
        /* Blog Detail Styles */
        .blog-meta {
          display: flex;
          gap: 24px;
          justify-content: left;
        }

        .blog-meta span {
          color: #7a8582;
          font-size: 14px;
        }

        .blog-meta span i {
          color: #0aa6d7;
          margin-right: 8px;
        }

        .blog_detail_content {
          background: #fff;
          padding: 32px;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          max-width: 900px;
          margin: 0 auto;
        }

        .featured_image {
          margin: -32px -32px 32px -32px;
        }

        .featured_image img {
          width: 100%;
          border-radius: 20px 20px 0 0;
        }

        .post_meta {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          color: #7a8582;
        }

        .post_meta i {
          color: #0aa6d7;
        }

        .author_info_card {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 24px;
          background: #f8f9fa;
          border-radius: 15px;
        }

        .author_avatar img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          object-fit: cover;
        }

        .social_links {
          display: flex;
          gap: 12px;
        }

        .social_link {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          border-radius: 50%;
          color: #0aa6d7;
          transition: all 0.3s ease;
        }

        .social_link:hover {
          background: #0aa6d7;
          color: #fff;
        }

        .post_content {
          font-size: 16px;
          line-height: 1.8;
          color: #2a322d;
        }

        .post_content h2, 
        .post_content h3 {
          margin: 32px 0 16px;
        }

        .post_content p {
          margin-bottom: 16px;
        }

        .post_content img {
          border-radius: 15px;
          margin: 24px 0;
          max-width: 100%;
        }

        .share_buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .share_btn {
          padding: 8px 20px;
          border-radius: 25px;
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .share_btn i {
          font-size: 14px;
        }

        .share_btn.twitter {
          background: #1DA1F2;
        }

        .share_btn.facebook {
          background: #4267B2;
        }

        .share_btn.linkedin {
          background: #0077B5;
        }

        .share_btn.youtube {
          background: #FF0000;
        }

        .share_btn:hover {
          opacity: 0.9;
          color: #fff;
          transform: translateY(-2px);
        }

        /* Table of Contents Styles */
        .table_of_contents {
          background: #fff;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border: 1px solid #eef0f2;
          margin-bottom: 40px;
        }

        .toc_header h4 {
          color: #333;
          font-size: 1.5rem;
          font-weight: 600;
          margin: 0;
          padding-bottom: 16px;
          border-bottom: 1px solid #eef0f2;
        }

        .toc_content {
          margin-top: 20px;
        }

        .toc_scroll {
          max-height: 400px;
          overflow-y: auto;
          padding-right: 16px;
        }

        .toc_list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .toc_item {
          margin: 12px 0;
        }

        .toc_item.level-2 {
          margin-left: 0;
        }

        .toc_item.level-3 {
          margin-left: 24px;
        }

        .toc_item.level-4 {
          margin-left: 48px;
        }

        .toc_link {
          color: #4a5568;
          text-decoration: none;
          display: flex;
          align-items: flex-start;
          line-height: 1.5;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s ease;
          font-size: 1rem;
        }

        .toc_number {
          color: #0aa6d7;
          margin-right: 8px;
          font-weight: 500;
        }

        .toc_link:hover {
          color: #0aa6d7;
          background: rgba(10, 166, 215, 0.05);
          transform: translateX(4px);
        }

        /* Sidebar Styles */
        .blog-sidebar {
          height: auto;
          width: 100%;
        }

        .blog-sidebar-content {
          position: sticky;
          top: 100px;
          transition: all 0.3s ease;
          z-index: 10;
        }

        .sidebar-widget {
          background: #fff;
          padding: 24px;
          border-radius: 20px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          margin-bottom: 24px;
        }

        .widget-title {
          font-size: 20px;
          font-weight: 600;
          color: #2c3e50;
          margin-bottom: 20px;
          padding-bottom: 15px;
          border-bottom: 2px solid #f0f0f0;
          position: relative;
        }

        .widget-title:after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 50px;
          height: 2px;
          background: #0aa6d7;
        }

        .advertisement-widget {
          padding: 0;
          background: transparent;
          box-shadow: none;
        }

        .ad-item img {
          width: 100%;
          transition: transform 0.3s ease;
        }

        .ad-item:hover img {
          transform: translateY(-5px);
        }

        .contact-form-widget {
          background: #fff;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          margin-bottom: 30px;
        }

        /* Blog Card Styles */
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

        .blog_card_text_block .blog-meta {
          position: absolute;
          bottom: 15px;
          left: 15px;
          right: 15px;
        }

        .blog_card_text_block .blog-meta span {
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

        /* Breadcrumb Styles */
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

        /* Loading and Error States */
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

        /* Responsive */
        @media (max-width: 991px) {
          .blog-sidebar-content {
            position: static !important;
            top: 0;
          }
          
          .blog-sidebar {
            margin-top: 40px;
          }
        }

        @media (max-width: 768px) {
          .blog_detail_content {
            padding: 20px;
          }

          .featured_image {
            margin: -20px -20px 20px -20px;
          }

          .author_info_card {
            padding: 15px;
          }

          .share_buttons {
            flex-wrap: wrap;
            gap: 10px;
          }

          .share_btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      {/* Add contact form handler after render */}
      <div style={{ display: 'none' }} ref={(el) => {
        if (el) {
          setTimeout(() => {
            const contactForm = document.getElementById('sidebarContactForm');
            if (contactForm) {
              contactForm.addEventListener('submit', handleContactSubmit);
            }

            // Refresh AOS
            if (window.AOS) {
              window.AOS.refresh();
            }
          }, 100);
        }
      }} />
    </>
  );
};

export default BlogDetail;
