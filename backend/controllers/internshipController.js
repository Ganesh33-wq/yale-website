// Internship Controller - SQLite Database
import db from '../database/db.js';

// Get all internship categories
export const getInternshipCategories = (req, res) => {
  try {
    const categories = db.prepare(`
      SELECT ic.*, COUNT(i.id) as program_count 
      FROM internship_categories ic 
      LEFT JOIN internships i ON ic.id = i.category_id AND i.is_active = 1
      GROUP BY ic.id
      ORDER BY ic.name
    `).all();
    
    res.json({ categories });
  } catch (error) {
    console.error('Error fetching internship categories:', error);
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

// Get all internship programs
export const getInternshipPrograms = (req, res) => {
  try {
    const { category } = req.query;
    
    let query = `
      SELECT i.*, ic.name as category_name, ic.slug as category_slug
      FROM internships i 
      LEFT JOIN internship_categories ic ON i.category_id = ic.id 
      WHERE i.is_active = 1
    `;
    
    const params = [];
    if (category && category !== 'all') {
      query += ' AND ic.slug = ?';
      params.push(category);
    }
    
    query += ' ORDER BY i.sort_order, i.created_at DESC';
    
    const programs = db.prepare(query).all(...params);
    
    // Parse technologies JSON string
    const formattedPrograms = programs.map(p => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      description: p.description,
      duration: p.duration,
      icon: p.icon,
      badge: p.badge,
      badge_type: p.badge_type,
      category: p.category_name ? {
        name: p.category_name,
        slug: p.category_slug
      } : null,
      technologies: p.technologies ? JSON.parse(p.technologies) : []
    }));
    
    // Get categories for filter
    const categories = db.prepare(`
      SELECT ic.name, ic.slug, COUNT(i.id) as count 
      FROM internship_categories ic 
      LEFT JOIN internships i ON ic.id = i.category_id AND i.is_active = 1
      GROUP BY ic.id
      HAVING count > 0
      ORDER BY ic.name
    `).all();
    
    res.json({
      programs: formattedPrograms,
      categories: categories.map(c => ({ name: c.name, slug: c.slug })),
      total: formattedPrograms.length
    });
  } catch (error) {
    console.error('Error fetching internship programs:', error);
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
};

// Admin: Get all internships (including inactive)
export const getAllInternships = (req, res) => {
  try {
    const programs = db.prepare(`
      SELECT i.*, ic.name as category_name, ic.slug as category_slug
      FROM internships i 
      LEFT JOIN internship_categories ic ON i.category_id = ic.id 
      ORDER BY i.sort_order, i.created_at DESC
    `).all();
    
    const formattedPrograms = programs.map(p => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      description: p.description,
      duration: p.duration,
      icon: p.icon,
      badge: p.badge,
      badge_type: p.badge_type,
      category_id: p.category_id,
      category: p.category_name ? {
        name: p.category_name,
        slug: p.category_slug
      } : null,
      technologies: p.technologies ? JSON.parse(p.technologies) : [],
      is_active: p.is_active,
      sort_order: p.sort_order,
      created_at: p.created_at
    }));
    
    res.json({ success: true, programs: formattedPrograms });
  } catch (error) {
    console.error('Error fetching all internships:', error);
    res.status(500).json({ success: false, error: 'Failed to fetch internships' });
  }
};

// Admin: Create internship program
export const createInternship = (req, res) => {
  try {
    const { title, slug, description, duration, icon, badge, badge_type, category_id, technologies, is_active, sort_order } = req.body;
    
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    
    const programSlug = slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const techJson = JSON.stringify(technologies || []);
    
    const result = db.prepare(`
      INSERT INTO internships (title, slug, description, duration, icon, badge, badge_type, category_id, technologies, is_active, sort_order, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, datetime('now'), datetime('now'))
    `).run(
      title,
      programSlug,
      description || '',
      duration || '1 Week - 1 Month',
      icon || 'fas fa-code',
      badge || 'Popular',
      badge_type || 'default',
      category_id || null,
      techJson,
      is_active !== undefined ? (is_active ? 1 : 0) : 1,
      sort_order || 0
    );
    
    res.status(201).json({ 
      success: true,
      message: 'Internship program created successfully',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Error creating internship:', error);
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      res.status(400).json({ success: false, error: 'A program with this slug already exists' });
    } else {
      res.status(500).json({ success: false, error: 'Failed to create internship program' });
    }
  }
};

// Admin: Update internship program
export const updateInternship = (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, description, duration, icon, badge, badge_type, category_id, technologies, is_active, sort_order } = req.body;
    
    const existing = db.prepare('SELECT * FROM internships WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ success: false, error: 'Internship program not found' });
    }
    
    const techJson = JSON.stringify(technologies || []);
    
    db.prepare(`
      UPDATE internships 
      SET title = ?, slug = ?, description = ?, duration = ?, icon = ?, badge = ?, badge_type = ?, 
          category_id = ?, technologies = ?, is_active = ?, sort_order = ?, updated_at = datetime('now')
      WHERE id = ?
    `).run(
      title || existing.title,
      slug || existing.slug,
      description !== undefined ? description : existing.description,
      duration || existing.duration,
      icon || existing.icon,
      badge || existing.badge,
      badge_type || existing.badge_type,
      category_id !== undefined ? category_id : existing.category_id,
      techJson,
      is_active !== undefined ? (is_active ? 1 : 0) : existing.is_active,
      sort_order !== undefined ? sort_order : existing.sort_order,
      id
    );
    
    res.json({ success: true, message: 'Internship program updated successfully' });
  } catch (error) {
    console.error('Error updating internship:', error);
    res.status(500).json({ success: false, error: 'Failed to update internship program' });
  }
};

// Admin: Delete internship program
export const deleteInternship = (req, res) => {
  try {
    const { id } = req.params;
    
    const existing = db.prepare('SELECT * FROM internships WHERE id = ?').get(id);
    if (!existing) {
      return res.status(404).json({ success: false, error: 'Internship program not found' });
    }
    
    db.prepare('DELETE FROM internships WHERE id = ?').run(id);
    
    res.json({ success: true, message: 'Internship program deleted successfully' });
  } catch (error) {
    console.error('Error deleting internship:', error);
    res.status(500).json({ success: false, error: 'Failed to delete internship program' });
  }
};

export default { 
  getInternshipCategories, 
  getInternshipPrograms, 
  getAllInternships,
  createInternship, 
  updateInternship, 
  deleteInternship 
};
