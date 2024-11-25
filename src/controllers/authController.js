import User from '../models/userModel.js';
import { generateToken } from '../config/jwt.js';

export const register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.create({ username, password });
        const token = generateToken(user, process.env.JWT_SECRET, '5m');
        res.status(201).json({ user, token });
    } catch (err) {
        res.status(400).json({ message: 'Error registering user', error: err.message });
    }
};

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (user && (await user.matchPassword(password))) {
            const token = generateToken(user, process.env.JWT_SECRET, '5m');
            res.cookie('token', token, { httpOnly: true });
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Error logging in', error: err.message });
    }
};

