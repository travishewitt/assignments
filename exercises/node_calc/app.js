var readline = require("readline-sync")

var num1 = readline.question('Please enter your first number: ');
var num2 = readline.question('Please enter your second number: ');
var operation = readline.question('Please enter the operation to perform: ');

function operate(num1, num2, operation) {
    if (operation === "add") {
        return "Result: " + (parseInt(num1) + parseInt(num2))
    } else if (operation === "sub") {
        return "Result: " + (parseInt(num1) - parseInt(num2))
    } else if (operation === "mul") {
        return "Result: " + (parseInt(num1) * parseInt(num2))
    } else if (operation === "div") {
        return "Result: " + (parseInt(num1) / parseInt(num2))
    }
}

console.log(operate(num1, num2, operation));