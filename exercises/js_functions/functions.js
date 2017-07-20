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
function arrSplice (arr) {
    arr.splice(1, 3);
    return arr;
}

arrSplice(arr);
console.log(arr);

var thisArr = ["Greetings", "will", "you", "stay", "awhile", "and", "listen"]
//i want to make a new array with "stay", "awhile", "and", "listen" using .slice()

function newArray(thisArr){
  console.log(thisArr.slice(0,3))
}

newArray(thisArr)

newArray([1, 2, 3, 4, 5, 6, 7])