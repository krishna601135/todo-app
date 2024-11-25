import express from 'express';
import {
    getTodos,
    createTodo,
    updateTodo,
    deleteTodo,
} from '../controllers/todoController.js';
import { protect } from '../middleware/authMiddleware.js';
import { addRateLimiter } from '../middleware/rateLimiter.js';

const router = express.Router();

router
    .route('/')
    .get(protect, getTodos) 
    .post(protect, addRateLimiter, createTodo); 

router
    .route('/:id')
    .put(protect, updateTodo) 
    .delete(protect, deleteTodo);

export default router;

