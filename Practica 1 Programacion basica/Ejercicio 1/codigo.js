var suma = 0
var mayoresCien = 0

//Suma los valores introducidos por teclado y suma la cantidad de numeros mayores que 100
for (var i=0; i < 5; i++) {
    var introducir = prompt("Por favor, introduce un numero: ")
    var introducirInt = parseInt(introducir)

    suma = suma + introducirInt

    if (introducirInt > 100) {
        mayoresCien = mayoresCien + 1
    }
}

//Muestra un alert con informacion
alert("Suma de los numeros: " + suma + " \n Numeros mayores que 100: " + mayoresCien)