var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 

vegetables.pop();
cosole.log(vegetables);

fruit.shift();
console.log(fruit);

fruit.indexOf("orange");

var indexOfOrange = fruit.indexOf("orange");
console.log(indexOfOrange);

fruit.push(indexOfOrange);
console.log(fruit);

console.log(vegetables.length);
var veggieLength = vegetables.length;
vegetables.push(veggieLength);
console.log(vegetables);

var food = fruit.concat(vegetables);
console.log(food);

food.splice(4, 2);
console.log(food);

food.reverse();
console.log(food)

food.join(",");
console.log(food);