var request = require('supertest');
var app = require('../app');
var assert = require('assert');
const { expect } = require('chai');

// 대분류 file, class 
describe("GET /users", () => {
    // 소분류 유사 테스트군?
    // context("", () => {});

    // 단위테스트 method
    it("GET /", () => {
        assert.equal(true, true);
        // return request(app).get("/users")
        //     .expect(200);
    });

    it("GET /users/test", () => {
        request(app).get("/users/test")
            .expect(200).end((err, res)=>{
                if(err) throw err
                // assert.equal('gandhi', res.text)
                expect(res.text).to.equal('gandhi')
            })
    });
});
