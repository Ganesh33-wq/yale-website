// COPILOT: React version of Django templates/contact.html rendered inside Django base.html body markup.
// Keeps HTML structure/classnames/IDs unchanged. Replaces Django template tags with static paths and SPA routes.
import { useEffect, useMemo } from 'react';
import baseTemplate from '../templates/base.html?raw';
import contactTemplate from '../templates/contact.html?raw';

const urlMap = {
  home: '/',
  about: '/about/',
  contact_page: '/contact/',
  contact: '/api/contact/',
  course_inquiry: '/api/course-inquiry/',
  syllabus_download: '/api/syllabus-download/',
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
  project_samples: '/services/project-samples/',
  blog_list: '/blog/',
  blog_detail: '/blog/',
  internship_inquiry: '/internship-inquiry/',
};

const extractBody = (html) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match ? match[1] : html;
};

const stripBlocks = (html) => html
  .replace(/\{%-?\s*extends[^%]*%\}/g, '')
  .replace(/\{%-?\s*load[^%]*%\}/g, '')
  .replace(/\{%-?\s*block title\s*-?%\}[\s\S]*?\{%-?\s*endblock\s*-?%\}/g, '')
  .replace(/\{%-?\s*block content\s*-?%\}/g, '')
  .replace(/\{%-?\s*block extra_js\s*-?%\}[\s\S]*?\{%-?\s*endblock\s*-?%\}/g, '')
  .replace(/\{%-?\s*block extra_css\s*-?%\}[\s\S]*?\{%-?\s*endblock\s*-?%\}/g, '')
  .replace(/\{%-?\s*endblock\s*-?%\}/g, '')
  .replace(/\{%-?\s*csrf_token\s*-?%\}/g, '')
  // Handle {% if %}...{% else %}...{% endif %} blocks
  .replace(/\{%-?\s*if\s+[^%]*%\}[\s\S]*?\{%-?\s*endif\s*-?%\}/g, '')
  // Handle standalone {% if %}, {% else %}, {% endif %}
  .replace(/\{%-?\s*if\s+[^%]*%\}/g, '')
  .replace(/\{%-?\s*else\s*-?%\}/g, '')
  .replace(/\{%-?\s*endif\s*-?%\}/g, '')
  // Handle {% for %}...{% endfor %}
  .replace(/\{%-?\s*for\s+[^%]*%\}/g, '')
  .replace(/\{%-?\s*endfor\s*-?%\}/g, '')
  // Handle {% include %}
  .replace(/\{%-?\s*include\s+[^%]*%\}/g, '')
  // Handle {% with %}...{% endwith %}
  .replace(/\{%-?\s*with\s+[^%]*%\}/g, '')
  .replace(/\{%-?\s*endwith\s*-?%\}/g, '');

const replaceStaticsAndUrls = (html) => {
  let output = html.replace(/\{%-?\s*static\s+'([^']+)'\s*-?%\}/g, '/static/$1');
  Object.entries(urlMap).forEach(([key, value]) => {
    output = output.replace(new RegExp(`\{%-?\\s*url\\s+'${key}'[^%]*%\}`, 'g'), value);
  });
  // Replace remaining url tags (like "contact" used in form action)
  output = output.replace(/\{%-?\s*url\s+["']contact["']\s*-?%\}/g, '/api/contact/');
  output = output.replace(/\{\{\s*title\s*\}\}/g, '');
  output = output.replace(/\{\{\s*content\s*\}\}/g, '');
  return output;
};

const injectContent = (baseHtml, pageHtml) => {
  const body = extractBody(baseHtml);
  const cleanedPage = stripBlocks(pageHtml);
  const merged = body.replace(
    /<main>[\s\S]*?<\/main>/,
    `<main>\n${cleanedPage}\n</main>`
  );
  return replaceStaticsAndUrls(merged);
};

const Contact = () => {
  const renderedHtml = useMemo(() => injectContent(baseTemplate, contactTemplate), []);

  useEffect(() => {
    // Set page title
    document.title = 'Contact Us - Yale It Skill Hub Training Institute in Coimbatore';

    // Scroll to top on page load
    window.scrollTo(0, 0);

    // Small delay to ensure DOM is fully rendered before initializing animations
    const initAnimations = () => {
      // Match loader fade-out behavior from base.html
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 300);
      }

      // Check if animations already initialized
      const animationsInitialized = document.body.classList.contains('animations-initialized');

      // Initialize WOW animations (matches app.js wow() function)
      if (window.WOW && !animationsInitialized) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          mobile: true,
          live: true,
        });
        wow.init();
      }

      // Initialize AOS (matches base.html script)
      if (window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
        setTimeout(() => {
          window.AOS.refresh();
        }, 200);
      }

      // Mark animations as initialized
      document.body.classList.add('animations-initialized');

      // Initialize jQuery plugins
      if (window.jQuery) {
        const $ = window.jQuery;

        // Initialize tilt effect on .educate-tilt elements
        if ($.fn.tilt) {
          $('.educate-tilt').each(function () {
            const self = $(this);
            let options = self.data('tilt-options');
            if (options) {
              if (typeof options === 'string') {
                try {
                  options = JSON.parse(options);
                } catch (e) {
                  options = { maxTilt: 2, speed: 700, scale: 1, glare: false, maxGlare: 0 };
                }
              }
              self.tilt(options);
            } else {
              self.tilt({ maxTilt: 2, speed: 700, scale: 1, glare: false, maxGlare: 0 });
            }
          });
        }

        // Mobile nav setup (matches app.js header() function)
        const mainMenuNav = document.querySelector('.main-menu__nav');
        const mobileNavContainer = document.querySelector('.mobile-nav__container');
        if (mainMenuNav && mobileNavContainer && !mobileNavContainer.innerHTML.trim()) {
          mobileNavContainer.innerHTML = mainMenuNav.innerHTML;

          // Add dropdown toggle buttons for mobile
          $('.mobile-nav__container .main-menu__list .dropdown > a').each(function () {
            const self = $(this);
            if (!self.find('button').length) {
              const toggleBtn = document.createElement('BUTTON');
              toggleBtn.setAttribute('aria-label', 'dropdown toggler');
              toggleBtn.innerHTML = '<i class="fa fa-angle-down"></i>';
              self.append(toggleBtn);
              $(toggleBtn).on('click', function (e) {
                e.preventDefault();
                $(this).toggleClass('expanded');
                $(this).parent().toggleClass('expanded');
                $(this).parent().parent().children('ul').slideToggle();
              });
            }
          });
        }

        // Mobile nav toggler
        $('.mobile-nav__toggler').off('click').on('click', function (e) {
          e.preventDefault();
          $('.mobile-nav__wrapper').toggleClass('expanded');
          $('body').toggleClass('locked');
        });

        // Sticky header logic
        const stickyHeaderContent = document.querySelector('.sticky-header__content');
        const mainMenu = document.querySelector('.main-menu');
        if (stickyHeaderContent && mainMenu && !stickyHeaderContent.innerHTML.trim()) {
          stickyHeaderContent.innerHTML = mainMenu.innerHTML;
        }

        $(window).off('scroll.stickyHeader').on('scroll.stickyHeader', function () {
          const headerScrollPos = 130;
          const stricky = $('.stricked-menu, .stricky-header');
          if ($(window).scrollTop() > headerScrollPos) {
            stricky.addClass('stricky-fixed');
          } else {
            stricky.removeClass('stricky-fixed');
          }
        });

        // Back to top functionality
        const scrollTopPath = $('.scroll-top path');
        if (scrollTopPath.length) {
          const path = scrollTopPath[0];
          const pathLength = path.getTotalLength();
          path.style.transition = path.style.WebkitTransition = 'none';
          path.style.strokeDasharray = pathLength + ' ' + pathLength;
          path.style.strokeDashoffset = pathLength;
          path.getBoundingClientRect();
          path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset 10ms linear';

          const updateDashOffset = function () {
            const scrollTop = $(window).scrollTop();
            const docHeight = $(document).height() - $(window).height();
            const dashOffset = pathLength - (scrollTop * pathLength) / docHeight;
            path.style.strokeDashoffset = dashOffset;
          };
          updateDashOffset();
          $(window).on('scroll.backToTop', updateDashOffset);

          $(window).on('scroll.backToTopVisible', function () {
            if ($(window).scrollTop() > $(window).height()) {
              $('.scroll-top').addClass('scroll-top--active');
            } else {
              $('.scroll-top').removeClass('scroll-top--active');
            }
          });
        }

        // Trigger initial scroll event
        $(window).trigger('scroll');
      }

      // Contact form handling
      const contactForm = document.querySelector('.contact-form');
      const messageDiv = document.getElementById('message');

      if (contactForm && messageDiv) {
        contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Show loading state
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          const originalBtnText = submitBtn.innerHTML;
          submitBtn.innerHTML = 'Sending...';
          submitBtn.disabled = true;
          
          // Get form data as JSON
          const formData = new FormData(contactForm);
          const jsonData = {
            name: formData.get('name') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            subject: formData.get('subject') || '',
            message: formData.get('message') || '',
          };
          
          // Send form data to API
          fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
          })
          .then(response => response.json())
          .then(data => {
            messageDiv.style.display = 'block';
            if (data.success) {
              messageDiv.className = 'alert-message alert alert-success';
              contactForm.reset();
            } else {
              messageDiv.className = 'alert-message alert alert-danger';
            }
            messageDiv.textContent = data.message;
          })
          .catch(error => {
            messageDiv.style.display = 'block';
            messageDiv.className = 'alert-message alert alert-danger';
            messageDiv.textContent = 'An error occurred. Please try again later.';
          })
          .finally(() => {
            // Restore button state
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
              messageDiv.style.display = 'none';
            }, 5000);
          });
        });
      }
    };

    // Initialize animations after a small delay to ensure DOM is ready
    const timeoutId = setTimeout(initAnimations, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (window.jQuery) {
        const $ = window.jQuery;
        $(window).off('scroll.stickyHeader');
        $(window).off('scroll.backToTop');
        $(window).off('scroll.backToTopVisible');
      }
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
  );
};

export default Contact;
