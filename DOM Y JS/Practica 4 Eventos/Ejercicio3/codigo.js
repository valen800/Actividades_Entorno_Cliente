window.onload = function() {
    var div = document.getElementById("text");

    div.onmouseover = changeSize;
    div.onmouseout = changeSize;
}

function changeSize(event) {
    var localEvent = event || window.event;
    
    switch (localEvent.type) {
        case 'mouseover':
            mouseOver();
            break;
        case 'mouseout':
            mouseOut();
            break;
        default:
            break;
    }
}

function mouseOver() {
    document.getElementById("text").style.fontSize = "16pt";
}

function mouseOut() {
    document.getElementById("text").style.fontSize = "12pt";
}