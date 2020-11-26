window.onload = function() {
    var Iname = document.getElementById("Iname");
    var IFirstLastname = document.getElementById("IFirstLastname");
    var ISecondLastname = document.getElementById("ISecondLastname");
    var buttonSubmit = document.getElementById("buttonSubmit");

    buttonSubmit.addEventListener("click", event => {
        if (Iname.value == "" || IFirstLastname.value == "" || ISecondLastname.value == "") {
            alert("Ingrese los datos requeridos");
            if (event.preventDefault) {
                event.preventDefault(); //Forma estandar
            } else {
                event.returnValue = false; // Forma de IE evitar el submit
            }
        } else {
            document.form.submit();
        }
    })
}