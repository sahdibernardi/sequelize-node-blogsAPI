const express = require('express');
const { tokenValidation } = require('../auth');
const { userController } = require('../controllers');
const validateEmail = require('../middlewares/validateEmail');
const validateName = require('../middlewares/validateName');
const validatePassword = require('../middlewares/validatePassword');

const userRouter = express.Router();

userRouter.post('/', validateName, validateEmail, validatePassword, userController.createUser);

userRouter.get('/', tokenValidation, userController.getUsers);

userRouter.get('/:id', tokenValidation, userController.getById);

userRouter.delete('/me', tokenValidation, userController.deleteMe);

module.exports = userRouter;
