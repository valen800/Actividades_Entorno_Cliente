window.onload = function() {
    var link = document.getElementById("link");

    link.addEventListener("click", event => {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    })
    


}

//https://www.neoguias.com/diferencia-event-stoppropagation-event-preventdefault/