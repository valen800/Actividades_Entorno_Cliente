window.onload = function() {
    var parrafo = document.getElementsByTagName("p")[0];
    var selectValue = document.getElementById("select");

    selectValue.addEventListener("change", function() {
        changeColor(selectValue.value, parrafo)
    })
}

function changeColor(color, parrafo) {
    parrafo.style.backgroundColor = color;
}