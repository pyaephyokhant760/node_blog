const mongoose = require("mongoose");
const categoryService = require("../services/CategoryService");

const createCategory = async (req, res) => {
    try {
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ message: "Category name is required" });
        }

        const category = await categoryService.createCategory(name);
        res.status(201).json(category);
    } catch (error) {
        // Error handling
        res.status(500).json({ message: error.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await categoryService.findAllCategories();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    createCategory,
    getAllCategories
};




