var isPalindrome = function(str) {
    var splitString = str.split('');
    var reversedString = splitString.reverse().join('');
    return reversedString === str;
}


module.exports = {
    isPalindrome
}
