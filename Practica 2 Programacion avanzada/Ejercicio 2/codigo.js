var introducirMes = prompt("Introduce un mes: ");
var introducirMesLower = introducirMes.toLowerCase();

mostrarEstaciones(introducirMesLower);

function mostrarEstaciones(mes) {
  switch (mes) {
    case "diciembre":
    case "enero":
    case "febrero":
      alert("Estamos en invierno");
      break;
    case "marzo":
    case "abril":
    case "mayo":
      alert("Estamos en Primavera");
      break;
    case "junio":
    case "julio":
    case "agosto":
      alert("Estamos en Verano");
      break;
    case "septiembre":
    case "octubre":
    case "noviembre":
      alert("Estamos en Otoño");
      break;
    default:
      alert("Este mes no existe");
      break;
  }
}
