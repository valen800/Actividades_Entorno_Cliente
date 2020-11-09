window.onload = function() {
    /* var checkBoxBold = document.getElementById("checkBoxBold");
    var checkBoxCursive = document.getElementById("checkBoxCursive"); */
    var checkboxList = document.getElementsByTagName("input");
    var parrafo = document.getElementsByTagName("p")[0];

    for (let i = 0; i < checkboxList.length; i++) {
        checkboxList[i].addEventListener("change", function() {
            if (checkboxList[i].type = "checkbox" && checkboxList[i].checked) {
                changeFormat(parrafo, checkboxList[i].value);
            }
        });
        
    }
}

function changeFormat(parrafo, checkboxValue) {
    if (checkboxValue == "bold") {
        parrafo.style.fontWeight = "bold";
    } else if (checkboxValue == "italic") {
        parrafo.style.fontStyle = "italic";
    }
}