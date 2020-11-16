function validateForm() {
    var n = document.forms["formNumber"]["inputNumber"].value;

    randomNumber(n)
}

function randomNumber(n) {
    var r = Math.floor(Math.random() * 10) + 1;

    if (r == n) {
        alert("Has acertado el numero.")
    } else {
        alert("No has acertado el numero: " + r + ".")
    }
}