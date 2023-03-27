const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
  };

const getCategories = async () => Category.findAll();

  module.exports = { createCategory, getCategories };