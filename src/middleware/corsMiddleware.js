import cors from 'cors';

const allowedOrigins = [
    'http://localhost:2395',
    'http://localhost:8275',
    'http://localhost:6290',
];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
};

export default cors(corsOptions);

