let chai = require("chai");
let assert = chai.assert;
let duplicates = require("../js/app.js")


let testExamples = {
    noDupes: "i am not a robot",
    allDupes: "i i am am not not a a robot robot",
    someDupes: "i am am not a a robot",
    fuckDupes: "i am not am not am not a robot am not a robot"
}

describe("test", function () {
    it("should return an emptry string", function () {
        assert.deepEqual(duplicates(testExamples.noDupes), [])
    });
    
    it("should return all the duplicates", function () {
        assert.deepEqual(duplicates(testExamples.allDupes), ["i", "am", "not", "a", "robot"])
    });
    
    it("should return some of the duplicates", function () {
        assert.deepEqual(duplicates(testExamples.someDupes), ["am", "a"])
    });
    
    it("should return the duplicates of a mismatched string", function () {
        assert.deepEqual(duplicates(testExamples.fuckDupes), ["am", "not", "a", "robot"])
    });
})
