//var button = document.getElementById("btn");
//var animalContainer = document.getElementById("animal-info");


//button.addEventListener("click", function () {
//    var ourRequest = new XMLHttpRequest();
//    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//    ourRequest.onload = function () {
//        var ourData = JSON.parse(ourRequest.responseText);
//        renderHTML(ourData);
//    };
//    ourRequest.send();
//})
//
//var renderHTML = function(data) {
//    var htmlString = "";
//   
//    for (var i = 0; i < data.length; i++) {
//        htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". </p>";
//    }
//    animalContainer.insertAdjacentHTML("beforeend", htmlString)
//}


/////////
var axios = require("axios");

var url = "https://api.vschool.io/ben/todo/"

var getAll = function(url){
    axios.get(url)
        .then(function(response){
        console.log(response.data);
    })
        .catch(function(err){
        console.error(err);
    })
}

var postOne = function(url, itemObj){
    axios.post(url, itemObj)
        .then(function(response){
        console.log(response.data)
    })
    .catch(function(err){
        console.error(err);
    })
}

var getOne = function(url, id){
    axios.get(url + id).then(function(response){
        console.log(response.data);
    })
    .catch(function(err){
        console.error(err);
    })
}

getOne(url, "5975981f2c425d27974fb381");
//delete one
//get one
//put one

