//Challenge realizado tomando como guía la lista de actividades de Tello.

// 1. Crear un array para almacenar los nombres de los amigos que serán sorteados y descubrir el "amigo secreto"
let amigos = [];

// 2. Implementar una función para agregar amigos.
function agregarAmigo() {

    // Capturar el valor del campo de entrada.
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar la entrada.
    if (nombre === "") {
        alert("Por favor inserte un nombre.");
        return;
    }

    //Actualizar el array de amigos.
    amigos.push(nombre);

    // Limpiar el campo de entrada.
    input.value = "";

    mostrarLista();
}

// 3. Implementar una función para actualizar la lista de amigos.
function mostrarLista() {

    // Obtener el elemento de la lista.
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista existente con la funcion recomendada.
    lista.innerHTML = "";

    // Recorrer el arreglo y agregar elementos a la lista.
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

//4. Implementar una función para sortear los amigos.
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    //Validar que haya amigos disponibles.
    if (amigos.length === 0) {
        alert("Lista vacía. Por favor ingrese nombres.");
        return;
    }
    // MEJORA: Verificar que haya la cantidad necesaria de datos para que se pueda hacer el sorteo.
    if (amigos.length < 2) {
    alert('Se necesitan al menos 2 amigos para sortear.');
    return;
  }

    // Generar un índice aleatorio.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Obtener el nombre sorteado.
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong> </li>`;

    // Mostrar el resultado.
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}