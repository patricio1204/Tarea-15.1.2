const button = document.getElementById("toggleButton");
const opciones = document.getElementById("opciones");

button.addEventListener("click", function() {
    opciones.classList.toggle("d-none");
})
