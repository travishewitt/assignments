var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

function caesarShift(input, shift) {
    var sexyArr = []
    for (var i = 0; i < input.length; i++) {
        var temp = input.charCodeAt(i) + shift;
        if (temp > 122) {
            temp = (temp - 122) + 96;
        }
        if (temp < 97 || temp > 122) {
            temp = temp - shift;
        }
        sexyArr.push(temp);
    }
    var sexierArr = []
    for (var j = 0; j < sexyArr.length; j++) {
        var temp2 = String.fromCharCode(sexyArr[j]);
        sexierArr.push(temp2);
    }
    return sexierArr.join("")
}

console.log(caesarShift(input, shift));