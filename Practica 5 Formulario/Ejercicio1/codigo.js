window.onload = function() {
    document.getElementById("iPhoto").addEventListener("change", function() {
        showImage();
    })

    document.getElementById("hobby").addEventListener("change", function() {
        showDataHobbies();
    })

    document.getElementById("buttonSubmit").addEventListener("click" , event => {
        checkDni(event);
        checkPhone(event);
    })
}

function checkNumber(event) {
    if(event.charCode >= 48 && event.charCode <= 57) {
        return true;
    }
    return false;
}

function checkPhone(event) {
    var IPhone = document.getElementById("IPhone");
    if (IPhone.value.length > 9) {
        if (event.preventDefault) {
            IPhone.style.borderColor = "#FF0000";
            alert("Obligatio telefono 9 números")
            event.preventDefault();
        } else {
            IPhone.style.borderColor = "#FF0000";
            alert("Obligatio telefono 9 números")
            event.returnValue = false;
        }
    }
}

function checkDni(event) {
    var IDni = document.getElementById("Idni");
    if (IDni.value == "") {
        if (event.preventDefault) {
            IDni.style.borderColor = "#FF0000";
            alert("Campo DNI obligatorio")
            event.preventDefault();
        } else {
            IDni.style.borderColor = "#FF0000";
            alert("Campo DNI obligatorio")
            event.returnValue = false;
        }
    }
}

function showDataHobbies() {
    var hobbyObjt = document.getElementById("hobby");

    alert(
        "La longitud de la lista es " + hobbyObjt.length + "\n" + 
        "El índice seleccionado es el " + hobbyObjt.selectedIndex + "\n" +
        "El valor del índice seleccionado es lectura " + hobbyObjt.value
    )
}

function showImage() {
    var preview = document.getElementById("preview");
    var file = document.getElementById("iPhoto").files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        preview.src = reader.result;
    }

    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}