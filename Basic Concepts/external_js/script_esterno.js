function changeColor() {
    document.getElementById('cambia_colore').style.color = 'red';
}

function AlertBox() {
    alert("Questa e' una alert box !");
}

function ArToStr() {
    // convert array to string
    var fruits = ['Orange','Lemon','Carrot'];
    document.getElementById('joined-array').innerHTML = fruits.join(" * ");
}