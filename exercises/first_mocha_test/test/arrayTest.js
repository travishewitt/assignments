var assert = chai.assert;

describe("Array", function() {
    it("should start empty", function (){
        var arr = [];
        assert.equal(arr.length, 0, "array length should be 0");
    })
})