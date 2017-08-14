//    class Chair {
//     constructor(name, material, comfortability){
//         this.name = name;
//         this.material = material;
//         this.comfortability = comfortability;
//     }
//     selfDestruct () {
//         console.log(`Greetings, welcome to your seat on ${this.name}. We will be self destructioning shortly. Please stay seated.`)
//     }
// }
//
//class Bed {
//    constructor(name, material, size) {
//        this.name = name;
//        this.material = material;
//        this.size = size;
//    }
//    explain() {
//        console.log(`Greetings. My name is ${this.name}. I am made of ${this.material}, and I come in ${this.size} size.`)
//    }
//    comfortability() {
//        console.log(`Greetings. I am comfortable. Because my name is ${this.name}.`)
//    }
//    selfDestruct() {
//        console.log(`I will shortly self destruct, because my size is ${this.size}, and cannot accommodate you.`)
//    }
//}




//let badChair = new Chair("blürgh", "plastic", false);
//let goodChair = new Chair("flimfloff", "leather", true);
//let mediumChair = new Chair("kürlyküe", "flesh of the innocent", true);
//
//let sexyBed = new Bed("büb", "redwood", "king");
//
//console.log(badChair);
//badChair.selfDestruct();
//console.log(goodChair);
//console.log(mediumChair);
//
//console.log(sexyBed)
//sexyBed.explain();
//sexyBed.comfortability();
//sexyBed.selfDestruct();
//

//class Animal {
//    constructor() {
//        this.multicellular = true;
//        this.heterotrophic = true;
//    }
//}
//
//class Feline extends Animal {
//    constructor() {
//        super();
//        this.nocturnal = true;
//        this.solitary = true;
//    }
//}
//
//class Canine extends Animal {
//    constructor() {
//        super();
//        this.hasSnout = true;
//        this.isSocial = true;
//    }
//    bark () {
//        console.log("Woof");
//    }
//}
//
//class Husky extends Canine {
//    constructor() {
//        super();
//        this.isFluffy = true;
//    }
//}
//
//let jericho = new Canine();
//console.log(jericho)
//
//let sophie = new Feline();
//console.log(sophie)
//
//let spot = new Husky();
//console.log(spot)
//spot.bark();


var groceryList = ["milk", "eggs", "cheese"];
var groceryList2 = ["fruit", "veggies", "pasta"];

var completeList = [...groceryList, ...groceryList2];
console.log(completeList)

let query = {
    type: "corduroy"
}

let query2 = {
    color: "red"
}

let query3 = {
    size: 33
}

console.log(Object.assign({}, query, query2, query3))
