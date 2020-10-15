function addNewElement() {
  var ul = document.getElementById("listaelemen");
  var li = document.createElement("li");
  li.textContent = "Rinoceronte añadido";
  ul.appendChild(li);
}

function insertNewElement() {
  var liexist = document.getElementsByTagName("li")[2];
  var li = document.createElement("li");
  li.textContent = "Oso Polar insertado";
  insertAfter(liexist, li);
}

function replaceElement() {
  var liexist = document.getElementsByTagName("li")[2];
  if (liexist.nextSibling) {
    liexist.nextSibling.textContent = "Oso Polar reemplazado";
  } else {
    alert("No se puede modificar");
  }
}

function deleteElement() {
  var ul = document.getElementById("listaelemen");
  var liexist = document.getElementsByTagName("li")[2];
  if (liexist.nextSibling) {
    ul.removeChild(liexist.nextSibling);
  } else {
    alert("No se puede borrar");
  }
}

function cloneList() {
  var ul = document.getElementById("listaelemen");
  var div_clon = ul.cloneNode(true);
  document.body.appendChild(div_clon);
}

function createSubListDOMLion() {
  var lifather = document.getElementsByTagName("li")[0];

  var nestedUl = document.createElement("ul");
  var nestedLI = nestedUl.appendChild(document.createElement("li"));
  nestedLI.appendChild(document.createTextNode("SubLeonDOM"));

  lifather.appendChild(nestedUl);
}

function createSubListInnerHTMLLion() {
  var lifather = document.getElementsByTagName("li")[0];
  lifather.innerHTML += "<ul><li>SubLeonInnerHTML</li></ul>";
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
