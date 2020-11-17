window.onload = function() {
  var radioGroup = document.getElementsByName("hobby");
  var btnSubmit = document.getElementById("btnSubmit");

  for (let i = 0; i < radioGroup.length; i++) {
    radioGroup[i].addEventListener("change", function() {
      checkMusic(radioGroup);
    })
  }

  btnSubmit.addEventListener("click", function() {
    var inputFecha = document.getElementById("fechaID");
    var inputMusico = document.getElementById("musicoID");
    var inputAlbum = document.getElementById("albumID");
    var lastCaract = inputFecha.value.substr(inputFecha.value.length - 4);

    if (checkDate()) {
      if (event.preventDefault) {
        alert("Formato de fecha no valido")
        inputFecha.focus();
        event.preventDefault();
      } else {
        alert("Formato de fecha no valido")
        inputFecha.focus();
        event.returnValue = false;
      }
    } else {
      alert("El músico " + inputMusico.value + " compuso su album " + inputAlbum.value + " en el año " + lastCaract + ". Tuvo un gran exito")
    }
  })
}

function checkMusic(radioGroup) {
  for (let i = 0; i < radioGroup.length; i++) {
    if (radioGroup[i].checked) {
      if (radioGroup[i].value == "musica") {
        createCheckBoxMusic();
      } else {
        alert(radioGroup[i].value)
      }
    }
  }
}

function createCheckBoxMusic() {
  var form = document.getElementById("formID");

  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.value = "Seleccion años 80"

  var label = document.createElement("LABEL"); 
  var textNode = document.createTextNode("Seleccion musica años 80");
  label.setAttribute("for", "musicaSeleccion")
  label.appendChild(textNode);

  checkbox.addEventListener('change', function() {
    showMessafeCheckBox(checkbox);
    createFields();
  })

  form.appendChild(checkbox);
  form.appendChild(label);
  form.appendChild(document.createElement("BR"));
}

function createFields() {
  createFieldMusic()
  createFieldAlbum()
  createFieldFecha()
}

function createFieldMusic() {
  var form = document.getElementById("formID");

  var labelMusico = document.createElement("LABEL"); 
  var textNodeMusico = document.createTextNode("MUSICO");
  labelMusico.setAttribute("for", "MUSICO")
  labelMusico.appendChild(textNodeMusico);

  var inputMusico = document.createElement("INPUT");
  inputMusico.setAttribute("type", "text");
  inputMusico.setAttribute("id", "musicoID");

  form.appendChild(labelMusico);
  form.appendChild(inputMusico);
  form.appendChild(document.createElement("BR"));
}

function createFieldAlbum() {
  var labelAlbum = document.createElement("LABEL"); 
  var textNodeAlbum = document.createTextNode("ALBUM");
  labelAlbum.setAttribute("for", "ALBUM")
  labelAlbum.appendChild(textNodeAlbum);

  var inputAlbum = document.createElement("INPUT");
  inputAlbum.setAttribute("type", "text");
  inputAlbum.setAttribute("id", "albumID");

  form.appendChild(labelAlbum);
  form.appendChild(inputAlbum);
  form.appendChild(document.createElement("BR"));
}

function createFieldFecha() {
  var labelFecha = document.createElement("LABEL"); 
  var textNodeFecha = document.createTextNode("FECHA");
  labelFecha.setAttribute("for", "FECHA")
  labelFecha.appendChild(textNodeFecha);

  var InputFecha = document.createElement("INPUT");
  InputFecha.setAttribute("type", "text");
  InputFecha.setAttribute("id", "fechaID");

  form.appendChild(labelFecha);
  form.appendChild(InputFecha);
  form.appendChild(document.createElement("BR"));
}

function checkDate() {
  var inputFecha = document.getElementById("fechaID");

  if (!(/^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/.test(inputFecha.value))) { // Expresion regular para comprobar si es mas de 9 numeros
    return true;
  }
  return false;
}

function showMessafeCheckBox(checkbox) {
  if (checkbox.checked) {
    alert("Has hecho una buena eleccion")
  } else {
    alert("Has deseleccionado")
  }
}