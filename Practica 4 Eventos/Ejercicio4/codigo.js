window.onload = function() {
    var div = document.getElementById("text");
    div.addEventListener("mouseover", mouseOver)
    div.addEventListener("mouseout", mouseOut)
}

function mouseOver() {
    document.getElementById("text").style.fontSize = "16pt";
}

function mouseOut() {
    document.getElementById("text").style.fontSize = "12pt";
}