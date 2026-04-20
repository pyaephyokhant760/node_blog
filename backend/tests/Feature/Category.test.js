const request = require('supertest');
const app = require('../../index.js'); // သင့်ရဲ့ Express App ဖိုင်
const mongoose = require('mongoose');

describe('Category Feature Tests', () => {
    
    // Test အားလုံး မစခင် Database ချိတ်ဆက်ခြင်း (လိုအပ်လျှင်)
    beforeAll(async () => {
        const url = process.env.DB_URI_TEST || 'mongodb://admin:password123@127.0.0.1:27017/node_crud?authSource=admin';
        await mongoose.connect(url);
    });

    // Test အားလုံး ပြီးရင် Connection ပိတ်ခြင်း
    afterAll(async () => {
        await mongoose.connection.dropDatabase(); // (Option) Test database ကို ရှင်းထုတ်ချင်ရင်
        await mongoose.connection.close();
    });

    describe('POST /api/categories/create', () => {
        it('should create a new category and return 201', async () => {
            const newCategory = { name: 'Health & Fitness' };

            const response = await request(app)
                .post('/api/categories/create')
                .send(newCategory)
                .set('Accept', 'application/json');

            // Assertions
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('_id');
            expect(response.body.name).toBe('Health & Fitness');
        });

        it('should return 400 if name is missing', async () => {
            const response = await request(app)
                .post('/api/categories/create')
                .send({}); // နာမည်မပါဘဲ ပို့ကြည့်ခြင်း

            expect(response.status).toBe(400);
        });
    });

    describe('GET /api/categories', () => {
        it('should fetch all categories', async () => {
            const response = await request(app).get('/api/categories');
            
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });
});