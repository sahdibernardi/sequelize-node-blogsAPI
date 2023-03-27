const express = require('express');
const { postController } = require('../controllers');
const { tokenValidation } = require('../auth');
const validatePost = require('../middlewares/validatePost');

const postRouter = express.Router();

postRouter.post('/',
    tokenValidation,
    validatePost,
    postController.createPost);

postRouter.get('/', tokenValidation, postController.getAllPosts);

postRouter.get('/:id', tokenValidation, postController.getById);

module.exports = postRouter;