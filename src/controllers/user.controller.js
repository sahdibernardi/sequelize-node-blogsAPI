const { createToken } = require('../auth/createToken');
const { userService } = require('../services');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;

    const newUser = await userService.createUser(displayName, email, password, image);

    const token = createToken(newUser);

    return res.status(201).json({ token });
};

module.exports = { createUser };