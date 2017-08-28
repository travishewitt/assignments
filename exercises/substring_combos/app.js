let comboString = function(str) {
    let collection = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = str.length; j > i; j--) {
            collection.push(str.substring(i, j));
        }
    }
    return collection
}


module.exports = comboString;