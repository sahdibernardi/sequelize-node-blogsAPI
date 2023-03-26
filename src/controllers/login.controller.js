const { createToken } = require('../auth/createToken');
const { loginService } = require('../services');

const getUserByEmail = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService.getUserByEmail(email, password);

    if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password_, ...userWithoutPassword } = user;
    const token = createToken(userWithoutPassword);

    res.status(200).json({ token });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message });
  }
  };

   module.exports = { getUserByEmail };
