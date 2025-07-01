// definicion de las variables y objetos globales

let productos = new Set();
let categorias = new Map();

const formulario = document.getElementById("formulario");
const listaProductos = document.getElementById("productos");


// escucha el html y llenado de la info
formulario.addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const categoria = document.getElementById("categoria").value;

    const nuevoProducto = { id: Date.now(), nombre, precio };

    //ver si el producto ya existe
    const clave = JSON.stringify(nuevoProducto);
    if (![...productos].some(p => p.nombre === nombre && p.precio === precio)) {
        productos.add(nuevoProducto);
        categorias.set(nuevoProducto.id, categoria);
        mostrarProductos();
    }

    formulario.reset();
});


//funcion para insertar el html y mostrar los productos 
function mostrarProductos() {
    listaProductos.innerHTML = "";

    productos.forEach(producto => {
        const div = document.createElement("div");
        div.className = "producto";
        const cat = categorias.get(producto.id) || "Sin categoría";

        div.innerHTML = `
        <strong>${producto.nombre}</strong> - $${producto.precio} - Categoría: ${cat}
        <button onclick="eliminarProducto(${producto.id})">Eliminar</button>
        `;

        listaProductos.appendChild(div);
    });
}

// funcion para darle accion al boton de eliminar

function eliminarProducto(id) {
    const prod = [...productos].find(p => p.id === id);
    if (prod) {
        productos.delete(prod);
        categorias.delete(id);
        mostrarProductos();
    }
}