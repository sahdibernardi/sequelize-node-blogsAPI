const { userService } = require('../services');

module.exports = async (req, res, next) => {
  const { id } = req.params;
  const user = await userService.getById(id);
  const { dataValues } = req.data;
  if (!user || user.email !== dataValues.email) {
    return res.status(401).json({ message: 'Unauthorized user' });
  }

  next();
};