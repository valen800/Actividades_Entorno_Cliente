function openWindow() {
  var newWindow;

  newWindow = window.open(
    "",
    "page2",
    "toolbar=yes,location=no,menubar=yes" + "width=500,height=300"
  );

  newWindow.document.write(
    "<HTML><HEAD><TITLE>" + "Sin Título</TITLE></HEAD>\n"
  );
  newWindow.document.write("<BODY><form>\n");
  newWindow.document.write(
    "<input type='button' " + "value='Cerrar' onClick='window.close();'>\n"
  );
  newWindow.document.write("</form>\n");
  newWindow.document.write("</BODY></HTML>\n");
}
