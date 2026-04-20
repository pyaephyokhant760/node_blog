const categoryService = require('../src/services/CategoryService');
const categoryRepository = require('../src/repositories/CategoryRepository');


jest.mock('../src/repositories/CategoryRepository');

describe('CategoryService - Create', () => {
    it('should create a new category successfully', async () => {
        categoryRepository.create.mockResolvedValue({ id: 1, name: 'Category 1' });

        const result = await categoryService.createCategory({ name: 'Category 1' });

        expect(result).toHaveProperty('id');
        expect(categoryRepository.create).toHaveBeenCalled();
    });
});

