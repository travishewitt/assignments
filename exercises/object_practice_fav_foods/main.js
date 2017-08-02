var sushi = {
     type: "Sushi",
     price: "$9/roll",
     calories: "375 kcal",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
var chicken = {
     type: "Chicken Breast",
     price: "$3.18",
     calories: "185 kcal",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
var donut = {
     type: "Donut",
     price: "$0.75",
     calories: "195 kcal",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
var iceCream = {
     type: "Ice Cream",
     price: "$4.99/pint",
     calories: "1045 kcal",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
var steak = {
     type: "Steak",
     price: "$18.99/lb",
     calories: "55 kcal/oz",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
var peanutButter = {
     type: "Peanut Butter",
     price: "$3.99",
     calories: "180 kcal/32 g",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
var espresso = {
     type: "Espresso",
     price: "$4.00",
     calories: "2 kcal/4 oz",
     explain: function () {
         console.log("Greetings. " + this.type + " runs about " + this.price + " and is typically around " + this.calories + ".");
     }
 }
 var favoriteFoods = [sushi, chicken, donut, iceCream, steak, peanutButter, espresso];

console.log(favoriteFoods[6].explain());
