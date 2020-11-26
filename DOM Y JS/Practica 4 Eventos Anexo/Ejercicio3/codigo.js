window.onload = function() {
    var div = document.getElementById("div");
    var button = document.getElementById("button");

    div.addEventListener("click", event => {
        alert('x: '.concat(event.clientX - div.offsetLeft, 
            '\ny: ', event.clientY - div.offsetTop));
    });

    button.addEventListener("click", event => {
        with(button.parentNode.style){
            height = Math.round(Math.random() * screen.height) + 'px';
            width = Math.round(Math.random() * screen.width) + 'px';
        }
        event.stopPropagation();
    });
}