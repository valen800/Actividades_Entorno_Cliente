var numero = prompt("Introduce un numero")
var numeroInt = parseInt(numero)

resultado = numeroInt % 2

if (resultado == 0) {
    alert("Es par")
} else if (resultado == 1) {
    alert("Es impar")
}