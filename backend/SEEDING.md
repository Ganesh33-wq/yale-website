# Sample Data Seeding Instructions

## Quick Start

### Method 1: Using MongoDB Compass (GUI)
1. Open MongoDB Compass
2. Connect to `mongodb://localhost:27017`
3. Create database: `yale_db`
4. For each collection below, use "Add Data" → "Insert Document"

### Method 2: Using mongosh (CLI)
```bash
# Connect to MongoDB
mongosh

# Switch to yale_db database
use yale_db

# Copy and paste the contents of sample-data.js
```

### Method 3: Using Node.js script
```bash
cd backend
mongosh yale_db sample-data.js
```

## Collections to Create

### 1. blogcategories
```json
{
  "name": "Technology",
  "slug": "technology",
  "description": "Latest technology trends",
  "createdAt": "2024-01-14T00:00:00.000Z"
}
```

### 2. blogposts
```json
{
  "title": "Welcome to Yale IT",
  "slug": "welcome-to-yale-it",
  "category": "ObjectId_from_blogcategories",
  "author": "Yale IT Admin",
  "summary": "Welcome post",
  "content": "<p>Welcome to Yale IT...</p>",
  "status": "published",
  "viewCount": 0,
  "createdAt": "2024-01-14T00:00:00.000Z"
}
```

### 3. courses
Use the sample-data.js file which includes:
- Python Training
- Java Training
- Full Stack Development

## After Seeding

1. Verify data in MongoDB Compass or mongosh:
```bash
mongosh yale_db
db.courses.find()
db.blogcategories.find()
db.blogposts.find()
```

2. Test API endpoints:
```bash
curl http://localhost:5000/api/courses
curl http://localhost:5000/api/blogs
curl http://localhost:5000/api/blogs/categories
```

3. View in browser:
- Courses: http://localhost:3000/course/python-training
- Blog: http://localhost:3000/blog

## Notes

- Replace `ObjectId("...")` with actual IDs from your database
- Adjust dates as needed
- Add more sample data based on your requirements
- For production, use proper migration scripts
