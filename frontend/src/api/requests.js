// COPILOT: Fetch helpers mirroring Django view contexts. Update endpoints to match Express routes. TODO: align JSON keys with Django template context.
const API_BASE = import.meta.env.VITE_API_BASE || 'https://yaleinfotech.com/api';

export async function getHome() {
  const res = await fetch(`${API_BASE}/home/`, { credentials: 'include' });
  if (!res.ok) throw new Error('Failed to load home');
  return res.json();
}

// TODO: add helpers for each Django view (e.g., getBlogSlug(slug), postContact(formData)) matching /api paths.
