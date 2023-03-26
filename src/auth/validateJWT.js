const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecretToken';
const verifyToken = (token) => jwt.verify(token, secret);

module.exports = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
          return res.status(401).json({ message: 'Token not found' });
        }
        const verification = verifyToken(token);
        req.data = verification;
        next();
      } catch (error) {
        res.status(401).json({
          message: 'Expired or invalid token',
        });
      }
};