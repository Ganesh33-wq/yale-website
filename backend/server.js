// COPILOT: Express server cloning Django views under /api. TODO: port Django ORM/auth/session behavior. Copy static assets separately to frontend/public/static.
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api', routes);

// Example form POST preserving original input names
app.post('/api/example-form/', (req, res) => {
  // TODO: map Django form handling from templates/path/form.html and views.py
  res.json({ ok: true, received: req.body });
});

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
