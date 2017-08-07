//var health = 3 hearts
//can get potions
//consider a playOneRound function (home base), and do a while loop, checking about conditions
//for loop to display inventory,  and   to check if potion.

var readline = require("readline-sync");
var limbs = 0;
var inventory = [];
var yourHealth = 3;
var enemyHealth = 1;
var steps = 0;
var result;
var isAlive = true;
var hasWon = false;
var hasPotion = false;

//make a drink the potion function
//make pure functions so that they alter stuff within their scopes


function vitals() {
    console.log("Here are your vitals: Health: " + yourHealth + " Limbs: " + limbs + " Steps: " + steps);
}

function action() {
    var choices = ['Attack!', 'Run!'],
        index = readline.keyInSelect(choices, 'What do you do?');
    if (index === 0) {
        attack();
    } else {
        flee();
    }
}

function homeBase() {
    if (yourHealth <= 0) {
        isAlive = false;
        console.log("You have disintegrated.")
    }
    if (limbs > 3 && steps > 9) {
        hasWon = true;
        console.log("As you take a final step, and assemble all of your limbs, a blinding light bursts out of your eye-holes and turns everything around you into dust. 'Arghglghalghlal!' Your ancestors are proud, and you skip around with your " + limbs + " limbs, and play with the kittens and flowers. Everything is beautiful and rainbows and unicorns and flowers and kittens rain from the sky, and you live happily ever after.")
    }
    if (isAlive === true && hasWon === false) {
        var choices = ['Take a step!', 'Check your inventory!', 'Self-disintegrate, because this game is boring.'],
            index = readline.keyInSelect(choices, 'What do you do?');
        if (index === 0) {
            move();
        } else if (index === 1) {
            console.log("Here's your inventory: " + inventory);
            for (var i = 0; i < inventory.length; i++) {
                if (inventory[i] === "Potion") {
                    console.log("Oh look! A potion! Will you use it?");
                    var choices = ['Drink it!', 'Save it!', 'Self-disintegrate, because this game is boring.'],
                        index = readline.keyInSelect(choices, 'What do you do?');
                }
            }
            if (index === 0) {
                console.log("You drank a potion! Enjoy some health.");
                yourHealth++;
                inventory.pop();
                vitals();
            }
            homeBase();
        } else {
            die();
        }
    }
}

function move() {
    steps++;
    rollTheDice();
    if (result < 4) {
        console.log("You stepped on a monster of nondescript size and strength!!");
        action();
    } else if (result === 6) {
        console.log("Oh look! You found a limb on the ground! Better attach it to your body...");
        limbs++;
        vitals();
        homeBase();
    } else {
        console.log("Oh no! A kitten was hungry, and ate a piece off of you.");
        yourHealth--;
        vitals();
        homeBase();
    }
}

function die() {
    health = 0;
    console.log("You disintegrate. Game over.")
    return;
}


function rollTheDice() {
    result = Math.floor(Math.random() * 6) + 1
}

function attack() {
    console.log("You scream the battle-cry of your ancestors: 'Arghglahghglrghlrghl!!!!!'");
    rollTheDice();
    if (result <= 2) {
        console.log("You hit your face onto something hard attached to the enemy. That's a new dent in your face, but a nice dent in the enemy's soul. Lose one life. You kill the enemy, and scavenge a limb.");
        yourHealth--;
        limbs++;
        vitals();
        homeBase();
    } else if (result > 2 && result < 6) {
        console.log("Your battle-cry worked! The monster was distracted by the hideous noise that came out of your jaw-less gullet, and you get the first strike. You kill the enemy, and find a potion! Search your inventory! You may drink your potion from the inventory to restore one health!");
        inventory.push("Potion");
        vitals();
        homeBase();
    } else {
        console.log("Your battle-cry performance was a monstrosity. Your ancestors are ashamed, and the monster feels bad for you. He backhands you for insulting your lineage, and then leaves. Thankfully, you trip over a spare limb.");
        yourHealth -= 3;
        limbs++;
        vitals();
        homeBase();
    }
}

function flee() {
    rollTheDice();
    console.log("You attempted to flee from nondescriptively big and powerful monster.")
    if (result < 5) {
        console.log("You got away, but the monster took a chunk of you for a souvenir to bring to its family. It thanks you, but you're in too much pain to say 'you're welcome' So you gurgle instead: 'Arghalghghgghlologhlghl.' Lose one limb.");
        limbs--;
        vitals();
        homeBase();
    } else {
        if (limbs === 0) {
            console.log("You slithered away. In your hypervigilance, you spot a potion. Ooo! Better grab it!");
            inventory.push("Potion");
            vitals();
            homeBase();
        } else {
            console.log("You wobbled away. In your hypervigilance, you spot a potion. Ooo! Better grab it!");
            inventory.push("Potion");
            vitals();
            homeBase();
        }
    }
}
 
console.log("You wake up, really confused. Where are your limbs? Where is your nose? No one knows. Take at least ten steps through this wasteland, and collect at least four of your limbs, (and possibly additional limbs, who knows? You might be some sort of limb hoarder, we won't judge you.) and you shall find salvation.")
homeBase();