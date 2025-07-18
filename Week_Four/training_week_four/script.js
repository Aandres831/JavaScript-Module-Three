// Al cargar la página, inicializamos
document.addEventListener('DOMContentLoaded', () => {
    mostrarDatos();
    inicializarContador();
    aumentarContador();
});

// Referencias a los elementos
const saveBtn = document.getElementById('saveBtn');
const clearBtn = document.getElementById('clearBtn');
const form = document.getElementById('userForm');

// Evento para guardar datos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    guardarDatos();
    aumentarContador();
});

// Evento para limpiar datos
clearBtn.addEventListener('click', () => {
    limpiarDatos();
    aumentarContador();
});

// Función para guardar en Local Storage
function guardarDatos() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();

    if (name === '' || age === '' || isNaN(age) || age <= 0) {
        alert('Por favor, ingresa un nombre válido y una edad mayor a 0.');
        return;
    }

    const userData = { name, age };
    localStorage.setItem('userData', JSON.stringify(userData));

    mostrarDatos();
}

// Función para mostrar datos en el div
function mostrarDatos() {
    const output = document.getElementById('storedData');
    const data = localStorage.getItem('userData');

    if (data) {
        const { name, age } = JSON.parse(data);
        output.textContent = `Nombre: ${name}, Edad: ${age}`;
    } else {
        output.textContent = 'No hay datos guardados aún.';
    }
}

// Función para limpiar Local Storage
function limpiarDatos() {
    localStorage.removeItem('userData');
    mostrarDatos();
}

// Contador de interacciones con Session Storage
function inicializarContador() {
    if (!sessionStorage.getItem('interactionCount')) {
        sessionStorage.setItem('interactionCount', '0');
    }
    actualizarVistaContador();
}

function aumentarContador() {
    let count = parseInt(sessionStorage.getItem('interactionCount')) || 0;
    count += 1;
    sessionStorage.setItem('interactionCount', count);
    actualizarVistaContador();
}

function actualizarVistaContador() {
    const counter = document.getElementById('counter');
    counter.textContent = sessionStorage.getItem('interactionCount');
}
