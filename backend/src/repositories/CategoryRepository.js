const Category = require('../models/Category');

class CategoryRepository {
    async create(name) {
        return await Category.create({ name });
    }

    async findAll() {
        return await Category.find();
    }

    async findById(id) {
        return await Category.findById(id);
    }

    async update(id, name) {
        return await Category.findByIdAndUpdate(id, { name }, { new: true });
    }

    async delete(id) {
        return await Category.findByIdAndDelete(id);
    }
}

module.exports = new CategoryRepository();