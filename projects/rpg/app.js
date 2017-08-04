//readline sync, interacting with user from the terminal
//break these actions into functions, and call those functions when you need to


//what're the things i need to do
    //ask the player what they want to do
    //ask the player if they want to fight or flee
    //print inventory
    //chooses which random enemy appears (if the player is a beginner, choose a weak enemy)
    //adds something to inventory
        //all this stuff can be put into functions

//var health = 3 hearts
//can get potions
//
    

var readline = require("readline-sync")
var name = readline.question("What is thy name? ")
while (name === "") {
    var name = readline.question("No, really. What be thine name? ")
}


