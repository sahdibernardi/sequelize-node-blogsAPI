const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecretToken';

const tokenValidation = async (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ error: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(token, secret);

    if (!decoded) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }

    req.data = decoded.data;

    next();
    } catch (err) {
        return res.status(401).json({ message: 'Expired or invalid token' });
    }
};

module.exports = {
    tokenValidation,
};