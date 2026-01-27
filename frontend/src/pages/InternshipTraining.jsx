// COPILOT: React version of Django templates/services/internship-training.html rendered inside Django base.html body markup.
// Fetches internship programs from API and renders dynamically.
import { useEffect, useMemo, useState, useCallback } from 'react';
import baseTemplate from '../templates/base.html?raw';
import internshipTemplate from '../templates/internship-training.html?raw';

const urlMap = {
  home: '/',
  about: '/about/',
  contact_page: '/contact/',
  contact: '/api/contact/',
  course_inquiry: '/api/course-inquiry/',
  internship_inquiry: '/api/internship-inquiry/',
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
    // Match both single and double quoted url tags
    output = output.replace(new RegExp(`\\{%-?\\s*url\\s+['"]${key}['"][^%]*%\\}`, 'g'), value);
  });
  return output;
};

// Internship training FAQs data from Django views.py
const internshipFaqs = [
  {
    question: 'Which is the best internship training institute in Coimbatore with hands-on experience?',
    answer: 'At Yale IT Institute, we offer industry-focused internship training with hands-on experience in the latest technologies. Our structured training approach ensures that students gain practical skills and real-time exposure, making them job-ready. With expert mentorship and live project implementation, we help students bridge the gap between academics and industry demands.'
  },
  {
    question: 'Where can I find IT internships in Coimbatore with certification?',
    answer: 'Yale IT Institute provides IT internships with globally recognized certifications, adding value to your resume and career prospects. Our certification programs validate your technical expertise and help you stand out in job applications. With personalized guidance and project-based learning, students gain a strong foundation in their chosen domain.'
  },
  {
    question: 'Which internship training institute in Coimbatore provides live project exposure?',
    answer: 'At Yale IT Institute, we offer live project-based internships where students get to work on real-time industry projects under expert guidance. This hands-on approach enhances their problem-solving abilities and boosts their confidence. Our projects cover trending domains like AI, data science, full-stack development, IoT, and cloud computing.'
  },
  {
    question: 'Where can I do an internship in Coimbatore that offers both online and offline training?',
    answer: 'Yale IT Institute provides flexible internship programs in both online and offline modes to cater to students needs. Whether you prefer in-person learning or virtual training, our curriculum ensures equal effectiveness in both formats. Our interactive sessions, mentor support, and practical exercises make learning seamless and engaging.'
  },
  {
    question: 'Which IT internship center in Coimbatore provides one-on-one mentorship?',
    answer: 'At Yale IT Institute, we prioritize personalized mentorship, ensuring every student gets one-on-one guidance throughout their internship journey. Our mentors help students with coding, debugging, project execution, and industry best practices. This focused training helps students develop technical proficiency and career confidence.'
  },
  {
    question: 'What are the best domains for IT internship training in Coimbatore?',
    answer: 'Yale IT Institute offers internships in top domains such as artificial intelligence, machine learning, data science, cybersecurity, web development, mobile app development, IoT, and DevOps. Our industry-relevant curriculum is designed to keep students updated with the latest technological advancements.'
  },
  {
    question: 'Where can I get an internship with placement assistance in Coimbatore?',
    answer: 'At Yale IT Institute, we not only provide internships but also offer placement assistance to help students secure jobs in leading IT companies. Our placement support includes resume building, interview preparation, and direct job referrals. Many of our students have successfully transitioned into full-time roles after completing their internships with us.'
  },
  {
    question: 'Which internship training institute in Coimbatore offers stipends?',
    answer: 'Yale IT Institute collaborates with industry partners to provide stipend-based internship opportunities for eligible students. These internships allow students to earn while they learn, gaining both financial support and valuable work experience.'
  },
  {
    question: 'Where can I find short-term and long-term internship programs in Coimbatore?',
    answer: 'At Yale IT Institute, we offer both short-term and long-term internships to suit different learning needs and schedules. Whether you need a quick skill upgrade or an in-depth industry experience, we have personalized programs for you.'
  },
  {
    question: 'Which IT internship center in Coimbatore offers the highest placement success rate?',
    answer: 'Yale IT Institute has a proven track record of placing students in top IT companies after completing their internship programs. Our internship-to-job conversion rate is high due to our industry-aligned training, expert mentorship, and placement assistance.'
  }
];

const generateFaqHtml = () => {
  let leftColumn = '';
  let rightColumn = '';
  
  internshipFaqs.forEach((faq, index) => {
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
  
  // Also handle Django for loop for FAQs if present
  processed = processed.replace(
    /\{%-?\s*for\s+faq\s+in\s+course\.faqs\s*-?%\}[\s\S]*?\{%-?\s*endfor\s*-?%\}/g,
    ''
  );
  
  // Remove static program items - we'll inject dynamic content
  processed = processed.replace(
    /<div class="programs-grid">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<!-- Program Details Modal/,
    '<div class="programs-grid" id="programsGrid"></div></div></div><!-- Program Details Modal'
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

// Generate program card HTML from API data
const generateProgramCard = (program) => {
  const badgeClass = program.badge_type === 'hot' ? 'hot' : 
                     program.badge_type === 'trending' ? 'trending' : '';
  
  return `
    <div class="program-item" data-category="${program.category?.slug || 'all'}">
      <div class="program-header">
        <div class="program-icon">
          <i class="${program.icon}"></i>
        </div>
        <div class="program-badge ${badgeClass}">${program.badge}</div>
      </div>
      <h3>${program.title}</h3>
      <div class="program-meta">
        <span><i class="fas fa-clock"></i> ${program.duration}</span>
      </div>
      <p class="program-desc">${program.description}</p>
      <div class="program-tech">
        ${program.technologies.map(tech => `<span>${tech}</span>`).join('')}
      </div>
    </div>
  `;
};

const InternshipTraining = () => {
  const [programs, setPrograms] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');

  // Fetch internship programs from API
  const fetchPrograms = useCallback(async () => {
    try {
      const response = await fetch('/api/internships/');
      const data = await response.json();
      setPrograms(data.programs || []);
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching internship programs:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrograms();
  }, [fetchPrograms]);

  // Filter programs by category
  const filteredPrograms = useMemo(() => {
    if (activeCategory === 'all') return programs;
    return programs.filter(p => p.category?.slug === activeCategory);
  }, [programs, activeCategory]);

  const renderedHtml = useMemo(
    () => injectContent(baseTemplate, internshipTemplate),
    []
  );

  useEffect(() => {
    // Set page title
    document.title = 'Internship Training in Coimbatore | Yale IT Skill Hub';

    const initAnimations = () => {
      // Match loader fade-out behavior from base.html - faster hide
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

        // Form submission handler for internship inquiry
        $('#internshipForm, #internship-application-form form, .internship-form form').off('submit').on('submit', async function(e) {
          e.preventDefault();
          const $form = $(this);
          const formData = new FormData(this);
          const data = Object.fromEntries(formData.entries());
          
          try {
            const response = await fetch('/api/internship-application', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
            
            const result = await response.json();
            
            if (result.success) {
              alert(result.message || 'Thank you for your application! We will contact you soon.');
              $form[0].reset();
            } else {
              alert(result.message || 'Something went wrong. Please try again.');
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

  // Update programs grid when data changes
  useEffect(() => {
    const programsGrid = document.getElementById('programsGrid');
    if (programsGrid && !loading) {
      if (filteredPrograms.length === 0) {
        programsGrid.innerHTML = `
          <div class="no-programs" style="grid-column: 1/-1; text-align: center; padding: 40px;">
            <p>No programs found. Please check back later.</p>
          </div>
        `;
      } else {
        programsGrid.innerHTML = filteredPrograms.map(generateProgramCard).join('');
      }
      
      if (window.AOS) {
        window.AOS.refresh();
      }
    }
  }, [filteredPrograms, loading]);

  // Update category filters when data changes
  useEffect(() => {
    const categoryPillsContainer = document.querySelector('.category-pills');
    if (categoryPillsContainer && categories.length > 0) {
      // Add 'All' button plus dynamic categories
      const allCategories = [{ name: 'All', slug: 'all' }, ...categories];
      
      categoryPillsContainer.innerHTML = allCategories.map(cat => `
        <button class="pill ${cat.slug === activeCategory ? 'active' : ''}" data-category="${cat.slug}">
          ${cat.name}
        </button>
      `).join('');
      
      // Add click handlers
      categoryPillsContainer.querySelectorAll('.pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const category = pill.dataset.category;
          setActiveCategory(category);
          // Update active state visually
          categoryPillsContainer.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
        });
      });
    }
  }, [categories, activeCategory]);

  return null;
};

export default InternshipTraining;
