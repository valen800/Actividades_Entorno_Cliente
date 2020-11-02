window.onload = function() {
    var div = document.getElementById("text");

    if (div.addEventListener) {
      div.addEventListener("mouseover", mouseOver)
      div.addEventListener("mouseout", mouseOut)
    } else {
      if (div.attachEvent) {
        div.attachEvent("onmouseover", mouseOver)
        div.attachEvent("onmouseout", mouseOut)
        alert("Internet Explorer")
      }
    }
}

function mouseOver() {
    document.getElementById("text").style.fontSize = "16pt";
}

function mouseOut() {
    document.getElementById("text").style.fontSize = "12pt";
}

function checkNavigator() {
    var navigatorInfo = navigator.userAgent;
  
    var navigators = [
      "Chrome",
      "Firefox",
      "Safari",
      "Opera",
      "Trident", //Internet Explorer
      "MSIE", //Internet Explorer
      "Edge",
    ];
  
    for (var i in navigators) {
      if (navigatorInfo.indexOf(navigators[i]) != -1) {
        return navigators[i];
      }
    }
  }