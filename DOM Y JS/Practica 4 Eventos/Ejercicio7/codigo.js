window.onload = function() {
    alertReloj()
    setInterval(showWatch, 1000)

    window.addEventListener("beforeunload", function (e) {
        var confirmationMessage = "Página cancelada";

        e.returnValue = confirmationMessage;     // Gecko, Trident, Chrome 34+
        return confirmationMessage;
    });
}

function showWatch() {
    var fecha = new Date();
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    if(horas < 10) { horas = '0' + horas; }
    if(minutos < 10) { minutos = '0' + minutos; }
    if(segundos < 10) { segundos = '0' + segundos; }

    document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;

}

function alertReloj() {
    alert("Página que contiene un reloj digital")
}

function alertPaginaCancelada() {
    alert("Página Cancelada")
}