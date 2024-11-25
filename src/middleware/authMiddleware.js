import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import { verifyToken } from '../config/jwt.js';

export const protect = async (req, res, next) => {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = verifyToken(token, process.env.JWT_SECRET);

            if (!decoded) return res.status(401).json({ message: 'Unauthorized' });

            req.user = await User.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            res.status(401).json({ message: 'Unauthorized' });
        }
    } else {
        res.status(401).json({ message: 'Unauthorized, no token' });
    }
};

