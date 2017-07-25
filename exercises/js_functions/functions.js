//What is a function? 
//    A block of code that gets executed when it's called.
//    
//    function poop () {
//        console.log("nom nom nom")
//    }

//    nothing will happen until I call it. 

//console.log(poop ());

//    This returns both "nom nom nom", and also undefined.

//function eat(item){
//    console.log(item)
//}

//console.log(eat())

//If I run this, I will get undefined twice.

//function eat(item) {
//    console.log(item);
//    return item;
//}
//
//console.log(eat(5))

var arr = ["This", "Is", "A", "Test", "Array"];
//i want it to splice "is", "a", "test" from my array, and leave the rest. 
function arrSplice(arr) {
    arr.splice(1, 3);
    return arr;
}

arrSplice(arr);
console.log(arr);

var thisArr = ["Greetings", "will", "you", "stay", "awhile", "and", "listen"]
//i want to make a new array with "stay", "awhile", "and", "listen" using .slice()

function newArray(thisArr) {
    console.log(thisArr.slice(0, 3))
}

newArray(thisArr)

newArray([1, 2, 3, 4, 5, 6, 7])


//When you call a function, you give it an argument. When you define a function, it takes certain parameters. 

//function eat(parameter) {
//    return item
//}
//
//console.log(eat(argument))
//
//function eat(item, numOfUser, favoriteFood) {
//    return item
//}
//
//console.log(eat("number", 7, "pie"))
//This just logs "number", since you can only return one thing of data, unless you put them in an array or object first
//
//function sum(num1, num2){
//    var total = 0;
//    total = num1 + num2;
//    return total;
//}

//the following shows Dan's example of calling a function inside of a function:
//function eat(item, numOfUser, favoriteFood) {
//    if (favoriteFood === "pie") {
//        return sum(item, 1)
//    } else {
//        return "not 3"
//    }
//}
//
//function sum(num1, num2){
//    var total = 0;
//    total = num1 + num2;
//    return total;
//}
//
//var number = 3;
//var item;
//console.log(eat(number, 7, "pie"))


//make two functions, and each of them will be used twice, in other functions

function reverseString(str) {
    var stringToArray = splitString(str);
    var reverseArray = revStr(stringToArray);
    var newString = joinedStr(reverseArray);
    function splitString(str) {
        var newString = str.split("");
        return newString;
    }

    function revStr(newString) {
        var reversedStr = newString.reverse();
        return reversedStr;
    }

    function joinedStr(newString) {
        var joinedString = newString.join("");
        return joinedString;
    }
   
    return newString;
}






reverseString("abcdefghijklmnopqrstuvwxyz")
