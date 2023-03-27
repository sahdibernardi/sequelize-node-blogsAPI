const { postService } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const postSearch = await postService.getById(id);

  if (!postSearch) return res.status(404).json({ message: 'Post does not exist' });

  next();
};