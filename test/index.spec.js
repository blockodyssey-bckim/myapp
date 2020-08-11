var request = require('supertest');
var app = require('../app');

describe("GET /", () => {
    it("should return 200 OK", () => {
        return request(app).get("/")
            .expect(200);
    });
});