const { User } = require('../models');

const regexCheck = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

module.exports = async (req, res, next) => {
    const { email } = req.body;

    if (!email || !regexCheck(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
    }

    const user = await User.findOne({ where: { email } });

    if (user) {
    return res.status(409).json({ message: 'User already registered' });
    }

    next();
};