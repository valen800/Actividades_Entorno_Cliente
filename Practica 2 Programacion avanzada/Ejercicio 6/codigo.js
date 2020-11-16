function showDate() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();

  if (hour > 6 && hour < 12) {
    document.write(
      "Buenos dias, son las " +
        addZero(hour) +
        ":" +
        addZero(minutes) +
        " horas"
    );
  } else if (hour > 12 && hour < 19) {
    document.write(
      "Buenas tardes, son las " +
        addZero(hour) +
        ":" +
        addZero(minutes) +
        " horas"
    );
  } else if (hour > 19 && hour < 24) {
    document.write(
      "Buenas noches, son las " +
        addZero(hour) +
        ":" +
        addZero(minutes) +
        " horas"
    );
  }
}

function addZero(m) {
  if (m < 10) {
    return String("0" + m);
  } else {
    return m;
  }
}
