// URL base de la API JSON Server
const API_URL = 'http://localhost:3000/productos';

// Referencias a elementos del DOM
const container = document.getElementById('productos-container');
const form = document.getElementById('product-form');
const mensaje = document.getElementById('mensaje');
const searchInput = document.getElementById('search-nombre');
const searchBtn = document.getElementById('search-btn');
const searchResults = document.getElementById('search-results');

/**
 * Obtiene todos los productos del servidor y los muestra en pantalla
 */
async function obtenerProductos() {
    try {
        const res = await fetch(API_URL);
        const productos = await res.json();
        mostrarProductos(productos, container);
    } catch {
        mostrarMensaje('Error al obtener productos ');
    }
}

/**
 * Renderiza productos en el contenedor especificado
 */
function mostrarProductos(productos, target) {
    target.innerHTML = '';
    if (productos.length === 0) {
        target.innerHTML = '<p>No hay productos encontrados</p>';
        return;
    }

    productos.forEach(p => {
        const card = document.createElement('div');
        card.className = 'producto-card';
        card.innerHTML = `
        <span>${p.nombre} - $${p.precio}</span>
        <div>
            <button onclick="prepararEdicion('${p.nombre}')">✏️ Editar</button>
            <button onclick="eliminarPorNombre('${p.nombre}')">🗑️ Eliminar</button>
        </div>
        `;
        target.appendChild(card);
    });
}

/**
 * Maneja el envío del formulario para crear o actualizar un producto
 */
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const precio = parseFloat(document.getElementById('precio').value);

    if (!nombre || isNaN(precio) || precio <= 0) {
        mostrarMensaje('Datos inválidos, revisá bien pues ');
        return;
    }

    try {
        // Verifica si ya existe un producto con ese nombre
        const res = await fetch(`${API_URL}?nombre=${encodeURIComponent(nombre)}`);
        const existentes = await res.json();

        if (existentes.length > 0) {
        // Si existe, actualiza (PUT)
        const productoExistente = existentes[0];
        await fetch(`${API_URL}/${productoExistente.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, precio })
        });
        mostrarMensaje('Producto actualizado ✅');
        } else {
        // Si no existe, crea nuevo (POST)
        await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre, precio })
        });
        mostrarMensaje('Producto agregado ');
        }

        form.reset();
        obtenerProductos();
    } catch {
        mostrarMensaje('Error al guardar producto ');
    }
});

/**
 * Busca productos por nombre y los muestra en la sección de resultados
 */
searchBtn.addEventListener('click', async () => {
    const nombreBuscado = searchInput.value.trim();
    if (!nombreBuscado) {
        mostrarMensaje('Ingresa un nombre para buscar ');
        return;
    }

    try {
        const res = await fetch(`${API_URL}?nombre_like=${encodeURIComponent(nombreBuscado)}`);
        const resultados = await res.json();
        mostrarProductos(resultados, searchResults);
    } catch {
        mostrarMensaje('Error al buscar ');
    }
});

/**
 * Elimina todos los productos que coincidan exactamente con el nombre dado
 */
async function eliminarPorNombre(nombre) {
    if (!confirm(`¿Seguro que quieres eliminar "${nombre}"? `)) return;

    try {
        const res = await fetch(`${API_URL}?nombre=${encodeURIComponent(nombre)}`);
        const encontrados = await res.json();

        if (encontrados.length === 0) {
        mostrarMensaje('Producto no encontrado ');
        return;
        }

        // Borra todos los encontrados con ese nombre
        for (const prod of encontrados) {
        await fetch(`${API_URL}/${prod.id}`, { method: 'DELETE' });
        }

        mostrarMensaje(`Producto(s) "${nombre}" eliminado(s) 🗑️`);
        obtenerProductos();
        searchResults.innerHTML = '';
    } catch {
        mostrarMensaje('Error al eliminar ');
    }
}

/**
 * Carga los datos del producto en el formulario para edición
 */
async function prepararEdicion(nombre) {
    try {
        const res = await fetch(`${API_URL}?nombre=${encodeURIComponent(nombre)}`);
        const encontrados = await res.json();

        if (encontrados.length === 0) {
        mostrarMensaje('Producto no encontrado para editar ');
        return;
        }

        const producto = encontrados[0];
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('precio').value = producto.precio;
        mostrarMensaje('Edita y guarda el producto arriba en ingreso de producto 🛠️');
    } catch {
        mostrarMensaje('Error al preparar edición 😭');
    } 
}

/**
 * Muestra un mensaje en pantalla de forma temporal
 */
function mostrarMensaje(texto) {
    mensaje.textContent = texto;
    setTimeout(() => mensaje.textContent = '', 4000);
}

// Cargar productos al inicio
obtenerProductos();


