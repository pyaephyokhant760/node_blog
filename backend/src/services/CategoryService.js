const categoryRepository = require('../repositories/CategoryRepository');

class CategoryService {
    async createCategory(name) {
        return await categoryRepository.create(name);
    }

    async findAllCategories() {
        return await categoryRepository.findAll();
    }

    async findCategoryById(id) {
        return await categoryRepository.findById(id);
    }

    async updateCategory(id, name) {
        return await categoryRepository.update(id, name);
    }

    async deleteCategory(id) {
        return await categoryRepository.delete(id);
    }
}

module.exports = new CategoryService();