# Yale IT Training Institute - Backend API

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/yale_db
JWT_SECRET=your_jwt_secret_key_here
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone_number
FRONTEND_URL=http://localhost:3000
NODE_ENV=development
```

### 3. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
net start MongoDB

# Mac/Linux
sudo systemctl start mongod
```

### 4. Run the Server
```bash
# Development mode with auto-restart
npm run dev

# Production mode
npm start
```

## API Endpoints

### Blogs
- `GET /api/blogs` - Get all blogs (with pagination)
- `GET /api/blogs/:slug` - Get single blog
- `GET /api/blogs/categories` - Get all categories
- `POST /api/blogs/:slug/comments` - Add comment

### Courses
- `GET /api/courses` - Get all courses
- `GET /api/courses/:slug` - Get single course

### Contact Forms
- `POST /api/contact` - Submit contact form
- `POST /api/course-inquiry` - Submit course inquiry
- `POST /api/internship-inquiry` - Submit internship inquiry
- `POST /api/syllabus-download` - Request syllabus download

### Health Check
- `GET /api/health` - Check API status

## Testing the API

Use Postman or curl to test endpoints:

```bash
# Health check
curl http://localhost:5000/api/health

# Get all courses
curl http://localhost:5000/api/courses

# Get all blogs
curl http://localhost:5000/api/blogs
```

## Project Structure
```
backend/
├── src/
│   ├── config/          # Configuration files
│   ├── models/          # Database models
│   ├── controllers/     # Request handlers
│   ├── routes/          # API routes
│   ├── middleware/      # Custom middleware
│   ├── utils/           # Utility functions
│   └── server.js        # Main server file
├── uploads/             # Uploaded files
├── package.json
└── .env.example
```
