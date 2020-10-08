var meses = [
    ["diciembre", "enero", "febrero"], 
    ["marzo","abril", "mayo"], 
    ["junio", "julio", "agosto"],
    ["septiembre", "octubre", "noviembre"]
]

var estaciones = ["Invierno" ,"Primavera", "Verano", "Otoño"]

var introducirMes = prompt("Introduce un mes: ")
var introducirMesLower = introducirMes.toLowerCase()

for (i in meses) {
    for (y in meses[i]) {
        if (meses[i][y] == introducirMesLower) {
            alert("Estamos en: " + estaciones[i])
        }
    }
}

