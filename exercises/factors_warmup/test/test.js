const chai = require("chai");
const assert = chai.assert;
const factor = require("../app.js");

let tests = {
    one: 1,
    two: 2,
    three: 9,
    four: 10,
}

describe("factors solutions", function() {
    it("should return all factors of the number", function() {
        assert.equal(factor(tests.one), "prime");
    });
    it("should return all factors of the number 10", function() {
        assert.equal(factor(tests.four), 4);
    });
    it("should return all factors of the number 9", function() {
        assert.equal(factor(tests.three), 3);
    });
    it("should return all factors of the number 2", function() {
        assert.equal(factor(tests.two), 2);
    });
})