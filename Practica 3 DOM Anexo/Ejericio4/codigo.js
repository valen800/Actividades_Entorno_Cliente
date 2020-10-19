function getLinks() {
    var arrayBody = document.getElementsByTagName("p");
    var cc = 0;
    for (let i = 0; i < arrayBody.length; i++) {
        var arrayP = arrayBody[i].getElementsByTagName("a")
        cc += arrayP.length
    }
    alert("Numero de enlaces: " + cc)
}

function getReference() {
    var arrayBody = document.getElementsByTagName("p");
    var strLinks = "";
    for (let i = 0; i < arrayBody.length; i++) {
        var arrayP = arrayBody[i].getElementsByTagName("a")
        for (let j = 0; j < arrayP.length; j++) {
            strLinks += arrayP[j].text+ ": " + arrayP[j] + "<br>";
        }
    }
    document.write(strLinks)
}

function getReferenceByP() {
    var arrayBody = document.getElementsByTagName("p");
    var strLinks = "";
    for (let i = 0; i < arrayBody.length; i++) {
        var arrayP = arrayBody[i].getElementsByTagName("a")
        strLinks += "<br>" + "Parrafo " + (i + 1) + ":<br><br>";
        for (let j = 0; j < arrayP.length; j++) {
            strLinks += arrayP[j].text+ ": " + arrayP[j] + "<br>";
        }
    }
    document.write(strLinks)
}

function ChangeColorParagrath(color) {
    var arrayBody = document.getElementsByTagName("p");
    for (let i = 0; i < arrayBody.length; i++) {
        arrayBody[i].style.backgroundColor = color;
    }
}