let text = document.querySelector("#test");
let button = document.querySelector("#but");
let bloc = document.querySelector("#block");

button.onclick = function() {
    if (text.value >= 18) {
        bloc.style.backgroundColor = 'green'
        console.log(text.value);
    } else {
        bloc.style.backgroundColor = "red"
    }
}