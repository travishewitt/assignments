const myColorArr = ["DodgerBlue", "DeepSkyBlue", "DarkTurquoise", "CornflowerBlue","PaleVioletRed", "Plum", "SlateBlue", "PowderBlue", "SteelBlue"];
const leBoxes = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const animals = ["kitten", "puppy", "elephant", "poop"];
const backgroundColors = []


var randomNumber = function () {
    return Math.floor(Math.random() * 9)
}

console.log(myColorArr[randomNumber()])

document.getElementById('clickMe').addEventListener("click", function () {
    document.getElementById(leBoxes[randomNumber()]).style.backgroundColor = myColorArr[randomNumber()];
})

