const djjs = document.getElementById("DJJS")

djjs.addEventListener("mouseover", function () {
    djjs.style.backgroundColor = 'blue';
})

document.addEventListener("keydown", function (event) {
    if (event.which === 66) {
        djjs.style.backgroundColor = 'blue';
    } else if (event.which === 89) {
        djjs.style.backgroundColor = 'yellow';
    } else if (event.which === 82) {
        djjs.style.backgroundColor = 'red';
    } else if (event.which === 71) {
        djjs.style.backgroundColor = 'green';
    } else if (event.which === 79) {
        djjs.style.backgroundColor = 'orange';
    }
})

djjs.addEventListener("dblclick", function () {
    djjs.style.backgroundColor = 'green';
})

djjs.addEventListener("mouseup", function () {
    djjs.style.backgroundColor = 'yellow';
})

document.addEventListener("wheel", function () {
    djjs.style.backgroundColor = 'orange';
})

djjs.addEventListener("mousedown", function () {
    djjs.style.backgroundColor = 'red';
})
