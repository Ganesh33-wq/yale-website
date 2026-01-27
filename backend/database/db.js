// SQLite Database Setup for Yale IT Blog
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create database file
const dbPath = path.join(__dirname, 'yale_blog.db');
const db = new Database(dbPath);

// Enable foreign keys
db.pragma('journal_mode = WAL');

// Create tables
db.exec(`
  -- Categories table
  CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Blogs table
  CREATE TABLE IF NOT EXISTS blogs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    featured_image TEXT,
    category_id INTEGER,
    author TEXT DEFAULT 'Yale Admin',
    is_featured INTEGER DEFAULT 0,
    views INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES categories(id)
  );

  -- Internship Categories table
  CREATE TABLE IF NOT EXISTS internship_categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Internship Programs table
  CREATE TABLE IF NOT EXISTS internships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    description TEXT,
    duration TEXT DEFAULT '1 Week - 1 Month',
    icon TEXT DEFAULT 'fas fa-code',
    badge TEXT DEFAULT 'Popular',
    badge_type TEXT DEFAULT 'default',
    category_id INTEGER,
    technologies TEXT,
    is_active INTEGER DEFAULT 1,
    sort_order INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (category_id) REFERENCES internship_categories(id)
  );

  -- Contact Form Submissions
  CREATE TABLE IF NOT EXISTS contact_submissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT,
    subject TEXT,
    message TEXT,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Course Inquiry Submissions
  CREATE TABLE IF NOT EXISTS course_inquiries (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT,
    message TEXT,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Syllabus Download Submissions
  CREATE TABLE IF NOT EXISTS syllabus_downloads (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    course TEXT,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  -- Internship Applications
  CREATE TABLE IF NOT EXISTS internship_applications (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    college TEXT,
    city TEXT,
    department TEXT,
    program TEXT,
    duration TEXT,
    students INTEGER DEFAULT 1,
    hostel INTEGER DEFAULT 0,
    message TEXT,
    is_read INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Insert default categories if not exist
const defaultCategories = [
  { name: 'Programming', slug: 'programming', description: 'Programming tutorials and guides' },
  { name: 'Web Development', slug: 'web-development', description: 'Web development articles' },
  { name: 'Data Science', slug: 'data-science', description: 'Data science and analytics' },
  { name: 'Career', slug: 'career', description: 'Career guidance and tips' },
  { name: 'Technology', slug: 'technology', description: 'Latest technology trends' },
  { name: 'Cyber Security', slug: 'cyber-security', description: 'Security best practices' }
];

const insertCategory = db.prepare(`
  INSERT OR IGNORE INTO categories (name, slug, description) VALUES (?, ?, ?)
`);

defaultCategories.forEach(cat => {
  insertCategory.run(cat.name, cat.slug, cat.description);
});

// Insert default internship categories if not exist
const defaultInternshipCategories = [
  { name: 'Full Stack', slug: 'fullstack' },
  { name: 'Frontend', slug: 'frontend' },
  { name: 'Mobile', slug: 'mobile' },
  { name: 'Testing', slug: 'testing' },
  { name: 'Marketing', slug: 'marketing' },
  { name: 'Data', slug: 'data' }
];

const insertInternshipCategory = db.prepare(`
  INSERT OR IGNORE INTO internship_categories (name, slug) VALUES (?, ?)
`);

defaultInternshipCategories.forEach(cat => {
  insertInternshipCategory.run(cat.name, cat.slug);
});

console.log('✅ Database initialized: yale_blog.db');

export default db;
