var url = "https://api.vschool.io/travis/todo/";

var title = document.getElementById("title");
var description = document.getElementById("description");
var price = document.getElementById("price");
var image = document.getElementById("url")
var button = document.getElementById("button");
var todolist = document.getElementById("todolist")
let ourData;
var renderHTML = function(data) {
    var htmlString = "";
    
    for (var i = 0; i < ourData.length; i++) {
        htmlString += `<p> Title: ${ourData[i].title} </p> <p> Price: ${ourData[i].price} </p> <p> <img src="${ourData[i].imgUrl}" > </p>`
    }
    todolist.insertAdjacentHTML("beforeend", htmlString)
}




//var axios = require('axios');
//var url = "https://api.vschool.io/travis/todo/";
//
//var todo = {
//    title: "okay",
//    price: 0,
//    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4w-Z5LU1ygGjumAWepn5nBIZiuWysuaFyXOWsit4ZNqUr8PHh4w",
//    completed: true
//
//};

var getAll = function () {
        axios.get(url)
        .then(function (response) {
            ourData = response.data;
        renderHTML(ourData);
        })
        .catch(function (err) {
            console.log(err);
        });
};
getAll();

//wrap post function inside bigger function which has a constructor function. make a get function inside the post function's then portion



//
//var postOne = function(todo) {
//    axios.post(url, todo)
//        .then(function(response){
//            console.log(response.data);
//        })
//        .catch(function(err){
//            console.log(err);
//        });
//};
//
//var getOne = function(id) {
//    axios.get(url + id)
//        .then(function(response){
//            console.log(response.data);
//        })
//        .catch(function(err){
//            console.error(err);
//        });
//};
//
//var deleteOne = function(id) {
//    axios.delete(url + id)
//        .then(function(response){
//            console.log(response.data)
//        })
//        .catch(function(err){
//            console.error(err)
//        })
//};
//
//var editOne = function(id, todo) {
//    axios.put(url + id, todo)
//        .then(function(response){
//            console.log(response.data)
//        })
//        .catch(function(err){
//            console.error(err)
//        })
//};
//
//postOne(todo);


