const { User } = require('../models');

const createUser = async (displayName, email, password, image) => {
    const newUser = await User.create({ displayName, email, password, image });
    return newUser;
};

const getUsers = async () => User.findAll({ attributes: { exclude: 'password' } });

const getById = async (id) => User.findByPk(id, { attributes: { exclude: 'password' } });

const deleteMe = (id) => User.destroy({ where: { id } });

module.exports = { createUser, getUsers, getById, deleteMe };