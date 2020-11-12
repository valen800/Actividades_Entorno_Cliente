window.onload = function() {
    var InputName = document.getElementById("name");
    setAutoFocus(InputName);

    document.getElementById("observaciones").addEventListener("keypress", function() {
        limita(150)
    })

    document.getElementById("IPhone").addEventListener("keypress", event => {
        checkNumber(event);
    })

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

    document.getElementById("buttonReset").addEventListener("click", function() {
        resetForm();
    })
}

function checkNumber(event) {
    if(event.charCode >= 48 && event.charCode <= 57) {
        return true;
    } else {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
}

function checkPhone(event) {
    var IPhone = document.getElementById("IPhone");
    if (IPhone.value.length > 9 || IPhone.value.length < 9) {
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

    var file = document.getElementById("iPhoto").files[0];
    var reader = new FileReader();
    var preview = document.getElementById("preview");

    if (isFileImage(file)) {
        reader.onloadend = function() {
            preview.src = reader.result;
        }
    
        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }   
    } else {
        alert("El fichero no es una imagen.")
    }
}

function limita(maximoCaracteres) {
    var elemento = document.getElementById("observaciones");
    if(elemento.value.length >= maximoCaracteres ) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    }
    else {
      return true;
    }
  }

function isFileImage(file) {
    return file && file['type'].split('/')[0] === 'image';
}

function resetForm() {
    document.getElementById("form").reset();
}

function setMaxLenghtTextArea() {
    document.getElementById("observaciones").maxLength = "150"
}

function setAutoFocus(element) {
    element.focus();
}