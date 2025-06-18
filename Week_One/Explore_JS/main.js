// Se realizará un programa para emular operaciones 
// de una calculadora, se tendrán inicialmente 4 opciones

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
// entra en el condicional para realizar la acción deseada por el usuario
if(decision === 1){
    alert(sum) //Imprime la suma de los números ingresados     
    elseif(decision === 2);{
        alert(restar)//Imprime la resta de los números ingresados
    }
    elseif(decision === 3);{
        alert(multiplica)//Imprime la multiplicación de los números ingresados
    }
}
else{
    alert(dividir) //Imprime la divición de los números ingresados

}

//Desafio Final

// definición de las variables
let nombreF;
let ageF;
let city;

// Pedida de datos al usuario
nombreF = prompt("Ingresa tu nombre: ");
ageF = prompt("Ingresa tu edad: ");
city = prompt("Ingresa tu ciudad: ");

// Muestra de los datos
alert("Hola " + nombreF + ", tienes "+ ageF + " años y vives en " + city);
console.log("Hola " + nombreF + ", tienes "+ ageF + " años y vives en " + city);



