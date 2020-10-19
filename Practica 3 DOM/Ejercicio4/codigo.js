function countLinks() {
    var nLinks = 0;
    arrayElements = document.body.childNodes;

    for (let i = 0; i < arrayElements.length; i++) {
        if (arrayElements[i].nodeName == "A") {
            nLinks += 1;
        }
    }
    alert("Número de Links: ",nLinks)
}

function countImg() {
    var nImg = 0;
    arrayElements = document.body.childNodes;

    for (let i = 0; i < arrayElements.length; i++) {
        if (arrayElements[i].nodeName == "IMG") {
            nImg += 1;
        }
    }
    alert("Número de imágenes: ",nImg)
}