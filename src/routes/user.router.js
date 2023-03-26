const express = require('express');
const { userController } = require('../controllers');
const validateEmail = require('../middlewares/validateEmail');
const validateName = require('../middlewares/validateName');
const validatePassword = require('../middlewares/validatePassword');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, userController.createUser);

module.exports = userRouter;
