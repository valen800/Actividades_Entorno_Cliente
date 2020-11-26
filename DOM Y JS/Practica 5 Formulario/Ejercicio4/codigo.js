window.onload = function() {
    var checkboxList = document.getElementsByTagName("input");
    var parrafo = document.getElementsByTagName("p")[0];

    for (let i = 0; i < checkboxList.length; i++) {
        checkboxList[i].addEventListener("change", function() {
            if (checkboxList[i].checked) {
                changeFormat(parrafo, checkboxList[i].value);
            } else {
                resetFormat(parrafo, checkboxList[i].value)
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

function resetFormat(parrafo, checkboxValue) {
    if (checkboxValue == "bold") {
        parrafo.style.fontWeight = "normal";
    } else if (checkboxValue == "italic") {
        parrafo.style.fontStyle = "normal";
    }
}