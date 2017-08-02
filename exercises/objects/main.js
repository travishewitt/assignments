var tea = {
    type: "oolong", 
    flavor1: "earthy", 
    flavor2: "nutty", 
    caffeineLevel: "medium", 
    completeTaste: function(){
        return this.flavor1 + " and " + this.flavor2
    }
};

var bottleOfColdBrew = {
    type: "delicious", 
    amount: "not enough", 
    price: 4,
    drink: function() {
        return "Drink me!";
    }
}


var laptop = {
    color: "spaceGray", 
    name: "macBookPro",
    size: 15,
    battery: function() {
        for (var batteryLeft = 100; batteryLeft > 0; batteryLeft--) {
           if (batteryLeft > 0) {
             console.log("battery status: " + batteryLeft + "%");
        } else {
            return "computer is going to die";
        }
    }
}
}


var door = {
    isItOpen: true,
    color: "white",
    isItLocked: false,
    closeIt: function() {
        return "close the door"
    }
}

var cinnamonTea = {
    amountOfSachets: 30,
    flavor: "cinnamon",
    caffeineLevel: "medium", 
    caffeinated: function(amountOfSachets) {
        if (amountOfSachets <= 2) {
            return "you will be nice and invigorated";
        } else {
            return "you will shake, and die of overcaffeination, maybe";
        }
        }
}

var microphone = {
    name: "blue yeti",
    color: "gray",
    doIHaveOne: true,
    number: 4,
    identifier: function () {
        return "hello, my name is " + this.name + ", but i'm not actually blue, i'm " + this.color + "."
    }
}

var person = {
    name: "sarah", 
    friends: ["kimmy", "jimmy", "timmy"]
        };

//add a friend to the end of friends!

person.friends.push("Bob");

//remove Bob, because he's rude
//.pop() removes the last value of the array, it doesn't require an argument

//Assigning the .pop() method to a new variable, lastPerson becomes a string "Bob"
var lastPerson = person.friends.pop();
console.log(person.friends);
//["kimmy", "jimmy", "timmy"]
console.log(lastPerson);
//"Bob"


//Jimmy has changed his name to james. 

person.friends[1] = "James";
//that was easy!

//I hate timmy, now, so let's remove him.

person.friends.splice(2, 1)
//the first argument takes the index, and the second removes a certain amount of values after that index


person.friends.indexOf("Jimmy");
//that'll show the index of the value "jimmy". It only shows the first instance of "jimmy". It is useful for huge arrays.
