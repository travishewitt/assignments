function formatMoney(amount) {
    var newAmount = "$" + amount.toFixed(2);
    return newAmount;
}


console.log(formatMoney(39))