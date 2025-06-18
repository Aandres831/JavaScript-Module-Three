# 1.1 Explica con tus palabras qué es JavaScript y en qué se diferencia de HTML y CSS.
Para mí javascript es el lenguaje con el cuál se puede gestionar los diferentes elementos de HTML y CSS, dar vida a los elementos y ayudar en la parte del back usando node.js, para terminar de estructurar la solución.
# 1.2 Enumera al menos tres características principales de JavaScript.
    ▫️ Es un lenguaje orientado a objetos
    ▫️ Tiene una alta compatibilidad con navegadores
    ▫️Es usado para una multiplicidad de soluciones(Juegos, Web, Apps Móviles)

# 1.3 ¿Qué significa que JavaScript sea un lenguaje "interpretado" y "basado en eventos"?
    ▫️Que sea interpretado traduce que no es necesario que el código sea compilado para ser ejecutado.
    ▫️Basado en eventos se puede interpretar como un lenguaje el cual se apoya en acciones realizadas por el navegador para realizar una u otra acción.

# Inicio Ejercicios Prácticos

## Definición y Muestra de variables
    // Nombrar una variable
    let name1="Andres";
    console.log("Hola ", name1);

## Diferentes Tipos de Datos y Su Salida
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

## Manipulación de Variables y constantes
    // Es una variable definida por el programa
    // let PI = 3.1416;
    // let PI = 25;

## Definición y Muestra de Una variable Sin Asignarle Valor
    // sin valor = Undefined
    let sin;
    console.log(sin)

## Definición y Muestra de variables Primitivas
    // NUll y Boolean
    // [Function: Boolean]
    // null
    let bo = Boolean;
    let nu = null;

    console.log(Boolean);
    console.log(null);

## Definición y Muestra de Datos con Diferentes 
    // recopilación de datos
    let edad = prompt('Ingresa tu edad: ');
    console.log("Tu edad es: " + edad);

    // alert
    alert("Bienvenido a RIWI")

 ## Operaciones Aritméticas

    // Operaciones Aritméticas
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

## Concatenar Variables
    // concatenar
    text1 = "Uno"
    text2 = "Dos"
    concatenar = (text1 +" "+ text2)
    console.log(concatenar);

## Igualar Datos
    // igualador
    console.log(5 == "5")
    console.log(5 === "5");
    console.log(true && false);
    console.log(false || true);
    console.log(!true);



## Petición y Comparativa de Datos
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

## Validación Sencilla de Datos
    // admin comparativa
    nomUser = prompt("Ingresa el nombre de usuario: ");
    if (nomUser === "Admin"){
        alert("Bienvenido, en un momento tendrás listo tu dispositivo.");
    }
    else{
            alert("NO es el usuario, intenta de nuevo.");
        }

## Aplicación del Operador Ternario
    // Operador Ternario
    let numm = prompt("Ingresa el numero: ");
    let mensaje = (numm % 2 === 0) ? "Es Par" : "Es Impar";
    alert(mensaje); 

## Visualización de los Diferentes Mensajes de Consola
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
