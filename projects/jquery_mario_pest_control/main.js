
var goombaPrice = parseInt($("#goomb-price").html());
var bombPrice = parseInt($("#bomb-price").html());
var cheepPrice = parseInt($("#cheep-price").html());



$("#goomb-quant").keyup(function (e) {
    console.log($(e.target).val())
    var goombaQuant = parseInt($("#goomb-quant").val());
    var goombaTotal = goombaQuant * goombaPrice;
    console.log(goombaTotal)
    $("#goomba-total").html(goombaTotal)
})

$("#bomb-quant").keyup(function () {
    var bombQuant = parseInt($("#bomb-quant").val());
    var bombTotal = bombQuant * bombPrice;
    $("#bomb-total").html(bombTotal);
})

$("#cheep-quant").keyup(function () {
    var cheepQuant = parseInt($("#cheep-quant").val());
    var cheepTotal = cheepQuant * cheepPrice;
    console.log(cheepTotal)
    $("#cheep-total").html(cheepTotal);
})

$("#buttonGrand").click(function () {
    var goombaQuant = parseInt($("#goomb-quant").val());
    var goombaTotal = goombaQuant * goombaPrice;
//    console.log(goombaTotal);
    var bombQuant = parseInt($("#bomb-quant").val());
    var bombTotal = bombQuant * bombPrice;
//    console.log(bombTotal);
    var cheepQuant = parseInt($("#cheep-quant").val());
    var cheepTotal = cheepQuant * cheepPrice;
//    console.log(cheepTotal);
    var grandTotal = goombaTotal + bombTotal + cheepTotal;
    
    parseInt($("#grandTotal").html(grandTotal))
});
