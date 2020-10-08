var precio = prompt("Introduce el precio de un articulo: ")

var precioInt = parseInt(precio)
var ivaProducto = precioInt * 0.21
var precioConIVA = precioInt * 1.21

alert("\n Precio: " + precioInt.toFixed(2)
+ " \n IVA que se aplicara: " + ivaProducto.toFixed(2) 
+ "\n Precio con IVA: " + precioConIVA.toFixed(2))