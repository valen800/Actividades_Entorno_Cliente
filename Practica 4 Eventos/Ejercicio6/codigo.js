window.onload = function() {
    createButtons()
    setAlertButtons()
}

function setAlertButtons() {
    var buttons = document.getElementsByTagName("button");

    for (let i = 0; i < buttons.length; i++) {
        document.getElementsByTagName("button")[i].addEventListener("click", showAlertButton)
    }
}

function createButtons() {
    var random = getRandom(1, 10)
    var body = document.getElementsByTagName("body")[0];

    for (let i = 0; i < random; i++) {
        var button = document.createElement("button");
        button.textContent = "Button " + i;
        body.appendChild(button);
    }
}

function getRandom(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

function showAlertButton(i) {
    alert("Has pulsado sobre un botón ")
}