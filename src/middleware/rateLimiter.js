const rateLimit = {};

export const addRateLimiter = (req, res, next) => {
    const user = req.user.id;
    const now = Date.now();

    if (!rateLimit[user]) {
        rateLimit[user] = { count: 0, timestamp: now };
    }

    const elapsed = now - rateLimit[user].timestamp;

    if (elapsed > 15 * 60 * 1000) {
        rateLimit[user] = { count: 0, timestamp: now };
    }

    if (rateLimit[user].count >= 10) {
        const remainingTime = Math.ceil(3 - elapsed / (15 * 60 * 1000));
        if (remainingTime > 0)
            return res.status(429).json({ message: `Rate limit exceeded, wait ${remainingTime} minutes.` });
    }

    rateLimit[user].count += 1;
    next();
};

