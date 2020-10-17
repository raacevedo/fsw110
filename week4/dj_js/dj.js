//Blue when the mouse hovers over the square
document.getElementById("box").addEventListener("mouseover", colorBlue);
function colorBlue() {
    document.getElementById("box").style.backgroundColor = "blue"
}

// Red when the mouse button is held down over the square
document.getElementById("box").addEventListener("mousedown", colorRed);
function colorRed() {
    document.getElementById("box").style.backgroundColor = "red"
}

// Yellow when the mouse button is let go over the square
document.getElementById("box").addEventListener("mouseup", colorYellow);
function colorYellow() {
    document.getElementById("box").style.backgroundColor = "yellow"
}

// Green when the mouse is double clicked in the square
document.getElementById("box").addEventListener("dblclick", colorGreen);
function colorGreen() {
    document.getElementById("box").style.backgroundColor = "green"
}

// Orange when the mouse scroll is used somewhere in the window (not just over the square).
document.body.addEventListener("wheel", colorOrange);
function colorOrange() {
    document.getElementById("box").style.backgroundColor = "orange"
}

document.addEventListener("keydown", pressKey);
function pressKey(event) {
    if (event.which === 66){
    document.getElementById("box").style.backgroundColor = "blue"
}else if (event.which === 82){
    document.getElementById("box").style.backgroundColor = "red"
}else if (event.which === 89){
    document.getElementById("box").style.backgroundColor = "yellow"
}else if (event.which === 71){
    document.getElementById("box").style.backgroundColor = "green"
}else if (event.which === 79){
    document.getElementById("box").style.backgroundColor = "orange"
}}
