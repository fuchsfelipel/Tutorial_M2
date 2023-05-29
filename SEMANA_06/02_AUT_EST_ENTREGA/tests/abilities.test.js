const request = require('supertest');
const app = require('../app');

describe("GET /abilities", () => {
    test("It should return an array of abilities", async () => {
        request(app).get("/abilities").then((response) => {
            expect(response.body).toBeInstanceOf(Array);
        })
    })

    test("It should return HTTP 200", async () => {
        request(app).get("/abilities").then((response) => {
            expect(response.statusCode).toBe(200);
        })
    })
})