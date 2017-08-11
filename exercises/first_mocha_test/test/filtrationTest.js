describe("concatenation", function() {
    it("should return the concatenated array as a string", function() {
        var testArray = ["a", "b", "cdefg", "hi", "jklmnopqrstuvwxyz"];
        var test = concatenation(testArray);
        assert.equal(test, "abcdefghijklmnopqrstuvwxyz")
    })
})