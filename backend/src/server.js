require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const { connectDB } = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config/config');

// Initialize express app
const app = express();

// Connect to database
connectDB();

// Middleware
app.use(helmet());
app.use(cors({
  origin: config.frontendUrl,
  credentials: true,
}));
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Routes
app.use('/api/blogs', require('./routes/blog'));
app.use('/api/courses', require('./routes/courses'));
app.use('/api', require('./routes/contact'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Yale IT API is running',
    timestamp: new Date().toISOString(),
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to Yale IT Training Institute API',
    version: '1.0.0',
    endpoints: {
      blogs: '/api/blogs',
      courses: '/api/courses',
      contact: '/api/contact',
      health: '/api/health',
    },
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  });
});

// Error handler (must be last)
app.use(errorHandler);

// Start server
const PORT = config.port;
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║   🚀 Yale IT Backend Server Running   ║
  ╠════════════════════════════════════════╣
  ║   Port: ${PORT}                         ║
  ║   Environment: ${process.env.NODE_ENV || 'development'}            ║
  ║   Frontend: ${config.frontendUrl}   ║
  ╚════════════════════════════════════════╝
  `);
});

module.exports = app;
