var chai = require('chai')
var assert = chai.assert;
var nonRepeat = require('../app.js')

var tests = {
    firstTest: "abbbc",
    secondTest: "aaabcd",
    thirdTest: "aabbcd",
    allRepeats: "aaaaa"
}

describe("first non-repeated", ()=> {
    it("should return the first letter that isn't repeated", ()=> {
        assert.equal(nonRepeat(tests.firstTest), "a")
    });
    it("should return the first letter that isn't repeated, version two", ()=> {
        assert.equal(nonRepeat(tests.secondTest), "b")
    });
    it("should return the firs tletter that isn't repeated, verson three", ()=> {
        assert.equal(nonRepeat(tests.secondTest), "b")
    });
    it("should throw an error if all characters are repeated", () => {
        assert.throw(
            () => {
                nonRepeat(tests.allRepeats)
        }, 
        "contains all repeats")
    });
});