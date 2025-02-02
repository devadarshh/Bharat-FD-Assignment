const request = require('supertest');
const app = require('../server'); // adjust path if needed

describe('FAQ API Tests', () => {
  let faqId;

  it('should create an FAQ successfully', async () => {
    const response = await request(app)
      .post('/api/faqs')
      .send({
        question: 'What is Node.js?',
        answer: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      })
      .expect('Content-Type', /json/)
      .expect(201);

    expect(response.body).toHaveProperty('question', 'What is Node.js?');
    expect(response.body).toHaveProperty('answer', 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.');

    faqId = response.body._id; // Save the FAQ ID for future tests
  });

  it('should fetch FAQs', async () => {
    const response = await request(app)
      .get('/api/faqs')
      .query({ lang: 'en', page: 1, limit: 10 })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('question');
  });

  it('should validate the FAQ request', async () => {
    const response = await request(app)
      .post('/api/faqs')
      .send({
        question: '', // Invalid question
        answer: '', // Invalid answer
      })
      .expect('Content-Type', /json/)
      .expect(400);

    expect(response.body.errors).toHaveLength(2); 
  });

  it('should get translated FAQ for a given language', async () => {
    const response = await request(app)
      .get('/api/faqs')
      .query({ lang: 'es', page: 1, limit: 10 })
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body[0]).toHaveProperty('question');
    expect(response.body[0]).toHaveProperty('answer');
  });

  afterAll(async () => {
    await request(app).delete(`/api/faqs/${faqId}`);
  });
});
