let array = [0, 1, 2, 3]
let colores = ['green', 'blue', 'black']
let phrases = ['La vida es demasiado corta para estar siempre cabreado', 'Una vida que niega la libertad, no es vida', 'Todos morimos, lo que importa es el cómo y el cuándo']
let arrayNum = [4, 5, 6, 7]
let container = document.getElementById('container')
let norma = document.getElementById('norma')
let frases = document.getElementById('frases')
let arrayNumbersm = document.getElementById('arrayNumbers')


container.innerHTML = `<ul>`
container.innerHTML += `<H1>Numeros</h1>`

array.forEach(numero =>{
    container.innerHTML += `<li>${numero}</li>`
})

container.innerHTML += `</ul>`

norma.innerHTML = `<ul>`
norma.innerHTML += `<H1>Colores</h1>`

colores.forEach(color =>{
    norma.innerHTML += `<div> el color ${color} es muy bonito</div>`
})

frases.innerHTML += `</ul>`

frases.innerHTML = `<ul>`
frases.innerHTML += `<H1>Frases</h1>`

phrases.forEach(fra =>{
    frases.innerHTML += `<p> ${fra} </p>`
})

frases.innerHTML += `</ul>`


arrayNumbersm.innerHTML = `<ul>`
arrayNumbersm.innerHTML += `<H1>Array Numbers </h1>`

arrayNum.forEach(i =>{
    arrayNumbersm.innerHTML += `<li> ${arrayNum }</li>`
})

arrayNumbersm.innerHTML += `</ul>`

// let formulario = document.getElementById(`formulario-tarea`)

// // Objetos punto 2

let personas = [
//     persona3 = {
//     nombre: "Juan",
//     edad : 25,
//     ocupation : "Contador"
// },

];

let persona1 = {
    nombre: "Alberto",
    edad : 25,
    ocupation : "Contador"
}

let persona2 = {
    nombre: "Manolo",
    edad : 25,
    ocupation : "Experto en WOW"
}

personas.push(persona1, persona2);
// persona.push(persona2);

// console.log(persona);

let people = document.getElementById('people')

people.innerHTML = `<ul>`
people.innerHTML += `<h1>Objetos</h1>`

personas.forEach(persona => {
    people.innerHTML += `<p > Nombre: ${persona.nombre}<br> Edad: ${persona.edad} <br> Ocupación: ${persona.ocupation}</p> `
});
people.innerHTML += `</ul>`

// Canciones


let canciones = [
    cancion1 ={
        titulo:"La Vampiresa",
        artista : "Johnny Prez",
        duracion: "1:41 Min"
    },
    cancion2 = {
        titulo:"Tu Mamá No Sabe Na",
        artista : "Plan B",
        duracion: "2:30 Min"
    }

]

let songs = document.getElementById('songs')

songs.innerHTML = `<ul>`
songs.innerHTML += `<h1>Canciones</h1>`

canciones.forEach(cancion => {
    songs.innerHTML += `<p > Titulo: ${cancion.titulo}<br> Artista: ${cancion.artista} <br> Duración: ${cancion.duracion}</p> `
});
songs.innerHTML += `</ul>`


//.nombre


let Productos = [
    producto1 ={
        nombre: "Capuccino",
        precio : 2050,
        stock : 25
    },
    producto2 = {
        nombre: "Albaricoque",
        precio : 1500,
        stock : 15
    }

]

let properties = document.getElementById('properties')

properties.innerHTML = `<ul>`
properties.innerHTML += `<h1>Productos </h1>`

Productos.forEach(producto => {
    properties.innerHTML += `<p > Nombre: ${producto.nombre}<br> Precio: $${producto.precio} <br> Stock: ${producto.stock}</p> `
});
properties.innerHTML += `</ul>`

// array Usuarios

let Usuarios = [
    usuario1 ={
        nombre: "Mariano Torres",
        email : "mariano452@riwi.io"
    },
    usuario2 = {
        nombre: "Manolo Cardona",
        email : "manolo123@riwi.io"
    }

]

let users = document.getElementById('users')

users.innerHTML = `<ul>`
users.innerHTML += `<h1>Usuarios </h1>`

Usuarios.forEach(usuario => {
    users.innerHTML += `<p > Nombre: ${usuario.nombre}<br> Correo: ${usuario.email} </p> `
});
users.innerHTML += `</ul>`

// Libros

let Libros = [
    libro1 ={
        titulo: "Mil Años de Cuarentena",
        autor : "Sun Tzu",
        año: 2020
    },
    libro2 = {
        titulo: "Cien Años de Compañía",
        autor : "Manolo Marquez",
        año: 1956
    }

]

let books = document.getElementById('books')

books.innerHTML = `<ul>`
books.innerHTML += `<h1>Libros </h1>`

Libros.forEach(libro => {
    books.innerHTML += `<p > Titulo: ${libro.titulo}<br> Autor: ${libro.autor} <br> Año: ${libro.año} </p> `
});
books.innerHTML += `</ul>`

// lista tareas


let tareas = [
    { descripcion: "Estudiar JavaScript", completada: true },
    { descripcion: "Hacer ejercicio", completada: false },
    { descripcion: "Leer un libro", completada: true },
    { descripcion: "Llamar a mamá", completada: true }
];

function generarHTMLTarea(tarea) {
    if (tarea.completada) {
    return `<p> ✅ ${tarea.descripcion}</p>`;
    } else {
    return `<p> ❌ ${tarea.descripcion}</p>`;
    }
}

let taskList = document.getElementById("taskList");
tareas.forEach(tarea => {
    taskList.innerHTML += generarHTMLTarea(tarea);
});