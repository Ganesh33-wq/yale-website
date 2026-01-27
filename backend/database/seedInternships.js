// Seed script to load internship programs into SQLite database
import db from './db.js';

const seedInternships = () => {
  console.log('🌱 Starting internship programs seed...\n');

  // Sample internship programs matching the Django template
  const programs = [
    {
      title: 'Full Stack Python',
      slug: 'full-stack-python',
      description: 'Learn to build full-stack applications using Python with frameworks like Django and Flask, and frontend technologies.',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-python',
      badge: 'Most Popular',
      badge_type: 'hot',
      category_slug: 'fullstack',
      technologies: ['Django', 'Flask', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Full Stack Java',
      slug: 'full-stack-java',
      description: 'Master full-stack Java development with Spring Boot, and frontend technologies like HTML, CSS, and JavaScript.',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-java',
      badge: 'Trending',
      badge_type: 'trending',
      category_slug: 'fullstack',
      technologies: ['Spring Boot', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Digital Marketing',
      slug: 'digital-marketing',
      description: 'Gain expertise in SEO, SEM, social media strategies, and analytics to boost business growth and online presence.',
      duration: '1 Week - 1 Month',
      icon: 'fas fa-bullhorn',
      badge: 'High Demand',
      badge_type: 'default',
      category_slug: 'marketing',
      technologies: ['SEO', 'SEM', 'Analytics']
    },
    {
      title: 'Android Development',
      slug: 'android-development',
      description: 'Learn to develop mobile apps with intuitive interfaces, seamless functionality, and API integration.',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-android',
      badge: 'Popular',
      badge_type: 'default',
      category_slug: 'mobile',
      technologies: ['Android SDK', 'Kotlin', 'APIs']
    },
    {
      title: 'Selenium Testing',
      slug: 'selenium-testing',
      description: 'Master Selenium for automated web testing, including writing test scripts and CI/CD integration.',
      duration: '1 Week - 1 Month',
      icon: 'fas fa-vial',
      badge: 'Essential',
      badge_type: 'default',
      category_slug: 'testing',
      technologies: ['Selenium', 'TestNG', 'CI/CD']
    },
    {
      title: 'MERN Stack',
      slug: 'mern-stack',
      description: 'Develop full-stack applications using MongoDB, Express.js, React, and Node.js with complete integration.',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-react',
      badge: 'Most Popular',
      badge_type: 'hot',
      category_slug: 'fullstack',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    {
      title: 'MEAN Stack',
      slug: 'mean-stack',
      description: 'Build dynamic web applications using MongoDB, Express.js, Angular, and Node.js stack.',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-angular',
      badge: 'Trending',
      badge_type: 'trending',
      category_slug: 'fullstack',
      technologies: ['MongoDB', 'Express', 'Angular', 'Node.js']
    },
    {
      title: 'Web Design',
      slug: 'web-design',
      description: 'Learn responsive web design principles, focusing on UX/UI design and front-end development.',
      duration: '1 Week - 1 Month',
      icon: 'fas fa-palette',
      badge: 'Creative',
      badge_type: 'default',
      category_slug: 'frontend',
      technologies: ['UI/UX', 'HTML/CSS', 'JavaScript']
    },
    {
      title: 'Web Development',
      slug: 'web-development',
      description: 'Master creating dynamic and responsive websites with HTML, CSS, JavaScript, and server-side functionality.',
      duration: '1 Week - 1 Month',
      icon: 'fas fa-code',
      badge: 'Most Popular',
      badge_type: 'hot',
      category_slug: 'frontend',
      technologies: ['HTML/CSS', 'JavaScript', 'PHP/MySQL']
    },
    {
      title: 'Frontend Development',
      slug: 'frontend-development',
      description: 'Focus on building engaging, user-friendly interfaces ensuring responsive and visually appealing web experiences.',
      duration: '1 Week - 1 Month',
      icon: 'fas fa-laptop-code',
      badge: 'Essential',
      badge_type: 'default',
      category_slug: 'frontend',
      technologies: ['HTML/CSS', 'JavaScript', 'React/Vue']
    },
    {
      title: 'Data Science',
      slug: 'data-science',
      description: 'Learn data analysis, machine learning, and visualization techniques using Python and popular libraries.',
      duration: '1 Week - 1 Month',
      icon: 'fas fa-chart-line',
      badge: 'In Demand',
      badge_type: 'trending',
      category_slug: 'data',
      technologies: ['Python', 'Pandas', 'NumPy', 'ML']
    },
    {
      title: 'iOS Development',
      slug: 'ios-development',
      description: 'Build native iOS applications using Swift and Xcode with modern design patterns.',
      duration: '1 Week - 1 Month',
      icon: 'fab fa-apple',
      badge: 'Premium',
      badge_type: 'default',
      category_slug: 'mobile',
      technologies: ['Swift', 'Xcode', 'UIKit']
    }
  ];

  try {
    // Get category IDs
    const categories = db.prepare('SELECT id, slug FROM internship_categories').all();
    const categoryMap = {};
    categories.forEach(c => { categoryMap[c.slug] = c.id; });
    
    // Clear existing internships
    db.exec('DELETE FROM internships');
    console.log('🗑️  Cleared existing internship programs\n');

    // Prepare insert statement
    const insertProgram = db.prepare(`
      INSERT INTO internships (title, slug, description, duration, icon, badge, badge_type, category_id, technologies, is_active, sort_order, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 1, ?, datetime('now'), datetime('now'))
    `);

    // Insert programs
    console.log('📝 Adding internship programs...');
    programs.forEach((prog, index) => {
      const categoryId = categoryMap[prog.category_slug] || null;
      insertProgram.run(
        prog.title,
        prog.slug,
        prog.description,
        prog.duration,
        prog.icon,
        prog.badge,
        prog.badge_type,
        categoryId,
        JSON.stringify(prog.technologies),
        index
      );
      console.log(`   ✅ Added: ${prog.title}`);
    });

    console.log('\n🎉 Internship programs seeded successfully!');
    console.log(`   Total programs: ${programs.length}`);
    
    // Show what's in database
    const allPrograms = db.prepare('SELECT id, title, slug FROM internships').all();
    console.log('\n📊 Programs in database:');
    allPrograms.forEach(p => console.log(`   [${p.id}] ${p.title}`));

  } catch (error) {
    console.error('❌ Error seeding internship programs:', error);
  }
};

// Run the seed
seedInternships();
