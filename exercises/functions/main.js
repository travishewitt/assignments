function sum(a, b) {
    return a + b;
}

var largest = function (a, b, c) {
    //    if (a > b && a > c) {
    //        return a;
    //    } else if (b > a && b > c) {
    //        return b;
    //    } else if (c > a && c > b) {
    //        return c;
    //    }
    return Math.max(a, b, c);
}

function evenOrOdd(int) {
    if (int % 2 === 0) {
        return "Your number, " + int + ", is even!";
    } else
        return "Your number, " + int + ", is odd!";
}

var conKitty = function (str) {
    if (str.length <= 20) {
        return str.concat(str)
    } else {
        return str.slice(0, str.length / 2)
    }
}

function fibonacci (n) {
    var sequence = [0, 1];
    var sum = 1;
    for (var i = 2; i < n; i++) {
        var nextNum = sequence[i-2] + sequence[i-1]
        sequence.push(nextNum);
        sum += nextNum;
    }
    console.log(sequence);
    return sum;
}