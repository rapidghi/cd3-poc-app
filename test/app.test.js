const request = require('supertest');
const app = require('../src/index'); // Import your app

describe('API Endpoints', () => {

  // Test for the root endpoint
  test('should respond with a 200 status code for GET /', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello, CD3!');
  });

  // Test for the health check endpoint
  test('should respond with a 200 status code for GET /healthz', async () => {
    const response = await request(app).get('/healthz');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('ok');
  });

});