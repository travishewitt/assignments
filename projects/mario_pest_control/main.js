var goombaPrice = parseInt(document.getElementById("goomb-price").textContent);
var bombPrice = parseInt(document.getElementById("bomb-price").textContent);
var cheepPrice = parseInt(document.getElementById("cheep-price").textContent);



document.getElementById("goomb-quant").addEventListener("input", function () {
    var goombaQuant = parseInt(document.getElementById("goomb-quant").value);
    var goombaTotal = goombaQuant * goombaPrice;
    document.getElementById("goomba-total").textContent = goombaTotal;
})

document.getElementById("bomb-quant").addEventListener("input", function () {
    var bombQuant = parseInt(document.getElementById("bomb-quant").value);
    var bombTotal = bombQuant * bombPrice;
    document.getElementById("bomb-total").textContent = bombTotal;
})

document.getElementById("cheep-quant").addEventListener("input", function () {
    var cheepQuant = parseInt(document.getElementById("cheep-quant").value);
    var cheepTotal = cheepQuant * cheepPrice;
    document.getElementById("cheep-total").textContent = cheepTotal;
})

document.getElementById("buttonGrand").addEventListener("click", function () {
    var goombaQuant = parseInt(document.getElementById("goomb-quant").value);
    var goombaTotal = goombaQuant * goombaPrice;
//    console.log(goombaTotal);
    var bombQuant = parseInt(document.getElementById("bomb-quant").value);
    var bombTotal = bombQuant * bombPrice;
//    console.log(bombTotal);
    var cheepQuant = parseInt(document.getElementById("cheep-quant").value);
    var cheepTotal = cheepQuant * cheepPrice;
//    console.log(cheepTotal);
    var grandTotal = goombaTotal + bombTotal + cheepTotal;
    
    parseInt(document.getElementById("grandTotal").textContent = grandTotal);
})