module.exports = (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds || categoryIds === null) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
}

  return next();
};