function myfunction() {
    var parrafo = document.getElementById("parrafo");
    //parrafo.style.fontWeight;
    var color = getStyle(parrafo, 'color');
    alert(color)
}

function myfunction2() {
    var parrafo = document.getElementById("parrafo");
    //parrafo.style.fontWeight;
    parrafo.style.margin = "20px"
    var getBackColor = document.defaultView.getComputedStyle(parrafo,'').getPropertyValue('color')
    alert(getBackColor)
}

function getStyle(elemento, propiedadCss) {
    var valor = "";
    if (document.defaultView && document.defaultView.getComputedStyle) {
        valor = document.defaultView.getComputedStyle(elemento,
            '').getPropertyValue(propiedadCss);

    } else if(elemento.currentStyle) {
        propiedadCss = propiedadCss.replace(/\-(\w)/g, function(strMatch, p1) {
            return p1.toUpperCase();
        });    
        valor = elemento.currentStyle[propiedadCss];
    }
    return valor;
}