window.onload = function() {
    //var link = document.getElementById("link");
    var div = document.getElementById("divLink");

    div.addEventListener("click", event => {
        event.stopPropagation();
    });
}

//https://www.neoguias.com/diferencia-event-stoppropagation-event-preventdefault/