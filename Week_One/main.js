// Nombrar una variable
let name1="Andres";
console.log("Hola ", name1);

// Diferentes Tipos de datos
let int = 20;
let float = 15.5;
let string = "La suma es"
let sumar = int + float;


// Mostrando los datos
console.log(int)
console.log(float)
console.log(string)
console.log(int, " + ", float , string, sumar)

// Es una variable definida por el programa
// let PI = 3.1416;
// let PI = 25;

// sin valor = Undefined
let sin;
console.log(sin)

// NUll y Boolean
// [Function: Boolean]
// null
let bo = Boolean;
let nu = null;

console.log(Boolean);
console.log(null);

// recopilación de datos
let edad = window.prompt('Ingresa tu edad: ');
console.log("Tu edad es: " + edad);

// alert
alert("Bienvenido a RIWI")

// confirm => Arroja True
console.log(confirm("Deseas continuar: ")); 

// Operaciones Aritmeticas
let num1 = 25;
let num2 = 35;

let suma = num2 + num1;
let resta = num2 - num1;
let multiplicacion = num2 * num1;
let division = num2 / num1;
let modulo = (num2%num1);

console.log(suma);
console.log(resta);
console.log(multiplicacion);
console.log(division);
console.log(modulo);

// concatenar
text1 = "Uno"
text2 = "Dos"
concatenar = (text1 +" "+ text2)
console.log(concatenar);

// igualador
console.log(5 == "5")
console.log(5 === "5");
console.log(true && false);
console.log(false || true);
console.log(!true);



// Comparativa de números

numUser = prompt("Ingresa el número a comparar: ");
if (numUser> 10){
    alert("El número " + numUser + " es mayor que 10.");
    elseif(numUser === 10);{
        alert("El número " + numUser + " es igual a 10.");
    }
}
else{
        alert("El número " + numUser + " es menor a 10.");
    }


// admin comparativa
nomUser = prompt("Ingresa el nombre de usuario: ");
if (nomUser === "Admin"){
    alert("Bienvenido, en un momento tendrás listo tu dispositivo.");
}
else{
        alert("NO es el usuario, intenta de nuevo.");
    }


