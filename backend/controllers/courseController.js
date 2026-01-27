// COPILOT: Course controller - provides course data for React frontend

// Helper function to get upcoming Mondays
const getUpcomingMondays = () => {
  const mondays = [];
  const today = new Date();
  let monday = new Date(today);
  
  // Find next Monday
  const dayOfWeek = monday.getDay();
  const daysUntilMonday = dayOfWeek === 0 ? 1 : (8 - dayOfWeek);
  monday.setDate(monday.getDate() + daysUntilMonday);
  
  // Get next 4 Mondays
  for (let i = 0; i < 4; i++) {
    const formattedDate = monday.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit', 
      year: 'numeric'
    }).replace(/\//g, '-');
    mondays.push(formattedDate);
    monday.setDate(monday.getDate() + 7);
  }
  
  return mondays;
};

// Course data (matching Django views.py)
const courses = {
  'best-python-training-in-coimbatore': {
    title: 'Best Python Training in Coimbatore | Yale IT',
    slug: 'best-python-training-in-coimbatore',
    course: {
      name: 'Python Training',
      description: 'Master Python programming with our comprehensive training program. Learn from industry experts and get hands-on experience with real-world projects.',
      category: 'Programming',
      difficulty: 'Beginner to Advanced',
      video_count: 120,
      duration: 40,
      assignments: 25,
      price: 16000,
      overview: "Our Python training course is designed to take you from basics to advanced concepts. You'll learn everything from syntax to web development, data science, and automation.",
      overview_points: [
        'Comprehensive Python fundamentals and advanced concepts',
        'Hands-on projects and real-world applications',
        'Industry-standard tools and frameworks',
        'Interactive learning with expert instructors',
        'Job-ready skills and placement assistance'
      ],
      curriculum: [
        { title: 'Python Basics', details: '10 lectures • 5 hours' },
        { title: 'Data Structures & Algorithms', details: '15 lectures • 8 hours' },
        { title: 'Web Development with Django', details: '20 lectures • 12 hours' },
        { title: 'Data Science Fundamentals', details: '15 lectures • 8 hours' },
        { title: 'Advanced Python Concepts', details: '12 lectures • 7 hours' }
      ],
      faqs: [
        {
          question: 'Which Python training institute in Coimbatore provides certification recognized by top IT companies?',
          answer: 'At Yale IT Academy, our Python certification is well-regarded by leading IT firms. Our program aligns with industry standards, helping students gain credibility and an edge in job applications.'
        },
        {
          question: 'Where can I find industry-oriented Python training in Coimbatore with real-time projects?',
          answer: 'Yale IT Academy focuses on practical learning by incorporating real-world projects into our Python training. We ensure students gain hands-on experience with industry-relevant applications.'
        },
        {
          question: 'Which Python courses in Coimbatore include training in AI, ML, and Data Science?',
          answer: 'Our Advanced Python Course at Yale IT Academy includes AI, Machine Learning, and Data Science modules, equipping students with the skills required for data-driven industries.'
        },
        {
          question: 'Are there any Python training institutes in Coimbatore offering weekend or fast-track courses?',
          answer: 'Yes! Yale IT Academy offers both weekend and fast-track Python courses, allowing students and working professionals to learn at their convenience.'
        },
        {
          question: 'What is the duration and fee structure of Python training in top Coimbatore institutes?',
          answer: 'At Yale IT Academy, Python courses range from 6 weeks to 3 months, depending on the module chosen. Our fees are competitive, with installment options available.'
        }
      ]
    }
  },
  'best-java-course-in-coimbatore': {
    title: 'Best Java Training in Coimbatore | Yale IT',
    slug: 'best-java-course-in-coimbatore',
    course: {
      name: 'Java Training',
      description: 'Master Java programming with our industry-aligned training program. Get hands-on experience with real-world projects and enterprise applications.',
      category: 'Programming',
      difficulty: 'Beginner to Advanced',
      video_count: 130,
      duration: 45,
      assignments: 30,
      price: 18000,
      overview: "Our Java training program covers everything from core Java to advanced enterprise development. Learn to build robust, scalable applications using industry best practices.",
      overview_points: [
        'Core Java and Object-Oriented Programming',
        'Enterprise Java (J2EE) development',
        'Spring Framework and Microservices',
        'Real-world project experience',
        'Interview preparation and placement support'
      ],
      curriculum: [
        { title: 'Core Java Fundamentals', details: '15 lectures • 8 hours' },
        { title: 'Object-Oriented Programming', details: '12 lectures • 6 hours' },
        { title: 'Enterprise Java (J2EE)', details: '20 lectures • 12 hours' },
        { title: 'Spring Framework', details: '18 lectures • 10 hours' },
        { title: 'Microservices Architecture', details: '15 lectures • 9 hours' }
      ],
      faqs: [
        {
          question: 'Where can I find the best JAVA training institute in Coimbatore with 100% placement?',
          answer: 'Yale IT Institute is the best JAVA training institute in Coimbatore, offering 100% placement assistance with tie-ups with leading IT companies.'
        },
        {
          question: 'Which JAVA course in Coimbatore covers both core and advanced JAVA?',
          answer: 'Yale IT Institute provides an extensive JAVA training program covering Core and Advanced JAVA, including JDBC, Servlets, JSP, Spring, Hibernate, and Microservices.'
        }
      ]
    }
  },
  'best-full-stack-course-in-coimbatore': {
    title: 'Best Full Stack Training in Coimbatore | Yale IT',
    slug: 'best-full-stack-course-in-coimbatore',
    course: {
      name: 'Full Stack Training',
      description: 'Become a complete Full Stack Developer with our comprehensive training covering frontend, backend, and database technologies.',
      category: 'Web Development',
      difficulty: 'Beginner to Advanced',
      video_count: 200,
      duration: 60,
      assignments: 40,
      price: 25000,
      overview: "Our Full Stack development course covers everything from HTML/CSS to React, Node.js, databases, and deployment. Graduate as a complete developer.",
      overview_points: [
        'Frontend development with React',
        'Backend development with Node.js',
        'Database management with MongoDB & SQL',
        'DevOps and deployment practices',
        'Real-world full stack projects'
      ],
      curriculum: [
        { title: 'HTML, CSS & JavaScript', details: '20 lectures • 12 hours' },
        { title: 'React.js Development', details: '25 lectures • 15 hours' },
        { title: 'Node.js & Express', details: '20 lectures • 12 hours' },
        { title: 'Database Management', details: '15 lectures • 9 hours' },
        { title: 'DevOps & Deployment', details: '10 lectures • 6 hours' }
      ],
      faqs: [
        {
          question: 'What is covered in the Full Stack course?',
          answer: 'Our Full Stack course covers frontend (HTML, CSS, JavaScript, React), backend (Node.js, Express), databases (MongoDB, MySQL), and deployment technologies.'
        }
      ]
    }
  }
};

// Get course by slug
export const getCourse = (req, res) => {
  const { slug } = req.params;
  const courseData = courses[slug];
  
  if (!courseData) {
    return res.status(404).json({ error: 'Course not found' });
  }
  
  // Add upcoming batches dynamically
  courseData.course.upcoming_batches = getUpcomingMondays();
  
  res.json(courseData);
};

// Get all courses
export const getAllCourses = (req, res) => {
  const courseList = Object.values(courses).map(c => ({
    title: c.title,
    slug: c.slug,
    name: c.course.name,
    description: c.course.description,
    category: c.course.category,
    price: c.course.price,
    duration: c.course.duration
  }));
  
  res.json({ courses: courseList });
};
