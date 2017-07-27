var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

var sing = function (array) {
    var sungLyrics = array.join(" ");
    console.log(sungLyrics);
}

sing()

var backwardsSing = function (array) {
    var demonSong = lyrics.reverse().join(" ");
    console.log(demonSong);
}

backwardsSing()

var everyOtherLyric = function () {
    for (var i = 0; i < lyrics.length; i+=2) {
        console.log(lyrics[i]);
        }
}

everyOtherLyric()

function swap(input, index_A, index_B) {
    var temp = input[index_A];
 
    input[index_A] = input[index_B];
    input[index_B] = temp;
}

var swapEveryOtherLyric = function (lyrics) {
    for (var i = 0; i < lyrics.length; i += 2) {
        swap(lyrics, i, i+1)
    }
    console.log(lyrics)
}

function add(a,b){
    return a + b;
}

console.log(add(1,2))