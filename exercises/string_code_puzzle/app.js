function puzzle(str) {
    var temp = "";
    var puzzled = []
    for (var i = 0; i < str.length; i++) {
       temp += str[i];
       puzzled.push(temp)
       
    }
   return puzzled.join("");
}

console.log(puzzle("Code"))
