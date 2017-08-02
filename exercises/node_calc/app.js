var readline = require("readline-sync")

var num1 = parseInt(readline.question('Please enter your first number: '));
var num2 = parseInt(readline.question('Please enter your second number: '));
var operation = readline.question('Please enter the operation to perform: ');

function operate(num1, num2, operation) {
    if (operation === "add") {
        return "Result: " + num1 + num2
    } else if (operation === "sub") {
        return "Result: " + num1 - num2
    } else if (operation === "mul") {
        return "Result: " + num1 * num2
    } else if (operation === "div") {
        return "Result: " + num1 / num2
    } else {
        console.log("Please enter a valid operation")
    }
}

console.log(operate(num1, num2, operation));