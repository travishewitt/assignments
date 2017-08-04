var readline = require("readline-sync");
var keyFound = false;
console.log("You wake up. Your head is pounding. You wipe the sweat off your brow, and notice blood. You wonder where the hell you are, and what the hell happened. You rock from side to side, hoping to alleviate the pain, but the rusty creaks of the bed make the headache worse. You fall off the bed and shield your eyes from the single blinding light overhead, and look at your options. There's a door ten feet in front of you, and a hole in the wall, two feet to the left of your face, and some dusty books, and moldy clothes under the bed. What do you do?")
var choices = ['Open the door', 'Look under the bed', 'Explore the hole in the wall'], index = readline.keyInSelect(choices, 'What do you do?');
    if (index === 0 && keyFound === false) {
        console.log("You get up, and stumble to the big, rusty, steel door. It doesn't budge. It's locked. But you see a key hole.")
        var choices = ['Look under the bed', 'Explore the hole in the wall'], index = readline.keyInSelect(choices, 'What do you do?');
            if (index === 0) {
                console.log("You sift through the mildewed clothes, and dusty anatomy books, and hear some jingling... You found the key! Hurry, run to the door, and open it!");
                keyFound = true;
                var choices = ['Open the door!', 'Stay here'], index = readline.keyInSelect(choices, 'What do you do?');
                    if (index === 0 && keyFound) {
                        console.log("You turn the key, and kick the door open. Natural sunlight floods the room, and you walk out. Hmm... what's next? Find out in chapter 2.")
                    } else {
                        console.log("You are too scared of the unknown. What if my captor is waiting for me out there? What if I'm just going to get tortured? And you live out what little life you have left on the rusty bed, having your bones buzzed by the growl of the old light, and die of starvation.")
                    }
                
            } else if (index === 1) {
                console.log("You think to yourself 'I've got nothing to lose. I'm sure something that will aid my escape is at the back of that hole.' You bury your hand in there, and feel around. You dig deeper, and a hand grabs you! OH NO! And it pulls with all its force, and rips your arm off. WHAT?!?!?! You die shortly after of extreme blood loss.")
            }
    } else if (index === 1) {
        console.log("You sift through the mildewed clothes, and dusty anatomy books, and hear some jingling... You found the key! Hurry, run to the door, and open it!");
                keyFound = true;
                var choices = ['Open the door!', 'Stay here'], index = readline.keyInSelect(choices, 'What do you do?');
                    if (index === 0 && keyFound) {
                        console.log("You turn the key, and kick the door open. Natural sunlight floods the room, and you walk out. Hmm... what's next? Find out in chapter 2.")
                    } else {
                        console.log("You are too scared of the unknown. What if my captor is waiting for me out there? What if I'm just going to get tortured? And you live out what little life you have left on the rusty bed, having your bones buzzed by the growl of the old light, and die of starvation.")
                    }
    } else if (index === 2) {
         console.log("You think to yourself 'I've got nothing to lose. I'm sure something that will aid my escape is at the back of that hole.' You bury your hand in there, and feel around. You dig deeper, and a hand grabs you! OH NO! And it pulls with all its force, and rips your arm off. WHAT?!?!?! You die shortly after of extreme blood loss.")
    } else {
        console.log("Unfortunately, you chose to do nothing, which caused your brain to explode. Doing nothing will get you nowhere in life. And in this case, it made your brain go everywhere, and made you go dead.")
    }