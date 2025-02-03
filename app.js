let listaAmigos = [];
let listaSorteados = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    }
}

function agregarAmigo() {
    let input = document.getElementById("amigo"); // Captura el input
    let nombre = input.value.trim(); // Obtiene el valor y elimina espacios extra

    if (nombre === "") { // Verifica que el nombre no esté vacío
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista
    actualizarLista(); // Actualiza la lista en el HTML
    input.value = ""; // Limpia el input después de agregar el nombre
}