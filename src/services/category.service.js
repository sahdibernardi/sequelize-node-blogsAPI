const { Category } = require('../models');

const createCategory = async (name) => {
    const newCategory = await Category.create({ name });
    return newCategory;
  };
  
const getCategories = async () => Category.findAll();
  
const findCategoriesById = async (id) => Category.findAll({ where: { id } });

module.exports = { createCategory, findCategoriesById, getCategories };