let chai = require('chai');
let assert = chai.assert;
let comboString = require('../app.js')

let testObj = {
    first: "abcd",
    second: "abc",
    third: "abcde"
}

describe("substring combos", function() {
    it("should return 10 different substrings", function() {
        assert.includeMembers(comboString(testObj.first), ["a", "b", "c", "d", "abcd", "abc", "bcd", "ab", "bc", "cd"])
    });
    it("should return 6 different substrings", function() {
        assert.includeMembers(comboString(testObj.second), ["a", "b", "c", "abc", "ab", "bc"])
    });
    it("should return 14 different substrings", function() {
        assert.includeMembers(comboString(testObj.third), ["a", "b", "c", "d", "e", "ab", "bc", "cd", "de", "abc", "bcd", "cde", "abcd", "bcde"])
    })
})