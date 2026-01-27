// COPILOT: React version of Django templates/courses/full-stack-training.html rendered inside Django base.html body markup.
// Keeps HTML structure/classnames/IDs unchanged. Replaces Django template tags with static paths and SPA routes.
import { useEffect, useMemo } from 'react';
import baseTemplate from '../templates/base.html?raw';
import fullStackTemplate from '../templates/full-stack-training.html?raw';
import courseBannerTemplate from '../templates/course_banner.html?raw';
import batchTimingsTemplate from '../templates/course_batch_timings.html?raw';

const urlMap = {
  home: '/',
  about: '/about/',
  contact_page: '/contact/',
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
  blog_list: '/blog/',
};

// Generate upcoming Mondays for batch timings
const getUpcomingMondays = () => {
  const mondays = [];
  const today = new Date();
  let monday = new Date(today);
  
  const dayOfWeek = monday.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek);
  monday.setDate(monday.getDate() + daysUntilMonday);
  
  for (let i = 0; i < 4; i++) {
    const day = String(monday.getDate()).padStart(2, '0');
    const month = String(monday.getMonth() + 1).padStart(2, '0');
    const year = monday.getFullYear();
    mondays.push(`${day}${month}/${year}`);
    monday.setDate(monday.getDate() + 7);
  }
  
  return mondays;
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
  .replace(/\{%-?\s*csrf_token\s*-?%\}/g, '');

const replaceStaticsAndUrls = (html) => {
  let output = html.replace(/\{%-?\s*static\s+'([^']+)'\s*-?%\}/g, '/static/$1');
  Object.entries(urlMap).forEach(([key, value]) => {
    output = output.replace(new RegExp(`\\{%-?\\s*url\\s+['"]${key}['"][^%]*%\\}`, 'g'), value);
  });
  return output;
};

const processBannerTemplate = (bannerHtml) => {
  let processed = bannerHtml
    .replace(/\{%-?\s*load[^%]*%\}/g, '')
    .replace(/\{%-?\s*csrf_token\s*-?%\}/g, '')
    .replace(/\{\{\s*course_title\s*\}\}/g, 'Full Stack Developer Course in Coimbatore')
    .replace(/\{\{\s*course_name\s*\}\}/g, 'Full Stack Development')
    .replace(/\{%-?\s*if\s+course_type\s*==\s*'course'\s*-?%\}([\s\S]*?)\{%-?\s*elif[\s\S]*?\{%-?\s*endif\s*-?%\}/g, '$1')
    .replace(/\{%-?\s*if\s+[^%]*%\}[\s\S]*?\{%-?\s*endif\s*-?%\}/g, '');
  
  processed = replaceStaticsAndUrls(processed);
  return processed;
};

const processBatchTimings = (batchHtml) => {
  const mondays = getUpcomingMondays();
  
  let batchRowsHtml = '';
  mondays.slice(0, 3).forEach(date => {
    const day = date.slice(0, 2);
    const monthYear = date.slice(2);
    batchRowsHtml += `
      <div class="batch-row">
        <div class="batch-date">
          <span class="date-number">${day}</span>
          <span class="date-month">${monthYear}</span>
        </div>
        <div class="batch-info">
          <div class="batch-type">Mon (Mon - Fri)</div>
          <div class="batch-label">WEEKDAYS BATCH</div>
        </div>
        <div class="batch-time">
          <div class="time"><i class="fas fa-clock-o time-icon"></i> 08:00 AM (IST)</div>
          <div class="duration"><i class="fas fa-hourglass-half duration-icon"></i> (Class 2Hrs | 8Hrs) / Per Session</div>
        </div>
      </div>
    `;
  });

  let processed = batchHtml
    .replace(/\{%-?\s*for\s+date\s+in\s+course\.upcoming_batches[^%]*%\}[\s\S]*?\{%-?\s*endfor\s*-?%\}/g, batchRowsHtml);
  
  return processed;
};

// Full Stack course FAQs data
const fullStackFaqs = [
  {
    question: 'Are there any full-stack developer courses in Coimbatore that include React and Node.js?',
    answer: 'Yes, Yale IT Institute offers MERN stack training covering React.js and Node.js. The course includes hands-on projects and industry-based case studies. It prepares students for high-demand full-stack roles. Experienced trainers ensure in-depth practical learning.'
  },
  {
    question: 'What is the fee structure for full-stack developer courses in Coimbatore?',
    answer: "Yale IT Institute's full-stack development course fees @ ₹17,750 EMI options are available for flexible payment. The cost depends on specialization and project-based learning. Scholarships are available for eligible students."
  },
  {
    question: 'How long does it take to become a full-stack developer in Coimbatore?',
    answer: 'The regular course takes 5-6 months and also weekend batches are available for working professionals. Students gain hands-on coding experience throughout the course. Personalized mentorship is provided for career growth.'
  },
  {
    question: 'Do full-stack developer courses in Coimbatore include database training?',
    answer: 'Yes, Yale IT Institute offers full-stack developer courses covering MongoDB, MySQL, and PostgreSQL, with database integration using Node.js and Django. The curriculum includes data modeling, query optimization, and hands-on assignments for strong expertise.'
  },
  {
    question: 'Which full-stack course in Coimbatore is best for beginners?',
    answer: 'Yale IT Institute offers a beginner-friendly full-stack developer course covering HTML, CSS, JavaScript, React, and Node.js. With no prior coding experience required, it includes real-world projects, mentorship, and dedicated support.'
  },
  {
    question: 'Can I get a remote job after completing a full-stack development course in Coimbatore?',
    answer: 'Yes, Yale IT Institute prepares students for remote jobs and freelancing, covering Git, API integration, and cloud deployment, with guidance on international job applications. Many graduates work for global companies remotely.'
  },
  {
    question: 'Are there internship opportunities after full-stack training in Coimbatore?',
    answer: 'Yale IT Institute offers internships with live projects, providing industry exposure and portfolio building. These internships enhance job prospects, with placement support available post-completion.'
  },
  {
    question: 'Which institute in Coimbatore offers full-stack development with Python and Django?',
    answer: 'Yale IT Institute provides a Python-Django full-stack course covering front-end and back-end development. It includes React.js, Django, and database integration. Ideal for those interested in Python-based web applications. Live projects ensure practical learning.'
  },
  {
    question: 'What skills should I have before joining a full-stack developer course?',
    answer: 'No prior coding knowledge is required at Yale IT Institute. However, basic HTML, CSS, and logical thinking help in faster learning. A foundation module is available for beginners. Customized learning paths are provided based on skill levels.'
  },
  {
    question: 'Is full-stack development a good career choice in Coimbatore?',
    answer: "Yes, full-stack development is a high-demand career with excellent job opportunities in Coimbatore. Companies seek professionals skilled in front-end, back-end, and database management. With high salaries and career growth, it's an excellent choice for aspiring developers."
  }
];

const generateFaqHtml = () => {
  let leftColumn = '';
  let rightColumn = '';
  
  fullStackFaqs.forEach((faq, index) => {
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
    <section class="faq">
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

const processTemplate = (templateHtml, bannerHtml, batchHtml) => {
  const processedBanner = processBannerTemplate(bannerHtml);
  const processedBatch = processBatchTimings(batchHtml);
  const faqHtml = generateFaqHtml();
  
  let processed = templateHtml
    .replace(/\{%-?\s*include\s+'courses\/course_banner\.html'[^%]*%\}/g, processedBanner)
    .replace(/\{%-?\s*include\s+'courses\/course_batch_timings\.html'\s*-?%\}/g, processedBatch)
    .replace(/\{%-?\s*include\s+'courses\/faq_section\.html'\s*-?%\}/g, faqHtml);
  
  processed = stripBlocks(processed);
  processed = replaceStaticsAndUrls(processed);
  processed = processed.replace(/\{\{[^}]+\}\}/g, '');
  
  return processed;
};

const injectContent = (baseHtml, pageHtml, bannerHtml, batchHtml) => {
  const body = extractBody(baseHtml);
  const processedPage = processTemplate(pageHtml, bannerHtml, batchHtml);
  const merged = body.replace(
    /<main>[\s\S]*?<\/main>/,
    `<main>\n${processedPage}\n</main>`
  );
  return replaceStaticsAndUrls(merged);
};

const FullStackTraining = () => {
  const renderedHtml = useMemo(
    () => injectContent(baseTemplate, fullStackTemplate, courseBannerTemplate, batchTimingsTemplate),
    []
  );

  useEffect(() => {
    document.title = 'Full Stack Developer Course in Coimbatore | Yale IT Skill Hub';

    const initAnimations = () => {
      const loader = document.querySelector('.loader-wrapper');
      if (loader) {
        loader.classList.add('fade-out');
        setTimeout(() => { loader.style.display = 'none'; }, 300);
      }

      if (window.WOW) {
        const wow = new window.WOW({ boxClass: 'wow', animateClass: 'animated', mobile: true, live: true });
        wow.init();
      }

      if (window.AOS) {
        window.AOS.init({ duration: 1000, once: true, offset: 100 });
        setTimeout(() => { window.AOS.refresh(); }, 200);
      }

      if (window.jQuery) {
        const $ = window.jQuery;

        if ($.fn.tilt) {
          $('.educate-tilt').each(function () {
            const self = $(this);
            let options = self.data('tilt-options');
            if (options) {
              if (typeof options === 'string') {
                try { options = JSON.parse(options); } catch (e) { options = { maxTilt: 2, speed: 700, scale: 1 }; }
              }
              self.tilt(options);
            } else {
              self.tilt({ maxTilt: 2, speed: 700, scale: 1, glare: false, maxGlare: 0 });
            }
          });
        }

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

        $('.mobile-nav__toggler').off('click').on('click', function (e) {
          e.preventDefault();
          $('.mobile-nav__wrapper').toggleClass('expanded');
          $('body').toggleClass('locked');
        });

        const stickyHeaderContent = document.querySelector('.sticky-header__content');
        const mainMenu = document.querySelector('.main-menu');
        if (stickyHeaderContent && mainMenu && !stickyHeaderContent.innerHTML.trim()) {
          stickyHeaderContent.innerHTML = mainMenu.innerHTML;
        }

        $(window).off('scroll.stickyHeader').on('scroll.stickyHeader', function () {
          const stricky = $('.stricked-menu, .stricky-header');
          if ($(window).scrollTop() > 130) {
            stricky.addClass('stricky-fixed');
          } else {
            stricky.removeClass('stricky-fixed');
          }
        });

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
            path.style.strokeDashoffset = pathLength - (scrollTop * pathLength) / docHeight;
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

        $('[data-bs-toggle="pill"]').on('click', function(e) {
          e.preventDefault();
          const target = $(this).data('bs-target');
          $(this).closest('.nav-pills').find('.nav-link').removeClass('active');
          $(this).addClass('active');
          $('.tab-pane').removeClass('show active');
          $(target).addClass('show active');
        });

        $('.accordion-button').off('click').on('click', function(e) {
          e.preventDefault();
          const $button = $(this);
          const targetId = $button.attr('data-bs-target');
          const $collapse = $(targetId);
          const $parent = $($button.closest('.accordion').attr('id') ? '#' + $button.closest('.accordion').attr('id') : '.accordion');
          
          $parent.find('.accordion-collapse.show').not($collapse).slideUp(300).removeClass('show');
          $parent.find('.accordion-button').not($button).addClass('collapsed').attr('aria-expanded', 'false');
          
          if ($collapse.hasClass('show')) {
            $collapse.slideUp(300).removeClass('show');
            $button.addClass('collapsed').attr('aria-expanded', 'false');
          } else {
            $collapse.slideDown(300).addClass('show');
            $button.removeClass('collapsed').attr('aria-expanded', 'true');
          }
        });

        $('#courseInquiryForm').off('submit').on('submit', async function(e) {
          e.preventDefault();
          const form = this;
          const submitBtn = $(form).find('.submit-btn');
          const btnText = submitBtn.find('.btn-text');
          const btnLoader = submitBtn.find('.btn-loader');
          const messageDiv = $(form).find('.form-message');
          const alert = messageDiv.find('.alert');
          
          submitBtn.prop('disabled', true);
          btnText.css('opacity', '0');
          btnLoader.removeClass('d-none');
          
          try {
            const formData = new FormData(form);
            const jsonData = {
              name: formData.get('name') || '',
              email: formData.get('email') || '',
              phone: formData.get('phone') || '',
              course: 'Full Stack Training',
              message: formData.get('message') || '',
            };
            
            const response = await fetch('/api/course-inquiry', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(jsonData),
            });
            
            const result = await response.json();
            
            if (result.success) {
              alert.removeClass().addClass('alert alert-success');
              alert.text(result.message || 'Thank you for your inquiry! We will contact you soon.');
              form.reset();
            } else {
              alert.removeClass().addClass('alert alert-danger');
              alert.text(result.message || 'An error occurred. Please try again.');
            }
          } catch (error) {
            alert.removeClass().addClass('alert alert-danger');
            alert.text('An error occurred. Please try again later.');
          } finally {
            submitBtn.prop('disabled', false);
            btnText.css('opacity', '1');
            btnLoader.addClass('d-none');
            messageDiv.show();
            setTimeout(() => { messageDiv.hide(); }, 5000);
          }
        });

        $('[data-bs-toggle="modal"][data-bs-target="#syllabusModal"]').off('click').on('click', function(e) {
          e.preventDefault();
          const courseName = $(this).data('course-name');
          const syllabusPath = $(this).data('syllabus');
          
          $('#courseName').val(courseName);
          $('#syllabusPath').val(syllabusPath);
          $('#syllabusModalLabel').text(`Download ${courseName} Syllabus`);
          
          if (window.bootstrap && window.bootstrap.Modal) {
            const modalEl = document.getElementById('syllabusModal');
            if (modalEl) {
              const modal = new window.bootstrap.Modal(modalEl);
              modal.show();
            }
          } else {
            $('#syllabusModal').addClass('show').css('display', 'block');
            $('body').addClass('modal-open');
            $('<div class="modal-backdrop fade show"></div>').appendTo('body');
          }
        });

        $('#syllabusModal .btn-close, #syllabusModal [data-bs-dismiss="modal"]').off('click').on('click', function() {
          if (window.bootstrap && window.bootstrap.Modal) {
            const modalEl = document.getElementById('syllabusModal');
            const modal = window.bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
          } else {
            $('#syllabusModal').removeClass('show').css('display', 'none');
            $('body').removeClass('modal-open');
            $('.modal-backdrop').remove();
          }
        });

        $('#syllabusForm').off('submit').on('submit', async function(e) {
          e.preventDefault();
          const form = this;
          const submitBtn = $(this).find('button[type="submit"]');
          const originalBtnText = submitBtn.html();
          submitBtn.html('Processing...').prop('disabled', true);
          
          try {
            const formData = new FormData(form);
            const jsonData = {
              name: formData.get('name') || '',
              email: formData.get('email') || '',
              phone: formData.get('phone') || '',
              course: formData.get('course_name') || $('#courseName').val() || 'Full Stack Training',
            };
            
            const response = await fetch('/api/syllabus-download', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(jsonData),
            });
            
            const result = await response.json();
            
            if (result.success) {
              const syllabusPath = $('#syllabusPath').val();
              const courseName = $('#courseName').val();
              
              if (syllabusPath) {
                const link = document.createElement('a');
                link.href = syllabusPath;
                link.setAttribute('target', '_blank');
                link.download = `${courseName.toLowerCase().replace(/\s+/g, '-')}-syllabus.pdf`;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
              
              if (window.bootstrap && window.bootstrap.Modal) {
                const modalEl = document.getElementById('syllabusModal');
                const modal = window.bootstrap.Modal.getInstance(modalEl);
                if (modal) modal.hide();
              } else {
                $('#syllabusModal').removeClass('show').css('display', 'none');
                $('body').removeClass('modal-open');
                $('.modal-backdrop').remove();
              }
              
              form.reset();
              window.alert(result.message || 'Thank you! Your syllabus download will start shortly.');
            } else {
              window.alert(result.message || 'An error occurred. Please try again.');
            }
          } catch (error) {
            window.alert('An error occurred. Please try again later.');
          } finally {
            submitBtn.html(originalBtnText).prop('disabled', false);
          }
        });

        $(window).trigger('scroll');
      }
    };

    const timeoutId = setTimeout(initAnimations, 100);

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

export default FullStackTraining;
