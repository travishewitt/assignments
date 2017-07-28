function noDupes (input) {
    //turning input into an array to sort alphabetically
    var str = input.split("").sort();
    //creating an empty array to push my spliced values into
    var rejects = [];
    //loop through the array. if the array at index [i] is equal to the value next to it, we are going to splice it, and push it onto our empty array called rejects.
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i+1]) {
            rejects.push(str.splice(i, 1));
            i--;
        }
    }
    //here we join both arrays, and then console log them! ta da! no duplicate characters.
  var newStr = str.join("")
  var rejectsStr = rejects.join("")
  console.log(newStr);
  console.log(rejectsStr)
}


noDupes("bookkeeper larry");