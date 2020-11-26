function initTag() {
    document.getElementById("box").value = 0
}

function addTen() {
    var box = document.getElementById("box").value
    result = parseInt(box) + 10
    document.getElementById("box").value = String(result)
}