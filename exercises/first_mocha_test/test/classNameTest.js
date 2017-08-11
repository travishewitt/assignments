describe('addClass', function() {
    it('should add a class to the element', function() {
        var element = { className: "" };
        addClass(element, "test-class")
        assert.equal(element.className, "test-class")
        console.log(element.className, "test-class")
    });
    it('should not add a class which already exists', function() {
        var element = { className: "exists" };
        addClass(element, "exists");
        var numClasses = element.className.split(" ").length;
        assert.equal(numClasses, 1);
    });
    it('should append new class after existing one', function() {
        var element = { className: "exists" };
        addClass(element, "new-class");
        var classes = element.className.split(" ")
        assert.equal(classes[1], "new-class");
        
    })
})


