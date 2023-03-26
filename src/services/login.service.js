const { User } = require('../models');

const getUserByEmail = async (email, password) => {
    const users = await User.findOne({ where: { email, password } });
    return users;
};

module.exports = { getUserByEmail };