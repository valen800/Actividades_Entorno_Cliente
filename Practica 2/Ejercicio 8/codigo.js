getData();

function getData() {
  document.write(
    "URL completa: " +
      location.href +
      "<br>" +
      "Pathname: " +
      location.pathname +
      "<br>" +
      "Protocolo: " +
      location.protocol +
      "<br>"
  );
}

function google() {
  location.assign("https://www.google.com/");
}
