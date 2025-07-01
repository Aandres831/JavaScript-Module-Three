const formulario = document.getElementById("formulario-tarea");
const inputDescripcion = document.getElementById("descripcion");
const contenedorTareas = document.getElementById("lista-tareas");

let tareas = [];

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const descripcion = inputDescripcion.value.trim();
    if (descripcion === "") return;

    const nuevaTarea = {
    descripcion: descripcion,
    completada: false
    };

    tareas.push(nuevaTarea);
    inputDescripcion.value = "";
    mostrarTareas();
});

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const descripcion = inputDescripcion.value.trim();
    if (descripcion === "") return;

    const nuevaTarea = {
    descripcion: descripcion,
    completada: false
    };

    tareas.push(nuevaTarea);
    inputDescripcion.value = "";
    mostrarTareas();
});

function mostrarTareas() {
    contenedorTareas.innerHTML = "";

    tareas.forEach((tarea, indice) => {
    const div = document.createElement("div");
    div.className = "tarea";
    if (tarea.completada) {
        div.style.backgroundColor = "#e0ffe0";
        div.style.textDecoration = "line-through";
    }

    div.innerHTML = `
        <span>${tarea.descripcion}</span>
        <button onclick="completarTarea(${indice})">✅ Completada</button>
        <button onclick="eliminarTarea(${indice})">🗑️ Eliminar</button>
    `;

    contenedorTareas.appendChild(div);
    });
}


function completarTarea(indice) {
    tareas[indice].completada = true;
    mostrarTareas();
}

function eliminarTarea(indice) {
    tareas.splice(indice, 1);
    mostrarTareas();
}

