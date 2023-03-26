const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'mySecretPassword';

// HEADER authorization EXAMPLE: {
//     "email": "lewishamilton@gmail.com",
//     "password": "123456"
//   }

const JWT_CONFIG = {
    expiresIn: '2h',
    algorithm: 'HS256',
};

const createToken = (data) => jwt.sign({ data }, secret, JWT_CONFIG);

module.exports = { createToken };