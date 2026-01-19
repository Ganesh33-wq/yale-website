# Yale IT Training Institute - React Frontend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_SITE_URL=http://localhost:3000
```

### 3. Copy Static Assets
Copy all your static files from the Django project:
- Copy `static/media` folder to `public/static/media`
- Copy `static/vendor` folder to `public/static/vendor`
- Copy CSS files from `static/css` to `src/styles/` (optional)

### 4. Start Development Server
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`
Runs the app in development mode

### `npm build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner

## Project Structure
```
frontend/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable React components
│   │   ├── common/      # Common components (Navbar, Footer)
│   │   ├── forms/       # Form components
│   │   ├── course/      # Course-related components
│   │   └── blog/        # Blog-related components
│   ├── pages/           # Page components
│   │   ├── courses/     # Course pages
│   │   └── blog/        # Blog pages
│   ├── services/        # API service layer
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main app component
│   └── index.js         # Entry point
└── package.json
```

## Features

✅ React Router for navigation
✅ Axios for API calls
✅ React Toastify for notifications
✅ React Helmet for SEO
✅ AOS for scroll animations
✅ Responsive design with Bootstrap
✅ Custom hooks for data fetching and forms
✅ Service layer for API integration
✅ Component-based architecture

## Pages

- `/` - Home page
- `/about` - About page
- `/contact` - Contact page
- `/course/:slug` - Course detail pages
- `/blog` - Blog listing
- `/blog/:slug` - Blog detail

## API Integration

All API calls are handled through the service layer in `src/services/`:
- `blogService.js` - Blog-related API calls
- `courseService.js` - Course-related API calls
- `contactService.js` - Contact form submissions

## Styling

The project uses a combination of:
- Bootstrap 5 for layout and components
- Custom CSS for specific styling
- AOS library for scroll animations
- Font Awesome for icons

## Development Notes

1. Make sure the backend API is running before starting the frontend
2. Update the API URL in `.env` if using a different backend URL
3. Copy all static assets from the Django project for complete functionality
4. The project uses React Router v6 for routing
