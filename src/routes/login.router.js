const express = require('express');
const { loginController } = require('../controllers/index');
const bodyValidation = require('../middlewares/bodyValidation');

const loginRouter = express.Router();

loginRouter.post('/', bodyValidation, loginController.getUserByEmail);

module.exports = loginRouter;
