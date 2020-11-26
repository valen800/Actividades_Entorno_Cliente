window.onload = function() {
    var div = document.getElementById("texto");
    div.onmouseover = onMouseOver
    div.onmouseout = onMouseOut
}

function onMouseOver() {
    document.getElementById("texto").style.fontSize = "16pt";
}

function onMouseOut() {
    document.getElementById("texto").style.fontSize = "12pt";
}