//var myName = "John Doe";
//console.log(myName);
//
//function movieCheck(age) {
//    try {
//        if (age < 0) {
//            throw "Error cannot be less than 0";
//        } else if (age <= 12) {
//            console.log("You can see PG movies");
//        } else if (age >= 13 && age < 18) {
//            console.log("You can see PG-13 movies");
//        } else if (age >= 18) {
//            console.log("You can see R rated movies");
//        }
//    } catch (err) {
//        console.log(err)
//    }
//}
//
//
//    movieCheck(-1);


var dog = "Jericho";
var splitDog = dog.split("");

var consoleDog = function(str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
}


var assert = function(actual, expected) {  
  if(actual != expected) {
    //Run if failed
    throw {type: "Fail", details: {actual: actual, expected: expected}};
  } else {
    //Run if successful
    console.log("Success", {type: "Test passed", details: {actual: actual, expected: expected}});
  }
};


//test wrapper
var describe = function(message, testFunc) {  
  try {
    testFunc();
  } catch(err) {
    console.error("Failure", err);
  }
};

describe("Test group", function() {  
  assert(true, true);
  assert("Some string", "fuck");
  assert(1, 1);
});

