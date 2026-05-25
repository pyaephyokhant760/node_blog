const request = require('supertest');
const app = require('../../index.js'); // သင့်ရဲ့ Express App ဖိုင်
const mongoose = require('mongoose');

describe('Post Feature Tests', () => {
    
    // Test အားလုံး မစခင် Database ချိတ်ဆက်ခြင်း (လိုအပ်လျှင်)
    beforeAll(async () => {
        const url = process.env.DB_URI || 'mongodb://admin:password123@127.0.0.1:27017/node_crud?authSource=admin';
        await mongoose.connect(url);
    });

    // Test အားလုံး ပြီးရင် Connection ပိတ်ခြင်း
    afterAll(async () => {
        await mongoose.connection.dropDatabase(); // (Option) Test database ကို ရှင်းထုတ်ချင်ရင်
        await mongoose.connection.close();
    });

    describe('POST /api/post/create', () => {
        it('should create a new post and return 201', async () => {
            const newPostData = {
                userId: "65f1a2b3c4d5e6f7a8b9c0d1", // တကယ့် User ရဲ့ ObjectId ထည့်ရပါမယ်
                categoryId: "65f1a2b3c4d5e6f7a8b9c0d2", // တကယ့် Category ရဲ့ ObjectId (သို့မဟုတ် null)
                name: 'Health & Fitness',
                slug: 'health-and-fitness', // URL အတွက် ဖြစ်ပါတယ်
                text: 'This is a post about health and fitness guide.',
                image: 'uploads/health.jpg',
                status: 'published'
            };

            const response = await request(app)
                .post('/api/post/create')
                .send(newPost)
                .set('Accept', 'application/json');

            // Assertions
            expect(response.status).toBe(201);
            expect(response.body).toHaveProperty('_id');
            expect(response.body.name).toBe('Health & Fitness');
        });

        it('should return 400 if name is missing', async () => {
            const response = await request(app)
                .post('/api/post/create')
                .send({}); // နာမည်မပါဘဲ ပို့ကြည့်ခြင်း

            expect(response.status).toBe(400);
        });
    });

    describe('GET /api/post', () => {
        it('should fetch all categories', async () => {
            const response = await request(app).get('/api/post');
            
            expect(response.status).toBe(200);
            expect(Array.isArray(response.body)).toBe(true);
        });
    });
});