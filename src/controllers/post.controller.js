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

const getAllPosts = async (_req, res) => {
    try {
      const posts = await postService.gettAllPosts();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  const getById = async (req, res) => {
    try {
        const { id } = req.params;
    
        const post = await postService.getById(id);
        if (!post) return res.status(404).json({ message: 'Post does not exist' });
    
        return res.status(200).json(post);
      } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
};

const updatePost = async (req, res) => {
    try {
    const { id } = req.params;
    const { content, title } = req.body;
    await postService.editPost({ content, title, id });
    const edited = await postService.getById(id);
    return res.status(200).json(edited);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
  };

  const deletePost = async (req, res) => {
    try {
      const { id } = req.params;
      await postService.deletePost(id);
      return res.status(204).json({ message: '' });
    } catch (error) {
     return res.status(500).json({ message: error.message });
    }
  };

module.exports = { createPost, getAllPosts, getById, updatePost, deletePost };