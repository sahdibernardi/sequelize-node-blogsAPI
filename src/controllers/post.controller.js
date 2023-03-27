const { postService } = require('../services');
require('dotenv/config');

const createPost = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const userIdData = await req.data.dataValues.id;
    const post = { title, content, categoryIds, userId: await userIdData };
    const blogPost = await postService.createPost(post);

    if (!blogPost) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }
    return res.status(201).json(blogPost);
};

module.exports = { createPost };