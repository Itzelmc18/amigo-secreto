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

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Captura el elemento ul donde se mostrarán los amigos
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla

    listaAmigos.forEach(nombre => { // Recorre el arreglo listaAmigos
        let li = document.createElement("li"); // Crea un nuevo elemento li
        li.textContent = nombre; // Asigna el nombre al contenido del li
        lista.appendChild(li); // Agrega el li a la lista en el HTML
    });
}