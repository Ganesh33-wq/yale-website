// COPILOT: React version of Django templates/services/final-year-project.html rendered inside Django base.html body markup.
// Keeps HTML structure/classnames/IDs unchanged. Replaces Django template tags with static paths and SPA routes.
import { useEffect, useMemo } from 'react';
import baseTemplate from '../templates/base.html?raw';
import finalYearProjectTemplate from '../templates/final-year-project.html?raw';

const urlMap = {
  home: '/',
  about: '/about/',
  contact_page: '/contact/',
  contact: '/api/contact/',
  course_inquiry: '/api/course-inquiry/',
  internship_inquiry: '/api/internship-inquiry/',
  project_inquiry: '/api/project-inquiry/',
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
  blog_list: '/blog/',
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
  .replace(/\{%-?\s*csrf_token\s*-?%\}/g, '');

const replaceStaticsAndUrls = (html) => {
  let output = html.replace(/\{%-?\s*static\s+'([^']+)'\s*-?%\}/g, '/static/$1');
  Object.entries(urlMap).forEach(([key, value]) => {
    output = output.replace(new RegExp(`\\{%-?\\s*url\\s+['"]${key}['"][^%]*%\\}`, 'g'), value);
  });
  return output;
};

// Final Year Project FAQs data from Django views.py
const projectFaqs = [
  {
    question: 'Which is the best final-year project center in Coimbatore with expert guidance?',
    answer: 'At Yale IT Institute, we offer complete guidance for final-year projects, ensuring students receive expert mentorship, hands-on training, and structured project development support to successfully complete their projects.'
  },
  {
    question: 'Where can I do IEEE-based final-year projects in Coimbatore?',
    answer: 'Yale IT Institute specializes in IEEE-based projects across AI, ML, IoT, cybersecurity, and other emerging technologies, ensuring students work on innovative, research-backed projects aligned with industry trends.'
  },
  {
    question: 'Which institute in Coimbatore offers hands-on training for final-year projects?',
    answer: 'At Yale IT Institute, students receive hands-on training with real-time project implementation, enabling them to gain practical experience and strengthen their technical skills under expert supervision.'
  },
  {
    question: 'Which project center in Coimbatore provides both hardware and software projects?',
    answer: 'Yale IT Institute provides both hardware and software projects, including IoT, robotics, embedded systems, full-stack development, cloud computing, and AI, giving students a wide range of options.'
  },
  {
    question: 'Where can I find one-on-one mentorship for my final year project in Coimbatore?',
    answer: 'At Yale IT Institute, we ensure personalized learning through one-on-one mentorship, helping students with project selection, implementation, coding, debugging, and report preparation for a seamless project experience.'
  },
  {
    question: 'What are the best domains for final-year projects in Coimbatore?',
    answer: 'Yale IT Institute offers projects in top domains such as AI, machine learning, big data, IoT, cybersecurity, mobile app development, cloud computing, and blockchain, ensuring students stay ahead in technology.'
  },
  {
    question: 'Where can I get plagiarism-free final-year project reports in Coimbatore?',
    answer: 'At Yale IT Institute, we provide 100% plagiarism-free project reports with proper documentation, coding explanations, and research references to help students submit high-quality, original work.'
  },
  {
    question: 'Which final year project center in Coimbatore also provides internships?',
    answer: 'Yale IT Institute provides internships along with final-year projects, allowing students to gain industry exposure, enhance their technical skills, and improve their employability in the IT sector.'
  },
  {
    question: 'Which institute in Coimbatore offers live project experience for final-year students?',
    answer: 'At Yale IT Institute, students get the opportunity to work on live industry projects, gaining real-world experience and hands-on exposure to the latest technologies and development practices.'
  },
  {
    question: 'Where can I do a final year project in Coimbatore with placement support?',
    answer: 'Yale IT Institute provides final-year project training along with placement assistance, connecting students with top IT companies and helping them secure job opportunities in their respective fields.'
  }
];

const generateFaqHtml = () => {
  let leftColumn = '';
  let rightColumn = '';
  
  projectFaqs.forEach((faq, index) => {
    const counter = index + 1;
    const isFirst = index === 0;
    const isEven = index % 2 === 0;
    
    const faqBlock = `
      <div class="faq-block" data-aos="fade-up" data-aos-delay="${counter * 100}">
        <div class="accordion-item border-0">
          <h2 class="accordion-header" id="faq-heading-${isEven ? '' : 'right-'}${counter}">
            <button class="accordion-button ${isFirst && isEven ? '' : 'collapsed'}" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#faq-collapse-${isEven ? '' : 'right-'}${counter}" 
                    aria-expanded="${isFirst && isEven ? 'true' : 'false'}" 
                    aria-controls="faq-collapse-${isEven ? '' : 'right-'}${counter}">
                ${faq.question}
            </button>
          </h2>
          <div id="faq-collapse-${isEven ? '' : 'right-'}${counter}" 
               class="accordion-collapse collapse ${isFirst && isEven ? 'show' : ''}" 
               aria-labelledby="faq-heading-${isEven ? '' : 'right-'}${counter}" 
               data-bs-parent="#faqAccordion${isEven ? 'Left' : 'Right'}">
            <div class="accordion-body pt-0">
              <p>${faq.answer}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    if (isEven) {
      leftColumn += faqBlock;
    } else {
      rightColumn += faqBlock;
    }
  });
  
  return `
    <section class="faq py-80">
      <div class="container">
        <div class="section-heading text-center mb-5" data-aos="fade-up">
          <h6 class="color-primary mb-8">–––– FAQ</h6>
          <h2>Frequently Asked <span class="fm-sec">Questions</span></h2>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-6">
                <div class="accordion" id="faqAccordionLeft">
                  ${leftColumn}
                </div>
              </div>
              <div class="col-lg-6">
                <div class="accordion" id="faqAccordionRight">
                  ${rightColumn}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};

const processTemplate = (templateHtml) => {
  // Generate FAQ HTML
  const faqHtml = generateFaqHtml();
  
  // Strip Django blocks
  let processed = stripBlocks(templateHtml);
  
  // Replace statics and urls
  processed = replaceStaticsAndUrls(processed);
  
  // Replace the FAQ section (find existing FAQ section and replace it)
  processed = processed.replace(
    /<section[^>]*class="[^"]*faq[^"]*"[^>]*>[\s\S]*?<\/section>/gi,
    faqHtml
  );
  
  // Handle Django for loop for FAQs if present
  processed = processed.replace(
    /\{%-?\s*for\s+faq\s+in\s+course\.faqs\s*-?%\}[\s\S]*?\{%-?\s*endfor\s*-?%\}/g,
    ''
  );
  processed = processed.replace(
    /\{%-?\s*for\s+faq\s+in\s+service\.faqs\s*-?%\}[\s\S]*?\{%-?\s*endfor\s*-?%\}/g,
    ''
  );
  
  // Remove any remaining template variables
  processed = processed.replace(/\{\{[^}]+\}\}/g, '');
  processed = processed.replace(/\{%[^%]*%\}/g, '');
  
  return processed;
};

const injectContent = (baseHtml, pageHtml) => {
  const body = extractBody(baseHtml);
  const processedPage = processTemplate(pageHtml);
  const merged = body.replace(
    /<main>[\s\S]*?<\/main>/,
    `<main>\n${processedPage}\n</main>`
  );
  return replaceStaticsAndUrls(merged);
};

const FinalYearProject = () => {
  const renderedHtml = useMemo(
    () => injectContent(baseTemplate, finalYearProjectTemplate),
    []
  );

  useEffect(() => {
    // Set page title
    document.title = 'Final Year Project Center in Coimbatore | Yale IT Skill Hub';

    const initAnimations = () => {
      // Hide loader immediately
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.style.display = 'none';
      }

      // Initialize WOW animations
      if (window.WOW) {
        const wow = new window.WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          mobile: true,
          live: true,
        });
        wow.init();
      }

      // Initialize AOS with faster settings
      if (window.AOS) {
        window.AOS.init({
          duration: 400,
          once: true,
          offset: 50,
          delay: 0,
        });
      }

      // Initialize jQuery plugins
      if (window.jQuery) {
        const $ = window.jQuery;

        // Initialize tilt effect
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

        // Mobile nav setup
        const mainMenuNav = document.querySelector('.main-menu__nav');
        const mobileNavContainer = document.querySelector('.mobile-nav__container');
        if (mainMenuNav && mobileNavContainer && !mobileNavContainer.innerHTML.trim()) {
          mobileNavContainer.innerHTML = mainMenuNav.innerHTML;

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

        // Sticky header
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

        // Back to top
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

        // Bootstrap Accordion functionality for FAQs
        $('.accordion-button').off('click').on('click', function(e) {
          e.preventDefault();
          const $button = $(this);
          const targetId = $button.attr('data-bs-target');
          const $collapse = $(targetId);
          const $parent = $($button.closest('.accordion').attr('id') ? '#' + $button.closest('.accordion').attr('id') : '.accordion');
          
          // Close other items in same accordion
          $parent.find('.accordion-collapse.show').not($collapse).slideUp(300).removeClass('show');
          $parent.find('.accordion-button').not($button).addClass('collapsed').attr('aria-expanded', 'false');
          
          // Toggle current item
          if ($collapse.hasClass('show')) {
            $collapse.slideUp(300).removeClass('show');
            $button.addClass('collapsed').attr('aria-expanded', 'false');
          } else {
            $collapse.slideDown(300).addClass('show');
            $button.removeClass('collapsed').attr('aria-expanded', 'true');
          }
        });

        // Domain/Category filter functionality
        const categoryPills = document.querySelectorAll('.category-pills .pill, .domain-filter .pill, .filter-btn');
        const projectItems = document.querySelectorAll('.project-item, .domain-item, .program-item');

        categoryPills.forEach(pill => {
          pill.addEventListener('click', () => {
            // Update active state
            categoryPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');

            // Filter items
            const category = pill.dataset.category || pill.dataset.filter || 'all';
            projectItems.forEach(item => {
              const itemCategory = item.dataset.category || item.dataset.domain || '';
              if (category === 'all' || itemCategory === category) {
                item.style.display = 'block';
              } else {
                item.style.display = 'none';
              }
            });
          });
        });

        // Form submission handler for project inquiry
        $('#projectInquiryForm, .project-form form, #projectForm').off('submit').on('submit', async function(e) {
          e.preventDefault();
          const $form = $(this);
          const formData = new FormData(this);
          const data = Object.fromEntries(formData.entries());
          
          try {
            const response = await fetch('https://yaleinfotech.com/api/project-inquiry', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            
            if (response.ok) {
              alert('Thank you for your inquiry! We will contact you soon.');
              $form[0].reset();
            } else {
              alert('Something went wrong. Please try again.');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again.');
          }
        });

        // Counter animation
        if ($.fn.appear) {
          $('.counter').appear(function() {
            const $this = $(this);
            if (!$this.hasClass('counted')) {
              $this.addClass('counted');
              const target = parseInt($this.text().replace(/[^0-9]/g, ''));
              $({ count: 0 }).animate({ count: target }, {
                duration: 2000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.ceil(this.count));
                },
                complete: function() {
                  $this.text(target);
                }
              });
            }
          });
        }
      }
    };

    // Inject HTML into body
    const parser = new DOMParser();
    const doc = parser.parseFromString(renderedHtml, 'text/html');
    
    // Clear and replace body content
    document.body.innerHTML = doc.body.innerHTML;
    document.body.className = doc.body.className || '';

    // Initialize immediately
    initAnimations();

    // Cleanup on unmount
    return () => {
      if (window.jQuery) {
        const $ = window.jQuery;
        $(window).off('scroll.stickyHeader');
        $(window).off('scroll.backToTop');
        $(window).off('scroll.backToTopVisible');
      }
    };
  }, [renderedHtml]);

  return null;
};

export default FinalYearProject;
