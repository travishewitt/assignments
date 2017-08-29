let chai = require('chai');
let assert = chai.assert;
let adj = require('../app.js')


let testObj = {
    first: ["caught", "in", "a", "landslide"],
    second: ["no", "escape", "from", "reality"]
}

describe("adjacent test", function() {
    it("should return the combination of the three adjacent strings with the longest length", function() {
        assert.deepEqual(adj(testObj.first), ["in", "a", "landslide"])
    })
    it("should make this second one work, also", function() {
        assert.deepEqual(adj(testObj.second), ["escape", "from", "reality"])
    })
})