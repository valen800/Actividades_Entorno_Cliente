function addNewParagraph() {
  var div = document.getElementById("divisor");
  var p = document.createElement("p");
  p.innerHTML = "Parrafo añadido";
  div.appendChild(p);
}

function insertNewParagraph() {
  var firstParagraph = document.getElementsByTagName("p")[0];
  var p = document.createElement("p");
  p.innerHTML = "Parrafo insertado";
  insertAfter(firstParagraph, p);
}

function replaceParagraph() {
  var firstParagraph = document.getElementsByTagName("p")[0];
  if (firstParagraph.nextSibling) {
    firstParagraph.nextSibling.innerHTML = "Parrafo reemplazado";
  } else {
    alert("No se puede modificar");
  }
}

function deleteParagraph() {
  var div = document.getElementById("divisor");
  var firstParagraph = document.getElementsByTagName("p")[0];
  if (firstParagraph.nextSibling) {
    div.removeChild(firstParagraph.nextSibling);
  } else {
    alert("No se puede borrar");
  }
}

function cloneDiv() {
  var div = document.getElementById("divisor");
  var div_clon = div.cloneNode(true);
  document.body.appendChild(div_clon);
}

//e nodo tras el que se quiere insertar
//i nodo que se quiere insertar
function insertAfter(e, i) {
  if (e.nextSibling) {
    //si existe el siguiente nodo entra
    e.parentNode.insertBefore(i, e.nextSibling); //Pasa al siguiente nodo y lo inserta antes
  } else {
    e.parentNode.appendChild(i); //Se añade el nodo después de los hijos existentes
  }
}
