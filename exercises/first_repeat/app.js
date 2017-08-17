var nonRepeat = function(str) {
    for (let i = 0; i < str.length-1; i++) {
        if (str[0] !== str[1]) {
            return str[0];
        } else if (str[i] !== str[i+1]) {
            return str[i+1];
        }
    }
    throw "contains all repeats"
}

module.exports = nonRepeat;