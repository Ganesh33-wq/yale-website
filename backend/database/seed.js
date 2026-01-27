// Seed script to load sample blog data into SQLite database
import db from './db.js';

const seedData = () => {
  console.log('🌱 Starting database seed...\n');

  // Sample blog posts
  const blogs = [
    {
      title: 'Python Training in Coimbatore - Complete Guide 2026',
      slug: 'python-training-coimbatore-guide-2026',
      excerpt: 'Learn Python programming from scratch at Yale IT Skill Hub. Our comprehensive training covers basics to advanced concepts with hands-on projects.',
      content: `<h2>Why Learn Python?</h2>
<p>Python is one of the most popular programming languages in 2026, used in web development, data science, AI, and automation. At Yale IT Skill Hub, we offer industry-focused Python training with real-world projects.</p>

<h2>Course Highlights</h2>
<ul>
<li>100+ Hours of Practical Training</li>
<li>Live Project Experience</li>
<li>100% Placement Assistance</li>
<li>Industry Expert Trainers</li>
<li>Flexible Batch Timings</li>
</ul>

<h2>Who Should Join?</h2>
<p>This course is perfect for students, freshers, and working professionals who want to start their career in software development or data science.</p>

<h3>Contact Us</h3>
<p>Visit Yale IT Skill Hub, Coimbatore or call us for more details about our Python training program.</p>`,
      category_id: 1,
      featured_image: '/static/media/blog/python-training.jpg',
      is_featured: 1,
      author: 'Yale Admin'
    },
    {
      title: 'Full Stack Development Career Guide 2026',
      slug: 'full-stack-development-career-guide-2026',
      excerpt: 'Discover the best practices and technologies for becoming a successful full stack developer in 2026.',
      content: `<h2>What is Full Stack Development?</h2>
<p>Full Stack Development involves working on both frontend and backend of web applications. A full stack developer is proficient in multiple technologies and can build complete web applications from scratch.</p>

<h2>Technologies to Learn</h2>
<h3>Frontend</h3>
<ul>
<li>HTML5, CSS3, JavaScript</li>
<li>React.js or Vue.js</li>
<li>Responsive Design</li>
</ul>

<h3>Backend</h3>
<ul>
<li>Node.js with Express</li>
<li>Python with Django/Flask</li>
<li>Database (MySQL, MongoDB)</li>
</ul>

<h2>Career Opportunities</h2>
<p>Full stack developers are in high demand with average salaries ranging from 6-15 LPA for freshers in India.</p>`,
      category_id: 2,
      featured_image: '/static/media/blog/fullstack-dev.jpg',
      is_featured: 1,
      author: 'Yale Admin'
    },
    {
      title: 'Introduction to Machine Learning',
      slug: 'introduction-to-machine-learning',
      excerpt: 'A beginner-friendly introduction to machine learning concepts, algorithms, and real-world applications.',
      content: `<h2>What is Machine Learning?</h2>
<p>Machine Learning is a subset of Artificial Intelligence that enables computers to learn from data and improve their performance without being explicitly programmed.</p>

<h2>Types of Machine Learning</h2>
<ul>
<li><strong>Supervised Learning:</strong> Learning from labeled data</li>
<li><strong>Unsupervised Learning:</strong> Finding patterns in unlabeled data</li>
<li><strong>Reinforcement Learning:</strong> Learning through trial and error</li>
</ul>

<h2>Popular Algorithms</h2>
<ul>
<li>Linear Regression</li>
<li>Decision Trees</li>
<li>Neural Networks</li>
<li>Support Vector Machines</li>
</ul>

<h2>Applications</h2>
<p>Machine learning is used in recommendation systems, fraud detection, image recognition, natural language processing, and many more areas.</p>`,
      category_id: 3,
      featured_image: '/static/media/blog/machine-learning.jpg',
      is_featured: 0,
      author: 'Yale Admin'
    },
    {
      title: 'Best Practices for React Development',
      slug: 'best-practices-react-development',
      excerpt: 'Learn industry best practices for building scalable and maintainable React applications.',
      content: `<h2>React Best Practices</h2>
<p>React is a powerful library for building user interfaces. Following best practices ensures your code is maintainable, performant, and scalable.</p>

<h2>Key Practices</h2>
<h3>1. Component Structure</h3>
<ul>
<li>Keep components small and focused</li>
<li>Use functional components with hooks</li>
<li>Separate container and presentational components</li>
</ul>

<h3>2. State Management</h3>
<ul>
<li>Use useState for local state</li>
<li>Use useContext for shared state</li>
<li>Consider Redux for complex apps</li>
</ul>

<h3>3. Performance</h3>
<ul>
<li>Use React.memo for expensive renders</li>
<li>Implement lazy loading</li>
<li>Optimize images and assets</li>
</ul>`,
      category_id: 2,
      featured_image: '/static/media/blog/react-best-practices.jpg',
      is_featured: 0,
      author: 'Yale Admin'
    },
    {
      title: 'Java vs Python: Which to Learn First?',
      slug: 'java-vs-python-which-to-learn-first',
      excerpt: 'A comprehensive comparison between Java and Python to help you decide which programming language to learn first.',
      content: `<h2>Java vs Python Comparison</h2>
<p>Both Java and Python are excellent programming languages with their own strengths. Let us compare them to help you make an informed decision.</p>

<h2>Java</h2>
<h3>Pros:</h3>
<ul>
<li>Strong typing catches errors early</li>
<li>Excellent for enterprise applications</li>
<li>Great performance</li>
<li>Huge job market</li>
</ul>

<h2>Python</h2>
<h3>Pros:</h3>
<ul>
<li>Easy to learn syntax</li>
<li>Great for AI/ML and Data Science</li>
<li>Rapid development</li>
<li>Versatile applications</li>
</ul>

<h2>Verdict</h2>
<p>Choose Python if you are interested in data science, AI, or quick prototyping. Choose Java if you are targeting enterprise development or Android apps.</p>`,
      category_id: 1,
      featured_image: '/static/media/blog/java-vs-python.jpg',
      is_featured: 0,
      author: 'Yale Admin'
    },
    {
      title: 'Digital Marketing Trends 2026',
      slug: 'digital-marketing-trends-2026',
      excerpt: 'Stay ahead of the curve with the latest digital marketing trends and strategies for 2026.',
      content: `<h2>Digital Marketing in 2026</h2>
<p>The digital marketing landscape continues to evolve rapidly. Here are the key trends shaping the industry in 2026.</p>

<h2>Top Trends</h2>
<h3>1. AI-Powered Marketing</h3>
<p>Artificial Intelligence is revolutionizing how we create content, target audiences, and analyze data.</p>

<h3>2. Video Content Dominance</h3>
<p>Short-form videos on platforms like Instagram Reels and YouTube Shorts continue to drive engagement.</p>

<h3>3. Voice Search Optimization</h3>
<p>With smart speakers everywhere, optimizing for voice search is crucial.</p>

<h3>4. Personalization at Scale</h3>
<p>Consumers expect personalized experiences across all touchpoints.</p>

<h2>Skills to Learn</h2>
<ul>
<li>SEO and SEM</li>
<li>Social Media Marketing</li>
<li>Content Marketing</li>
<li>Analytics and Data Interpretation</li>
</ul>`,
      category_id: 5,
      featured_image: '/static/media/blog/digital-marketing.jpg',
      is_featured: 1,
      author: 'Yale Admin'
    }
  ];

  try {
    // Clear existing blogs first
    db.exec('DELETE FROM blogs');
    console.log('🗑️  Cleared existing blogs\n');

    // Prepare insert statement
    const insertBlog = db.prepare(`
      INSERT INTO blogs (title, slug, excerpt, content, category_id, featured_image, is_featured, author, created_at, updated_at) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `);

    // Insert blog posts
    console.log('📝 Adding blog posts...');
    for (const blog of blogs) {
      insertBlog.run(
        blog.title,
        blog.slug,
        blog.excerpt,
        blog.content,
        blog.category_id,
        blog.featured_image,
        blog.is_featured,
        blog.author
      );
      console.log(`   ✅ Added: ${blog.title}`);
    }

    console.log('\n🎉 Database seeded successfully!');
    console.log(`   Total blogs added: ${blogs.length}`);
    
    // Show what's in database
    const allBlogs = db.prepare('SELECT id, title, slug FROM blogs').all();
    console.log('\n📊 Blogs in database:');
    allBlogs.forEach(b => console.log(`   [${b.id}] ${b.title}`));

    const allCategories = db.prepare('SELECT id, name FROM categories').all();
    console.log('\n📁 Categories in database:');
    allCategories.forEach(c => console.log(`   [${c.id}] ${c.name}`));

  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
};

// Run the seed
seedData();
