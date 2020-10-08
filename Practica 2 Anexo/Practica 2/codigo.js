function validateForm() {
    var dni = document.forms["formDNI"]["inputDNI"].value;

    if (dni == "") {
        alert("El campo DNI está vacio.")
    } else {
        alert("Has rellenado el campo DNI: " + dni)
    }
}