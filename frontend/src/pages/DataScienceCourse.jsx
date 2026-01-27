// COPILOT: React version of Django templates/courses/data-science-course.html rendered inside Django base.html body markup.
// Keeps HTML structure/classnames/IDs unchanged. Replaces Django template tags with static paths and SPA routes.
import { useEffect, useMemo } from 'react';
import baseTemplate from '../templates/base.html?raw';
import dataScienceTemplate from '../templates/data-science-course.html?raw';
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
    .replace(/\{\{\s*course_title\s*\}\}/g, 'Data Science Course in Coimbatore')
    .replace(/\{\{\s*course_name\s*\}\}/g, 'Data Science')
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

// Data Science course FAQs data
const dataScienceFaqs = [
  {
    question: 'Which is the best AI training institute in Coimbatore for deep learning?',
    answer: 'Yale IT Institute offers AI training with a focus on deep learning, covering neural networks, CNNs, RNNs, and NLP, with real-world projects and expert mentorship.'
  },
  {
    question: 'Do AI courses in Coimbatore include hands-on machine learning projects?',
    answer: "Yes, Yale IT Institute's AI courses feature projects in predictive analytics, image recognition, and chatbots, enhancing job readiness through practical learning."
  },
  {
    question: 'What is the duration of an AI course in Coimbatore?',
    answer: 'AI courses range from 3 to 12 months, depending on specialization. Yale IT Institute offers flexible learning options, including fast-track programs for professionals.'
  },
  {
    question: 'Which AI course in Coimbatore is best for career growth?',
    answer: "Yale IT Institute's Advanced AI & Deep Learning course covers ML, AI applications, and cloud-based AI, with industry certifications, job placement, and mentorship."
  },
  {
    question: 'Can I get an AI certification course in Coimbatore with placement support?',
    answer: 'Yes, Yale IT Institute provides AI certification with job referrals, resume-building, and mock interviews, securing placements in AI research, data science, and development.'
  },
  {
    question: 'What programming languages are taught in AI courses in Coimbatore?',
    answer: 'Yale IT Institute teaches Python, R, Julia, SQL, TensorFlow, and PyTorch, covering AI development, deep learning, and industry-aligned hands-on coding.'
  },
  {
    question: 'Which institute in Coimbatore offers AI courses with TensorFlow and PyTorch?',
    answer: 'Yale IT Institute provides AI training in TensorFlow and PyTorch, covering model building, training, and optimization with real-world applications and expert guidance.'
  },
  {
    question: 'How much does an AI course in Coimbatore cost?',
    answer: 'AI course fees vary based on duration and training mode. Yale IT Institute offers affordable programs with flexible payment options, scholarships, and corporate sponsorships.'
  },
  {
    question: 'Are there AI training institutes in Coimbatore with research opportunities?',
    answer: 'Yes, Yale IT Institute collaborates with tech companies and research organizations, allowing students to work on AI projects, publish papers, and participate in hackathons.'
  },
  {
    question: 'Do AI training centers in Coimbatore provide real-world problem-solving experience?',
    answer: 'Yes, Yale IT Institute emphasizes practical AI problem-solving through case studies, hackathons, and industry projects in healthcare, finance, and automation.'
  }
];

const generateFaqHtml = () => {
  let leftColumn = '';
  let rightColumn = '';
  
  dataScienceFaqs.forEach((faq, index) => {
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

const DataScienceCourse = () => {
  const renderedHtml = useMemo(
    () => injectContent(baseTemplate, dataScienceTemplate, courseBannerTemplate, batchTimingsTemplate),
    []
  );

  useEffect(() => {
    document.title = 'Data Science Course in Coimbatore | Yale IT Skill Hub';

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
              course: 'Data Science Course',
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
              course: formData.get('course_name') || $('#courseName').val() || 'Data Science Course',
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

export default DataScienceCourse;
