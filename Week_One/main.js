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

// Operador Ternario
let numm = prompt("Ingresa el numero: ");
let mensaje = (numm % 2 === 0) ? "Es Par" : "Es Impar";
alert(mensaje); 

// Mensaje Informativo
console.info("Mensaje Informativo");

// console Warn
console.warn("Console Warn");

// console Error
console.error("Console Error");

// console group
console.group("Console Group");

// console group End
console.groupEnd("Console Group-End");

// console time - console timeend
console.time("Console Time");
console.timeEnd("Console TimeEnd");


// Bloque de código
// Se piden los datos para realizar la operación
let calculadora1 = prompt("Ingresa el número 1 al cual deseas calcular");
let calculadora2 = prompt("Ingresa el número 2 al cual deseas calcular");

// Se realizan los cálculos pertinentes
let sum = calculadora1 + calculadora2
let restar = calculadora1 - calculadora2
let multiplica = calculadora1 * calculadora2
let dividir = calculadora1 / calculadora2

// Se pide y muestra la decision despues de hacer la elección
let decision = prompt("1. Suma.\n 2. Resta\n 3. multiplicacion \n 4. Division");
if(decision === 1){
    print(sum)
    elseif(decision === 2){
        print(restar)
    }
    elseif(decision === 3)
        print(multiplica)
}
else{
    print(dividir)
}

