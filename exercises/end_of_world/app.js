setTimeout(function () {
    document.getElementById("timer").textContent = "The world IS OVER YOU ARE DED WE ALL DED. boom."
}, 20000);

var otherTimer = document.getElementById("otherTimer")
var completeTimer = document.getElementById("completeTimer")

var counter = 0;
var countDown = setInterval(function () {
    otherTimer.textContent -= 1;
    if (otherTimer.textContent < 10) {
        otherTimer.textContent = "0" + otherTimer.textContent;
    }
    counter++;
    if (counter === 20) {
        clearInterval(countDown);
        completeTimer.textContent = "";
        document.getElementById("boom").style.backgroundColor = "red";
    }
}, 1000)



