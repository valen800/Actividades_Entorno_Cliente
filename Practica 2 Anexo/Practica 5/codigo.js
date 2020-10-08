showMessage("Bienvenida")
openWindow()

function showMessage(m) {
    alert(m)
}

function openWindow() {
    setTimeout(() => {  
        window.open('','_blank')
    }, 20000);
}