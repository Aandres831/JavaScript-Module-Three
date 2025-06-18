// Clasificador de Triángulos

// Se piden los datos y se almacenan en las variables
let num1 = prompt("Ingresa el número 1: ");
let num2 = prompt("Ingresa el número 2: ");
let num3 = prompt("Ingresa el número 3: ");

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

let frutas = ["Manzana", "Mora", "Kiwi", ""] // Creamos el array frutas

// Quita elemento al inicio del array
frutas = frutas.shift();

// Añadir elemento al inicio del array
frutas = frutas.unshift("Piña");

// Añadir un elemento al final del array
frutas = frutas.push("Pera");

// Elimina el último elemento de un array de colores.
// Extrae una porción de un array sin modificar el original.
// Reemplaza un elemento en una posición específica del array.
// Une los elementos de un array de palabras en un solo string separado por espacios.
// Ordena alfabéticamente un array de nombres.
// Invierte el orden de los elementos de un array.
// Verifica si un valor específico existe dentro del array.


