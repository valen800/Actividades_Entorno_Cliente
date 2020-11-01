window.onload = function() {
    checkInputs();
}

function checkInputs(event, form) {
    if (form.elements.namedItem("Iname").value == "" 
    || form.elements.namedItem("IFirstLastname").value == "" 
    || form.elements.namedItem("ISecondLastname").value == "") {
        alert("Ingrese los datos requeridos");
        if (event.preventDefault) {
            event.preventDefault(); //Forma estandar
        } else{
            event.returnValue = false; // Forma de IE evitar el submit
        }
    }
}