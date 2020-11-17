window.onload = function() {
    var InputName = document.getElementById("Iname");
    setAutoFocus(InputName);

    document.getElementById("Tobservaciones").addEventListener("keypress", function() {
        limita(150, this)
    })

    document.getElementById("IPhone").addEventListener("keypress", event => {
        checkNumber(event);
    })

    document.getElementById("IPhoto").addEventListener("change", function() {
        showImage(this);
    })

    document.getElementById("Shobby").addEventListener("change", function() {
        showDataHobbies(this);
    })

    document.getElementById("buttonSubmit").addEventListener("click" , event => {
        checkDni(event);
        checkLenghtAndFormatPhone(event);
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

function checkPhoneNumberIrregularExpresions(phoneNumber) { //Check format of phone number.
    
    if (!(/^\d{9}$/.test(phoneNumber))) { // Expresion regular para comprobar si es mas de 9 numeros
        return true;
    }

    return false;
}

function checkLenghtAndFormatPhone(event) {
    var IPhone = document.getElementById("IPhone");

    if (checkPhoneNumberIrregularExpresions(IPhone.value) /* IPhone.value.length > 9 || IPhone.value.length < 9 ||  */) {
        if (event.preventDefault) {
            IPhone.style.borderColor = "#FF0000";
            alert("Número demasiado largo o con mal formato")
            event.preventDefault();
        } else {
            IPhone.style.borderColor = "#FF0000";
            alert("Número demasiado largo o con mal formato")
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

function showDataHobbies(element) {

    alert(
        "La longitud de la lista es " + element.length + "\n" + 
        "El índice seleccionado es el " + element.selectedIndex + "\n" +
        "El valor del índice seleccionado es lectura " + element.value
    )
}

function showImage(element) {

    var file = element.files[0];
    var reader = new FileReader();
    var preview = document.getElementById("preview"); // img que se cargará.

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

function limita(maximoCaracteres, elemento) {

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
    document.getElementById("Tobservaciones").maxLength = "150"
}

function setAutoFocus(element) {
    element.focus();
}