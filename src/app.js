import express from 'express';
import corsMiddleware from './middleware/corsMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import todoRoutes from './routes/todoRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(corsMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/todos', todoRoutes);

export default app;

