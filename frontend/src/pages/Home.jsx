// COPILOT: React version of Django templates/home.html rendered inside Django base.html body markup.
// Keeps HTML structure/classnames/IDs unchanged. Replaces Django template tags with static paths and SPA routes.
import { useEffect, useMemo } from 'react';
import baseTemplate from '../templates/base.html?raw';
import homeTemplate from '../templates/home.html?raw';

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

const Home = () => {
  const renderedHtml = useMemo(() => injectContent(baseTemplate, homeTemplate), []);

  useEffect(() => {
    // Set page title
    document.title = 'Yale It Skill Hub Best Software Training Institute in Coimbatore';

    // Generate random positions for floating icons (matches Django home.html script)
    const root = document.documentElement;
    for (let i = 1; i <= 15; i += 1) {
      root.style.setProperty(`--random-${i}`, Math.random());
    }

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

      // Check if animations already initialized by app.js
      const animationsInitialized = document.body.classList.contains('animations-initialized');
      
      // Initialize WOW animations FIRST (matches app.js wow() function)
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
        // Reset AOS for React rendered content
        window.AOS.init({
          duration: 1000,
          once: true,
          offset: 100,
        });
        // Refresh AOS after init to detect all elements
        setTimeout(() => {
          window.AOS.refresh();
        }, 200);
      }

      // Mark animations as initialized
      document.body.classList.add('animations-initialized');

      // Initialize floating icons parallax effect (from app.js DOMContentLoaded)
      const container = document.querySelector('.hero-banner-1');
      const icons = document.querySelectorAll('.floating-icon');
      
      if (container && icons.length) {
        let targetX = 0;
        let targetY = 0;
        let currentX = 0;
        let currentY = 0;
        let animationFrame;

        const handleMovement = (e) => {
          const x = e.touches ? e.touches[0].clientX : e.clientX;
          const y = e.touches ? e.touches[0].clientY : e.clientY;
          const w = window.innerWidth / 2;
          const h = window.innerHeight / 2;
          targetX = (x - w) / w;
          targetY = (y - h) / h;
          if (!animationFrame) {
            animationFrame = requestAnimationFrame(updateParallax);
          }
        };

        const updateParallax = () => {
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          icons.forEach((icon, index) => {
            const depth = (index % 3 + 1) * 10;
            const moveX = currentX * depth;
            const moveY = currentY * depth;
            icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
          });
          if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
            animationFrame = requestAnimationFrame(updateParallax);
          } else {
            animationFrame = null;
          }
        };

        // Add floating animation with random offsets
        icons.forEach((icon, index) => {
          const delay = Math.random() * 2;
          const duration = 2 + Math.random();
          icon.style.animation = `
            floatIn 1s ${index * 0.1}s ease-out forwards,
            float ${duration}s ${delay}s ease-in-out infinite
          `;
        });

        container.addEventListener('mousemove', handleMovement);
        container.addEventListener('touchmove', handleMovement, { passive: true });
        container.addEventListener('mouseleave', () => {
          targetX = 0;
          targetY = 0;
          if (!animationFrame) {
            animationFrame = requestAnimationFrame(updateParallax);
          }
        });
      }

      // Initialize jQuery plugins
      if (window.jQuery) {
        const $ = window.jQuery;

        // Initialize tilt effect on .educate-tilt elements (matches app.js tilt() function)
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

        // Initialize slick slider for team section (Why Choose Us images)
        if ($.fn.slick) {
          $('.team-slider:not(.slick-initialized)').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            centerMode: false,
            variableWidth: false,
            responsive: [
              { breakpoint: 1200, settings: { slidesToShow: 2, slidesToScroll: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
          });
        }

        // Initialize magnific popup for videos (matches app.js magnifying() function)
        if ($.fn.magnificPopup) {
          $('.video-popup, .popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false,
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

        // Sticky header logic (matches app.js header() function)
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

        // Back to top functionality (matches app.js BackToTop() function)
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

      // Course features section animation (from app.js)
      const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.course-feature-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
        cardObserver.observe(card);
      });

      // Gallery items flip animation with intersection observer
      const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, {
        threshold: 0.1
      });

      document.querySelectorAll('.gallery-item').forEach((item) => {
        galleryObserver.observe(item);
      });
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
        // Destroy slick slider if initialized
        if ($('.team-slider').hasClass('slick-initialized')) {
          $('.team-slider').slick('unslick');
        }
      }
    };
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: renderedHtml }} />
  );
};

export default Home;
