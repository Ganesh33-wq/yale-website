// Sample data for Yale IT database
// Run this in MongoDB Compass or mongosh to populate the database

// 1. Blog Categories
db.blogcategories.insertMany([
  {
    name: "Technology",
    slug: "technology",
    description: "Latest technology trends and updates",
    createdAt: new Date()
  },
  {
    name: "Programming",
    slug: "programming",
    description: "Programming tutorials and tips",
    createdAt: new Date()
  },
  {
    name: "Career",
    slug: "career",
    description: "Career advice and guidance",
    createdAt: new Date()
  }
]);

// 2. Sample Blog Post (Update category ObjectId after creating categories)
db.blogposts.insertOne({
  title: "Welcome to Yale IT Training Institute",
  slug: "welcome-to-yale-it",
  category: ObjectId("replace_with_category_id"), // Replace with actual category ID
  author: "Yale IT Admin",
  featuredImage: "/uploads/blog/sample.jpg",
  summary: "Welcome to Yale IT Training Institute - Your gateway to IT excellence in Coimbatore",
  content: "<p>Welcome to Yale IT Training Institute, the premier software training center in Coimbatore. We offer comprehensive training programs in Python, Java, Full Stack Development, and more.</p><h2>Why Choose Yale IT?</h2><p>Our training programs are designed to provide hands-on experience with real-world projects, ensuring you're job-ready from day one.</p>",
  tocType: "none",
  status: "published",
  metaTitle: "Welcome to Yale IT Training Institute",
  metaDescription: "Yale IT Training Institute - Best software training in Coimbatore",
  viewCount: 0,
  publishedAt: new Date(),
  createdAt: new Date(),
  updatedAt: new Date()
});

// 3. Sample Courses
db.courses.insertMany([
  {
    title: "Best Python Training in Coimbatore",
    slug: "python-training",
    description: "Master Python programming with our comprehensive training program. Learn from industry experts and get hands-on experience with real-world projects.",
    category: "Programming",
    difficulty: "Beginner to Advanced",
    duration: 40,
    price: 16000,
    videoCount: 120,
    assignments: 25,
    overview: "Our Python training course is designed to take you from basics to advanced concepts. You'll learn everything from syntax to web development, data science, and automation.",
    overviewPoints: [
      "Comprehensive Python fundamentals and advanced concepts",
      "Hands-on projects and real-world applications",
      "Industry-standard tools and frameworks",
      "Interactive learning with expert instructors",
      "Job-ready skills and placement assistance"
    ],
    curriculum: [
      { title: "Python Basics", details: "10 lectures • 5 hours" },
      { title: "Data Structures & Algorithms", details: "15 lectures • 8 hours" },
      { title: "Web Development with Django", details: "20 lectures • 12 hours" },
      { title: "Data Science Fundamentals", details: "15 lectures • 8 hours" },
      { title: "Advanced Python Concepts", details: "12 lectures • 7 hours" }
    ],
    faqs: [
      {
        question: "Is this course suitable for beginners?",
        answer: "Yes, our Python course is designed for both beginners and experienced programmers. We start from the basics and gradually move to advanced topics."
      },
      {
        question: "Will I get placement assistance?",
        answer: "Yes, we provide 100% placement assistance to all our students, including resume building, interview preparation, and job referrals."
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Best Java Training in Coimbatore",
    slug: "java-training",
    description: "Master Java programming with our industry-aligned training program. Get hands-on experience with real-world projects and enterprise applications.",
    category: "Programming",
    difficulty: "Beginner to Advanced",
    duration: 45,
    price: 18000,
    videoCount: 130,
    assignments: 30,
    overview: "Our Java training program covers everything from core Java to advanced enterprise development. Learn to build robust, scalable applications using industry best practices.",
    overviewPoints: [
      "Core Java and Object-Oriented Programming",
      "Enterprise Java (J2EE) development",
      "Spring Framework and Microservices",
      "Real-world project experience",
      "Interview preparation and placement support"
    ],
    curriculum: [
      { title: "Core Java Fundamentals", details: "15 lectures • 8 hours" },
      { title: "Object-Oriented Programming", details: "12 lectures • 6 hours" },
      { title: "Enterprise Java (J2EE)", details: "20 lectures • 12 hours" },
      { title: "Spring Framework", details: "18 lectures • 10 hours" },
      { title: "Microservices Architecture", details: "15 lectures • 9 hours" }
    ],
    faqs: [
      {
        question: "Do I need programming experience?",
        answer: "Basic programming knowledge is helpful but not required. We cover fundamentals in our foundation module."
      },
      {
        question: "What is the duration of the course?",
        answer: "The complete course is 45 hours, which can be completed in 5-6 months depending on your schedule."
      }
    ],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: "Best Full Stack Development Training in Coimbatore",
    slug: "full-stack-training",
    description: "Become a full-stack developer with our comprehensive MERN Stack training. Master MongoDB, Express.js, React.js, and Node.js.",
    category: "Web Development",
    difficulty: "Intermediate",
    duration: 50,
    price: 20000,
    videoCount: 140,
    assignments: 35,
    overview: "Learn to build modern web applications using the MERN stack. This course covers frontend and backend development with the most popular JavaScript technologies.",
    overviewPoints: [
      "Full-stack JavaScript development",
      "Modern frontend with React.js",
      "Backend development with Node.js and Express",
      "Database management with MongoDB",
      "Real-world project portfolio"
    ],
    curriculum: [
      { title: "Frontend with React.js", details: "25 lectures • 15 hours" },
      { title: "Backend with Node.js", details: "20 lectures • 12 hours" },
      { title: "Express.js Framework", details: "15 lectures • 8 hours" },
      { title: "MongoDB Database", details: "12 lectures • 7 hours" },
      { title: "Full Stack Integration", details: "18 lectures • 10 hours" }
    ],
    faqs: [],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

print("✅ Sample data inserted successfully!");
print("📝 Note: Update the category ObjectId in blog posts with actual IDs from blogcategories collection");
