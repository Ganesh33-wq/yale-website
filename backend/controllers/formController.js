// Form Submissions Controller
import db from '../database/db.js';

// ==================== CONTACT FORM ====================
export const submitContact = (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email) {
      return res.status(400).json({ success: false, message: 'Name and email are required' });
    }

    const stmt = db.prepare(`
      INSERT INTO contact_submissions (name, email, phone, subject, message)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(name, email, phone || '', subject || '', message || '');

    res.json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you soon.',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

export const getContactSubmissions = (req, res) => {
  try {
    const submissions = db.prepare(`
      SELECT * FROM contact_submissions ORDER BY created_at DESC
    `).all();

    res.json({ success: true, submissions });
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteContactSubmission = (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('DELETE FROM contact_submissions WHERE id = ?').run(id);
    res.json({ success: true, message: 'Submission deleted' });
  } catch (error) {
    console.error('Error deleting contact submission:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ==================== COURSE INQUIRY ====================
export const submitCourseInquiry = (req, res) => {
  try {
    const { name, email, phone, course, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }

    const stmt = db.prepare(`
      INSERT INTO course_inquiries (name, email, phone, course, message)
      VALUES (?, ?, ?, ?, ?)
    `);

    const result = stmt.run(name, email, phone, course || '', message || '');

    res.json({
      success: true,
      message: 'Thank you for your inquiry! Our team will contact you shortly.',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Course inquiry error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

export const getCourseInquiries = (req, res) => {
  try {
    const inquiries = db.prepare(`
      SELECT * FROM course_inquiries ORDER BY created_at DESC
    `).all();

    res.json({ success: true, inquiries });
  } catch (error) {
    console.error('Error fetching course inquiries:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteCourseInquiry = (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('DELETE FROM course_inquiries WHERE id = ?').run(id);
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (error) {
    console.error('Error deleting course inquiry:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ==================== SYLLABUS DOWNLOAD ====================
export const submitSyllabusDownload = (req, res) => {
  try {
    const { name, email, phone, course } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }

    const stmt = db.prepare(`
      INSERT INTO syllabus_downloads (name, email, phone, course)
      VALUES (?, ?, ?, ?)
    `);

    const result = stmt.run(name, email, phone, course || '');

    res.json({
      success: true,
      message: 'Syllabus download link has been sent to your email!',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Syllabus download error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

export const getSyllabusDownloads = (req, res) => {
  try {
    const downloads = db.prepare(`
      SELECT * FROM syllabus_downloads ORDER BY created_at DESC
    `).all();

    res.json({ success: true, downloads });
  } catch (error) {
    console.error('Error fetching syllabus downloads:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteSyllabusDownload = (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('DELETE FROM syllabus_downloads WHERE id = ?').run(id);
    res.json({ success: true, message: 'Download record deleted' });
  } catch (error) {
    console.error('Error deleting syllabus download:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ==================== INTERNSHIP APPLICATION ====================
export const submitInternshipApplication = (req, res) => {
  try {
    const { name, email, phone, college, city, department, program, duration, students, hostel, message } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: 'Name, email, and phone are required' });
    }

    const stmt = db.prepare(`
      INSERT INTO internship_applications (name, email, phone, college, city, department, program, duration, students, hostel, message)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const result = stmt.run(
      name, 
      email, 
      phone, 
      college || '', 
      city || '', 
      department || '', 
      program || '', 
      duration || '',
      students || 1, 
      hostel ? 1 : 0, 
      message || ''
    );

    res.json({
      success: true,
      message: 'Your internship application has been submitted successfully! We will contact you soon.',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Internship application error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.' });
  }
};

export const getInternshipApplications = (req, res) => {
  try {
    const applications = db.prepare(`
      SELECT * FROM internship_applications ORDER BY created_at DESC
    `).all();

    res.json({ success: true, applications });
  } catch (error) {
    console.error('Error fetching internship applications:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteInternshipApplication = (req, res) => {
  try {
    const { id } = req.params;
    db.prepare('DELETE FROM internship_applications WHERE id = ?').run(id);
    res.json({ success: true, message: 'Application deleted' });
  } catch (error) {
    console.error('Error deleting internship application:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ==================== STATS FOR ADMIN DASHBOARD ====================
export const getFormStats = (req, res) => {
  try {
    const contactCount = db.prepare('SELECT COUNT(*) as count FROM contact_submissions').get().count;
    const inquiryCount = db.prepare('SELECT COUNT(*) as count FROM course_inquiries').get().count;
    const syllabusCount = db.prepare('SELECT COUNT(*) as count FROM syllabus_downloads').get().count;
    const applicationCount = db.prepare('SELECT COUNT(*) as count FROM internship_applications').get().count;

    res.json({
      success: true,
      stats: {
        contacts: contactCount,
        inquiries: inquiryCount,
        downloads: syllabusCount,
        applications: applicationCount
      }
    });
  } catch (error) {
    console.error('Error fetching form stats:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
