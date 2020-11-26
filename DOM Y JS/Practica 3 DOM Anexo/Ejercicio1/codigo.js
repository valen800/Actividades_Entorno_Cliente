function validateForm() {
    var dni = document.forms["formDNI"]["inputDNI"].value;

    if (dni == "") {
        alert("El campo DNI está vacio.")
        return false;
    } else if(dni.length > 9) { 
        alert("El dni no puede ser mayor que 9")
        return false;
    } else {
        alert("Has rellenado el campo DNI: " + dni)
        return true;
    }
}