const express = require('express');
const { tokenValidation } = require('../auth');
const { categoryController } = require('../controllers');

const categoryRouter = express.Router();

categoryRouter.post('/', tokenValidation, categoryController.createCategory);

module.exports = categoryRouter;
