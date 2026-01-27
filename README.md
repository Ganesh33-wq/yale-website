# React + Express clone of Django site

## What this is
- frontend/ (Vite React) renders components that copy Django templates exactly.
- backend/ (Express) exposes /api/* endpoints matching Django views and returns JSON with the same context keys.

## Setup
1) Copy Django static assets  
   - Copy everything from DJANGO_PROJECT_STATIC_DIR into frontend/public/static (preserve paths, fonts, images, CSS/JS).

2) Install and run
```bash
cd backend
npm install
npm run dev
# in another terminal
cd frontend
npm install
npm run dev
```

## Porting templates
- For each templates/PATH/FILE.html, create frontend/src/pages/PATH/FILE.jsx.
- Paste the template HTML verbatim; do not change element order, classes, IDs, inline styles, data-* attrs.
- Wire a React Router route in frontend/src/App.jsx with the exact Django URL (keep trailing slashes).
- Add fetches in the component to the matching /api endpoint; ensure JSON keys equal the Django context keys.

## Porting views
- For each Django view, create an Express controller under backend/controllers and add a route under backend/routes.
- Translate Django ORM queries into Node/ORM of choice; keep response shape identical to template context.
- Handle forms with the same input names; add CSRF/auth equivalents if needed.

## Environment
- Node >=20, npm.
- Frontend dev server: http://localhost:5173
- Backend API: https://yaleinfotech.com/api

## TODOs
- Replace placeholder payloads with real data from Django models.
- Add auth/session/CSRF equivalents if Django uses them.
- Add remaining routes/controllers/pages listed in DJANGO_TEMPLATE_LIST.
