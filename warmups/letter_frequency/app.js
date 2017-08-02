function frequency(str) {
    var obj = {};
    for (var i = 0; i < str.length; i++) 
        obj[str[i]] = obj[str[i]] + 1 || 1
        return obj
    }

frequency("hello")