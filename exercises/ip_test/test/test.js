let chai = require('chai');
let assert = chai.assert;
let ipTest = require('../app.js')

let testObj = {
    firstTest: "176.16.254.1",
    secondTest: "186.16.254",
    thirdTest: "199.1666.254.1",
    fourthTest: "176.a.254.1",
    fifthTest: "...."
}

describe('iptest', function() {
    it('should return true if there are 4 numbers, within 0-255', function() {
        assert.equal(ipTest(testObj.firstTest), true)
    });
    it('should return false if there are only 3 numbers within 0-255', function() {
        assert.equal(ipTest(testObj.secondTest), false)
    });
    it('should return false if any number is over 255 or under 0', function() {
        assert.equal(ipTest(testObj.thirdTest), false)
    });
    it('should return false if there are any letters in the ip address', function() {
        assert.equal(ipTest(testObj.fourthTest), false)
    })
    it('should return false if someone fucks with you by giving you four periods', function() {
        assert.equal(ipTest(testObj.fifthTest), false)
    })
})

