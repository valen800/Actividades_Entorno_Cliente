var cadena = prompt("Introduce una cadena: ")

var cadenaMinus = cadena.toLowerCase()
var cadenaMayus = cadena.toUpperCase()

var cadenaArray = cadena.split(" ")
var cadenaAlRevesArray = cadena.split(" ").reverse()

var first = true
for (i in cadenaArray) {
    if (first == true) {
        var cadenaSaltos = "\n" + cadenaArray[i]
        var cadenaSaltosAlReves = "\n" + cadenaAlRevesArray[i]
        first = false
    } else {
        var cadenaSaltos = cadenaSaltos + "\n" + cadenaArray[i]
        var cadenaSaltosAlReves = cadenaSaltosAlReves + "\n" + cadenaAlRevesArray[i]
    }
}

alert(
    " \n La longitud de la cadena es: " + cadena.length + 
    " \n Cadena en Minusculas: " + cadenaMinus +
    " \n Cadena en Mayusculas: " + cadenaMayus + "\n" +
    " \n Cadena Normal: \n" + cadenaSaltos + "\n" +
    " \n Cadena al reves: \n" + cadenaSaltosAlReves)