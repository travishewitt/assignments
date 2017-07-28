document.getElementById("addButton").addEventListener("click", function () {
    var addInput1 = document.getElementById("add-input1").value;
    var addInput2 = document.getElementById("add-input2").value;
    var sum = parseInt(addInput1) + parseInt(addInput2);
    document.getElementById("addOutput").innerHTML = sum;
//    document.getElementById("add-input1").value = "";
//    document.getElementById("add-input2").value = "";
})

document.getElementById("subButton").addEventListener("click", function () {
    var subInput1 = document.getElementById("sub-input1").value;
    var subInput2 = document.getElementById("sub-input2").value;
    var subtractOutput = parseInt(subInput1) - parseInt(subInput2);
    document.getElementById("subOutput").innerHTML = subtractOutput;
})

document.getElementById("multButton").addEventListener("click", function () {
    var multInput1 = document.getElementById("mult-input1").value;
    var multInput2 = document.getElementById("mult-input2").value;
    var multiplicationOutput = parseInt(multInput1) * parseInt(multInput2);
    document.getElementById("multOutput").innerHTML = multiplicationOutput;
})

document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("add-input1").value = "";
    document.getElementById("add-input2").value = "";
    document.getElementById("sub-input1").value = "";
    document.getElementById("sub-input2").value = "";
    document.getElementById("mult-input1").value = "";
    document.getElementById("mult-input2").value = "";
    document.getElementById("multOutput").innerHTML = "";
    document.getElementById("subOutput").innerHTML = "";
    document.getElementById("addOutput").innerHTML = "";
    
})