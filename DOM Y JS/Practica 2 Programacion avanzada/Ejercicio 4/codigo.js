createWindow();

function createWindow() {
  if (checkNavigator() == "Trident" || checkNavigator() == "MSIE") {
    window.resizeTo(500, 500);
    document.write("Se ha redimensionado la ventana a 500x500");
  } else {
    document.write(
      "Operacion no permitida en este navegador, Navegador: " + checkNavigator()
    );
  }
}

function checkNavigator() {
  var navigatorInfo = navigator.userAgent;

  var navigators = [
    "Chrome",
    "Firefox",
    "Safari",
    "Opera",
    "Trident", //Internet Explorer
    "MSIE", //Internet Explorer
    "Edge",
  ];

  for (var i in navigators) {
    if (navigatorInfo.indexOf(navigators[i]) != -1) {
      return navigators[i];
    }
  }
}
