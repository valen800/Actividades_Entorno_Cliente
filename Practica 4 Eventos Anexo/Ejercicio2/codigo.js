var link = document.getElementById("link");

/* link.addEventListener("click", function(event) {
    event.preventDefault()
}) */

window.addEventListener("beforeunload", function (e) {
    var confirmationMessage = "Página cancelada";

    e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
    return confirmationMessage;
});