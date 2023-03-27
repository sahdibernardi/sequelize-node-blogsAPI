const { getById } = require('../services/post.service');

module.exports = async (req, res, next) => {
    const { id } = req.params;
  const data = req.data.dataValues;
  const userId = data.id;
  const postAuthor = await getById(id);
  if (postAuthor.userId !== userId) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }
  next();
};
