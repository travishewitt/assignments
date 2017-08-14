const camelCase = require("../app.js");
const chai = require("chai");
const assert = chai.assert;

//these are edge cases. this will show us what user input may look like, and we can use these properties for our tests instead of hardcoding
let tests = {
    spaces: "test example",
    hyphens: "test-example",
    underscores: "test_example",
    multiple: "test-motherfuckin-example-bro"
}

describe("camel case exercise", () => {
    it("should detect spaces and return a string in camelCase instead", () => {
        assert.equal(camelCase(tests.spaces), "testExample")
    });
    it("should detect hyphens and return a string in camelCase instead", () => {
        assert.equal(camelCase(tests.hyphens), "testExample")
    });
    it("should detect underscores and return a string in camelCase instead", () => {
        assert.equal(camelCase(tests.underscores), "testExample")
    });
    it("should detect mupltiple hyphenated words and return a string in camelCase instead", () => {
        assert.equal(camelCase(tests.multiple), "testMotherfuckinExampleBro")
    });
})
