const express = require('express');
const { loginController } = require('../controllers/index');

const loginRouter = express.Router();

loginRouter.get('/login', loginController);

module.exports = loginRouter;
