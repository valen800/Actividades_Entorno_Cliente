function showDate() {
  var objToday = new Date();
  var weekday = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  var months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  dayOfWeekName = weekday[objToday.getDay()];
  monthName = months[objToday.getMonth()];
  dayOfMonth = objToday.getDate();
  year = objToday.getFullYear();

  var today =
    dayOfWeekName + ", " + dayOfMonth + " de " + monthName + " de " + year;

  document.write(today);
}
