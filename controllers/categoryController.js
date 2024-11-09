const Category = require('../models/category');

exports.createCategory = async (req, res) => {
    try {
        const category = await Category.create({ category_name: req.body.category_name });
        res.status(201).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCategories = async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
};

exports.updateCategory = async (req, res) => {
    await Category.update({ category_name: req.body.category_name }, { where: { id: req.params.id } });
    res.status(200).send('Category updated');
};

exports.deleteCategory = async (req, res) => {
    await Category.destroy({ where: { id: req.params.id } });
    res.status(200).send('Category deleted');
};
