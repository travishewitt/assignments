let camelCase = function (str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " " || str[i] === "-" || str[i] === "_") {
            let char = str[i + 1].toUpperCase();
            output += char;
            i++;
        } else {
            output += str[i]
        }
    }
    return output;
}




module.exports = camelCase;
