window.onload = function() {
    var parrafo = document.getElementsByTagName("p")[0];
    var radioGroup = document.getElementsByName("colors");

    checkRadioGroup(radioGroup, parrafo);

    for (let i = 0; i < radioGroup.length; i++) {
        radioGroup[i].addEventListener("change", function() {
            checkRadioGroup(radioGroup, parrafo);
        });
    }

}

function checkRadioGroup(radioGroup, parrafo) {
    for (let i = 0; i < radioGroup.length; i++) {
        if (radioGroup[i].checked) {
            changeColor(radioGroup[i].value, parrafo)
        }
    }
}

function changeColor(color, parrafo) {
    parrafo.style.backgroundColor = color;
}