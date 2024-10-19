const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should response the GET method", () => {
    return request(app)
      .get("/")
      .expect(200);
  });
});

describe('Gestion des erreurs 404', () => {
  it('devrait renvoyer 404 pour une route inexistante', async () => {
    const response = await request(app).get('/route-inexistante');
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('error', 'Not Found');
  });
});