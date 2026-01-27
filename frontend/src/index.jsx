// COPILOT: Entry point for React clone of Django templates (index.html mirrors Django base). Ensure meta viewport and identical CSS from Django static. TODO: include global CSS imports copied from DJANGO_PROJECT_STATIC_DIR.
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
