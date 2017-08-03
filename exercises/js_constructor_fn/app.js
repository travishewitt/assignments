function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.explain = function () {
        return "Your name is " + this.firstName + " " + this.lastName + " and your age is " + this.age + ".";
    }
}



document.getElementById("instantiate").addEventListener("click", function() {
    var userFirst = document.getElementById("input1").value;
    var userLast = document.getElementById("input2").value;
    var userAge = document.getElementById("input3").value;
    var user1 = new Person(userFirst, userLast, userAge);
    document.getElementById("obj").textContent = user1.explain();
})