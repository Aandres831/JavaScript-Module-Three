// Clasificador de Triángulos

// Se piden los datos y se almacenan en las variables
let num1 = prompt("Ingresa el número 1: ");
let num2 = prompt("Ingresa el número 2: ");
let num3 = prompt("Ingresa el número 3: ");

// calculo de la longitud
let longitud = num1 + num2;


if(longitud > num3){
        if (num1 === num2 && num1 === num3) {
        console.log("El triángulo es Equilatero");
    } 
        else if (num1 === num2 || num1 === num3) {
            console.log("El triángulo es Isóceles");
        }
        else if(num1 != num2 && num1 != num3) {
            console.log("El triángulo es Escaleno");
        }
    else {
        console.log("Error en los datos ingresados. Intenta de nuevo. ");
    }
}
else{
    console.log("Recuerda que para ser válido la suma de los primeros lados debe ser mayor que el tercer lado.");
}


