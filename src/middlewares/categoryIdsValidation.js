const categoryService = require('../services');

module.exports = async (req, res, next) => {
  const { categoryIds } = req.body;
  if (!categoryIds) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const categories = await categoryService.getAllCategoriesId(categoryIds);
  if (categories.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  next();
};