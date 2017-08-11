var chai = require('chai');
var assert = chai.assert;

var isPalindrome = require("./palindromeFunction.js").isPalindrome;

describe('palindrome', function() {
    it('should return the truthiness of an input and its reverse, if it\'s a palindrome', function() {
        isPalindrome("racecar");
        assert.equal(isPalindrome("racecar"), true);
    });
});


