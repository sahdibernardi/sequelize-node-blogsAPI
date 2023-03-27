const express = require('express');
const { postController } = require('../controllers');
const { tokenValidation } = require('../auth');
const validatePost = require('../middlewares/validatePost');
const validateUser = require('../middlewares/validateUser');
const validateContent = require('../middlewares/validateContentTitle');
const postSearch = require('../middlewares/postSearch');
const validateDeletionUser = require('../middlewares/validateDeletionUser');

const postRouter = express.Router();

postRouter.post('/',
    tokenValidation,
    validatePost,
    postController.createPost);

postRouter.get('/', tokenValidation, postController.getAllPosts);

postRouter.get('/:id', tokenValidation, postController.getById);

postRouter.put('/:id', tokenValidation, validateContent, validateUser, postController.updatePost);

postRouter.delete('/:id',
    tokenValidation,
    postSearch,
    validateDeletionUser,
    postController.deletePost);

module.exports = postRouter;