let listaAmigos = []; // Array para almacenar los amigos
let listaSorteados = []; // Array para almacenar los amigos que ya han sido sorteados

// Función para asignar texto a un elemento HTML específico
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto; // Asigna el texto al elemento si existe
    }
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo"); // Obtiene el input con el id 'amigo'
    let nombre = input.value.trim(); // Obtiene el valor del input y elimina espacios al inicio y final

    // Verificar si el nombre contiene números
    if (/[\d]/.test(nombre)) {
        alert("No se puede introducir números. Por favor, ingrese un nombre válido.");
        return; // Detiene la ejecución si el nombre contiene números
    }

    // Verificar si el nombre contiene solo una letra
    if (nombre.length === 1) {
        alert("No se puede introducir solo una letra. Por favor, ingrese un nombre completo.");
        return; // Detiene la ejecución si el nombre tiene solo una letra
    }

    // Verificar si el nombre ya está en la lista
    if (listaAmigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return; // Detiene la ejecución si el nombre ya existe en la lista
    }

    // Verificar si el nombre está vacío
    if (nombre === "") {
        alert("Por favor, ingrese un nombre válido.");
        return; // Detiene la ejecución si el nombre está vacío
    }

    listaAmigos.push(nombre); // Agrega el nombre a la lista de amigos
    actualizarLista(); // Actualiza la lista mostrada en el HTML
    input.value = ""; // Limpia el campo de texto después de agregar el amigo
}

// Función para actualizar la lista de amigos mostrada en el HTML
    function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtiene el elemento de la lista en el HTML
    lista.innerHTML = ""; // Limpia la lista antes de actualizarla

    // Recorre el array de amigos y agrega cada nombre a la lista en el HTML
    listaAmigos.forEach(nombre => {
        let li = document.createElement("li"); // Crea un nuevo elemento <li>
        li.textContent = nombre; // Asigna el nombre del amigo al contenido del <li>
        lista.appendChild(li); // Añade el <li> a la lista
    });
}

// Función para sortear un amigo de la lista
function sortearAmigo() {
    // Verificar si hay amigos en la lista para sortear
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return; // Detiene la ejecución si no hay amigos en la lista
    }
    
    
        if (listaAmigos.length < 2) { // Verifica si hay menos de 2 amigos en la lista
            alert("Debe haber al menos 2 amigos en la lista para realizar el sorteo.");
            return;
        }

    // Verificar si todos los amigos ya han sido sorteados
    if (listaSorteados.length === listaAmigos.length) {
        alert("Ya se sortearon todos los amigos.");
        return; // Detiene la ejecución si todos los amigos ya han sido sorteados
    }

    let indiceAleatorio;
    do {
        // Genera un índice aleatorio entre 0 y el tamaño de la lista de amigos
        indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    } while (listaSorteados.includes(indiceAleatorio)); // Se asegura de que el amigo no haya sido sorteado ya

    listaSorteados.push(indiceAleatorio); // Agrega el índice sorteado a la lista de sorteados
    let amigoSeleccionado = listaAmigos[indiceAleatorio]; // Obtiene el amigo seleccionado por el índice aleatorio

    // Muestra el nombre del amigo sorteado en el HTML
    asignarTextoElemento('#resultado', `<li> ${amigoSeleccionado} es el ganador! </li>`);
}