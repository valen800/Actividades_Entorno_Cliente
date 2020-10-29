window.onload = function() {
    var inputText = document.getElementById("inputText");
    inputText.addEventListener("keypress", checkNumbers)

}

function showInformation(theEvent) {
    var localEvent = window.event || theEvent;
}