function antiCaps (str) {
    //split string into array
    //for loop and check if each letter is lowercase or uppercase
    //if lowercase => uppercase, if uppercase => lowercase
    var array = str.split("");
    for (var i = 0; i < array.length; i++) {
        if (array[i] === array[i].toUpperCase()) {
            array[i] = array[i].toLowerCase();
        } else {
            array[i] = array[i].toUpperCase();
        }
    }
    var finishedProduct = array.join("")
    return finishedProduct;
}


antiCaps("AbCdEfG")