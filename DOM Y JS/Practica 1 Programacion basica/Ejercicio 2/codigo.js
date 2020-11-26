var array = [7, 8, 2, 9, 10]
suma = 0

//Calcula la suma de los numeros mayores de 8
for (i in array) {
    if (array[i] > 8) {
        suma = suma + array[i]
    }
}

alert("Suma de numeros mayores de 8: " + suma)