const { categoryService } = require('../services');

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: '"name" is required' });
          }
    
        const newCategory = await categoryService.createCategory(name);
    
        return res.status(201).json(await newCategory);
    } catch (error) {
        return res.status(500).json({
          message: error.message,
        });
      }
    };

  module.exports = { createCategory };