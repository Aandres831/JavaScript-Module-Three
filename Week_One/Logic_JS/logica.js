// Clasificador de Triángulos

// Se piden los datos y se almacenan en las variables
let num1 = Number(prompt("Ingresa el número 1: "));
let num2 = Number(prompt("Ingresa el número 2: "));
let num3 = Number(prompt("Ingresa el número 3: "));

// calculo de la longitud
// let longitud = num1 + num2;


if((num1 + num2 > num3) && (num1 + num3 > num2) && (num2 + num3 > num1)){
    if (num1 === num2 && num1 === num3){
        console.log("El triángulo es Equilatero"); 
    }   else if ((num1 === num2 && num1 != num3) || (num1 === num3 && num1 != num2) || (num2 === num3 && num2 != num1)) {
            console.log("El triángulo es Isóceles");
    }   else if(num1 != num2 && num1 != num3) {
            console.log("El triángulo es Escaleno");
    }   else {
        console.log("Error en los datos ingresados. Intenta de nuevo. ");
    }
}
else{
    console.log("Recuerda que para ser válido la suma de los primeros lados debe ser mayor que el tercer lado.");
}

// Tratamientos de arrays

let frutas = ["Manzana", "Mora", "Kiwi", ""] 

// Quita elemento al inicio del array
console.log(frutas);
frutas = frutas.shift();
console.log("Quité el elemento al inicio del array " + frutas);

// Añadir elemento al inicio del array
frutas = frutas.unshift("Piña");
console.log("Añade el elemento al inicio del array " + frutas);

// Añadir un elemento al final del array
frutas = frutas.push("Pera");
console.log("Añade el elemento al final del array " + frutas);

// Elimina el último elemento de un array de colores.
frutas = frutas.pop();
console.log("Quité el elemento al final del array " + frutas);

// Extrae una porción de un array sin modificar el original.
let frutas2 = ['manzana', 'banana', 'naranja', 'uva', 'kiwi'];
let algunosFrutos = frutas.slice(1, 4); 
console.log(algunosFrutos);


// Reemplaza un elemento en una posición específica del array.
frutas = frutas.splice(1, 1, "Mamoncillo");
console.log("Quité el elemento al final del array " + frutas);


// Une los elementos de un array de palabras en un solo string separado por espacios.
let string1 = ["Ana"];
let string2 = ["María"];

let arraConcatenar = string1.concat(string2);
console.log(arraConcatenar);

// Ordena alfabéticamente un array de nombres.
let nombres = ["Juan", "Andres", "Manuel", "Camilo"]
nombres.sort();

console.log(nombres);

// Invierte el orden de los elementos de un array.
let nombres2 = ["Juan", "Andres", "Manuel", "Camilo"]
nombres.reverse();

console.log(nombres);

// Verifica si un valor específico existe dentro del array.

let encontrar = [1, 2, 3, 4, 5];

let valorBuscado = 3;
if (array.includes(valorBuscado)) {
    console.log(`${valorBuscado} está en el array`);
} else {
    console.log(`${valorBuscado} no está en el array`);
}

// Ejercicios For, For in, For Of

// Imprimir los caracteres de una palabra
let palabra = "Marte"

for (let i = 0; i < palabra.length; i++) {
    console.log("The letter ${palabra[i]} is in the position ${i}");
}

// Contar del 1 al 5 usando for clásico

let cont = 0
for(let i=0; i < 5; i ++){
    cont += 1;
    console.log(cont);
}

// Mostrar la posición de cada letra en una palabra usando for...in
let palabras = "Capibara";

for (let i in palabras) {
    console.log(i + " -> " + palabras[i]);
}


// Recorrer una lista de nombres usando for...of
let nombresforof = ["Andrés", "María", "Juan", "Sofía"];

for (let i of nombresforof) {
    console.log("Hola, " + i);
}

// Imprimir índices de una lista usando for...in
let colores = ["rojo", "verde", "azul", "amarillo"];

for (let i in colores) {
    console.log("Índice: " + i);
}

// Imprimir índice y valor de cada número en un array
let colors = ["rojo", "verde", "azul", "amarillo"];

for (let i in colors) {
    console.log(i + ": " + colors[i]);
}

// Ejercicios de Objetos

// Crear un objeto persona con las propiedades: nombre, edad y ciudad
let persona = {
    nombre: "Andrés",
    edad: 22,
    ciudad: "Medellín"
};

//  Mostrar el valor de una propiedad específica del objeto persona
console.log(persona.nombre); 

// Modificar el valor de una propiedad existente en un objeto libro

let libro = {
    titulo: "Principito",
    autor: "Andres Severino Isaza"
};

libro.titulo = "Juegos del hambre";

console.log(libro.titulo); 

// Agregar una nueva propiedad a un objeto auto

let auto = {
    marca: "Nissan",
    modelo: "Silvia"
};

auto.color = "Rojo";

console.log(auto);  

// Recorrer un objeto estudiante con un bucle y mostrar todas sus claves y valores

let estudiante = {
    nombre: "Laura",
    edad: 20,
    carrera: "Finanzas"
};

for (let i in estudiante) {
    console.log(i + ": " + estudiante[i]);
}

// Ejercicios para practicar funciones

// Saludo personalizado

function saludar(nombre) {
    return "Hola, " + nombre + "!";
}


console.log(saludar("Andrés"));  


// Suma de dos números

function sumar(a, b) {
    return a + b;
}


console.log(sumar(5, 3)); 

// Número par o impar

function esPar(numero) {
    return numero % 2 === 0;
}


console.log(esPar(4));  
console.log(esPar(7)); 

//  Calcular el área de un rectángulo

function areaRectangulo(base, altura) {
    return base * altura;
}

console.log(areaRectangulo(5, 10)); 

// Convertir grados Celsius a Fahrenheit

function celsiusAFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

console.log(celsiusAFahrenheit(25)); 



