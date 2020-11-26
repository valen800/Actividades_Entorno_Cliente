window.onload = function() {
  var radioGroup = document.getElementsByName("hobby");

  for (let i = 0; i < radioGroup.length; i++) {
    radioGroup[i].addEventListener("change", function() {
      checkMusic(radioGroup);
    })
  }
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
  var checkbox = document.createElement("INPUT");
  checkbox.setAttribute("type", "checkbox");
  checkbox.value = "Seleccion años 80"

  var label = document.createElement("LABEL"); 
  var textNode = document.createTextNode("Seleccion musica años 80");
  label.setAttribute("for", "musicaSeleccion")
  label.appendChild(textNode);

  checkbox.addEventListener('change', function() {
    showMessafeCheckBox(checkbox);
  })

  document.body.appendChild(checkbox);
  document.body.appendChild(label);
}

function showMessafeCheckBox(checkbox) {
  if (checkbox.checked) {
    alert("Has hecho una buena eleccion")
  } else {
    alert("Has deseleccionado")
  }
}