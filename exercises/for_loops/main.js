function printThoseLetters(str) {
    var thisArray = str.split("");
    for (var i = 0; i < thisArray.length; i++) {
        console.log(thisArray[i]);
    }
    return;
}

printThoseLetters("fibonacci");

function findThisLetter (str, letter) {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      return i;
    }
    return "cannot find character";
  }
}

findThisLetter("feces", "i")

function meaningOfLife(arrayOfNumbers) {
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        if (arrayOfNumbers[i] === 42) return "42 found.";
    }
    console.log("We have not found the meaning of life.")
}


meaningOfLife([1, 4, 5, 3, 12, 12, 12, 12, 12, 4, 52, 41, 2])


function findSmallestNumber(array) {
    var smallest = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
        }
    }
    return smallest;
}

findSmallestNumber([2, 5, 4, 1, -1, 1, 7, 2, 5, 25])
