const request = require('supertest');
const app = require('../index');

console.error = jest.fn();
let server;

beforeEach(() => (server = app.listen()));
afterEach(() => server.close());

describe('Country search API server', () => {
  it('should respond with country data when a valid country is provided', async () => {
    const response = await request(app).get('/name?country=Spain');

    expect(response.status).toBe(200);
    expect(response.body[0].name.common).toBe('Spain');
  });

  it('should respond with a 400 status and an error message when no country is provided', async () => {
    const response = await request(app).get('/name?country=');

    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: 'Country name is required' });
  });

  it('should respond with an error message when an invalid country is provided', async () => {
    const response = await request(app).get('/name?country=InvalidCountryName');

    expect(response.status).toBe(500);
    expect(response.body).toEqual({ error: 'Internal server error' });
  });
});
