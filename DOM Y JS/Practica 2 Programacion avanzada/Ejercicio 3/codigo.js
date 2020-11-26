alertConfirm();
document.write("<br/>" + "Tu navegador es " + checkNavigator());

function alertConfirm() {
  var mensaje;
  var option = confirm("Haz click en aceptar para continuar");

  if (option == true) {
    mensaje = "Continuamos...";
  } else {
    mensaje = "Has clickado Cancelar";
  }
  document.write(mensaje);
}

function checkNavigator() {
  var navegadorInfo = navigator.userAgent;

  var navegadores = [
    "Chrome",
    "Firefox",
    "Safari",
    "Opera",
    "Trident",
    "MSIE",
    "Edge",
  ];

  for (var i in navegadores) {
    if (navegadorInfo.indexOf(navegadores[i]) != -1) {
      return navegadores[i];
    }
  }
}
