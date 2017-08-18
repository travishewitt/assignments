function factor(int) {
    let counter = 0;
    for (let i = int; i > 0; i--) {
        if (int%i === 0) {
            counter++
        }
    }
    if (counter === 1) {
        return "prime"
    } else {
    return counter
    }
}

module.exports = factor