# 🧠 Ejercicios Básicos en JavaScript

Este proyecto contiene una recopilación de ejercicios prácticos para fortalecer las bases de la programación en JavaScript. Se trabajan temas como condicionales, estructuras de repetición, arrays, objetos, funciones, entrada/salida, operadores y conceptos generales del lenguaje.

---

## 👨‍🏫 Taller Práctico: Introducción a JavaScript

Este taller te permitirá reforzar los conceptos vistos sobre JavaScript. Completa cada sección siguiendo las consignas, escribiendo y ejecutando código en la consola del navegador o en un archivo `.html` vinculado a un `.js`.

### 📘 Parte 1: Explorando JavaScript

1.1 Explica con tus palabras qué es JavaScript y en qué se diferencia de HTML y CSS  
1.2 Enumera al menos tres características principales de JavaScript  
1.3 ¿Qué significa que JavaScript sea un lenguaje "interpretado" y "basado en eventos"?

### 🔤 Parte 2: Variables y Tipos de Datos

2.1 Declara una variable `nombre` y asígnale tu nombre. Muestra un saludo en consola.  
2.2 Crea variables con: número entero, decimal y cadena de texto.  
2.3 Declara una constante `PI` con el valor `3.1416` y prueba cambiarlo.  
2.4 Declara una variable sin valor y observa qué contiene.  
2.5 Crea una variable con valor `null` y otra con un booleano. Muestra ambas.

### 🔁 Parte 3: Entrada y Salida de Datos

3.1 Usa `prompt()` para pedir la edad y muestra `"Tienes [edad] años"` en consola  
3.2 Usa `alert()` para dar la bienvenida  
3.3 Usa `confirm()` para preguntar si desea continuar y muestra el valor retornado

### ➕ Parte 4: Operadores

4.1 Declara dos números y realiza: suma, resta, multiplicación, división, módulo  
4.2 Declara dos textos y únelos con concatenación  
4.3 Evalúa estas expresiones y muestra los resultados:

```js
5 == "5"
5 === "5"
true && false
false || true
!true
```

### 🔍 Parte 5: Condicionales

5.1 Pide un número y muestra si es mayor, menor o igual a 10  
5.2 Pide el nombre y verifica si es `"Admin"` para mostrar un saludo especial  
5.3 Usa el operador ternario para saber si un número es par o impar

### 🖥 Parte 6: Consola del Navegador

6.1 Muestra distintos tipos de mensajes:

- `console.info("Info")`
- `console.warn("Advertencia")`
- `console.error("Error")`
- `console.group()` / `console.groupEnd()`
- `console.time()` / `console.timeEnd()`

### 📝 Parte 7: Comentarios

7.1 Escribe un código con comentarios de una línea `//` y múltiples líneas `/* */` explicando cada parte.

### 💡 Parte 8: Desafío Final

8.1 Crea un archivo `.html` y vincúlalo a un `.js`. En el archivo JS:

- Declara variables: `nombre`, `edad`, `ciudad`
- Usa `prompt()` para pedir esos datos
- Muestra en consola algo como:  
  `"Hola [nombre], tienes [edad] años y vives en [ciudad]."`

---

## 📌 Ejercicio Destacado: Clasificador de Triángulos

### ✅ Enunciado:
Escribe un programa que reciba tres números positivos que representen las longitudes de los lados de un triángulo. El programa debe:

1. Verificar si los lados forman un triángulo válido:
   - **Regla**: la suma de dos lados debe ser mayor que el tercero.
2. Clasificar el triángulo:
   - **Equilátero**: todos los lados iguales.
   - **Isósceles**: dos lados iguales.
   - **Escaleno**: todos los lados diferentes.
3. Si no es válido, mostrar un mensaje de error.

---

## 🧪 Métodos de Arrays

### 🔹 Ejercicios:

1. Quitar el primer elemento de un array de frutas.  
2. Agregar un número al final de un array de números.  
3. Agregar un elemento al principio de un array de palabras.  
4. Eliminar el último elemento de un array de colores.  
5. Extraer una porción de un array sin modificar el original.  
6. Reemplazar un elemento en una posición específica del array.  
7. Unir los elementos de un array de palabras en un string separado por espacios.  
8. Ordenar alfabéticamente un array de nombres.  
9. Invertir el orden de los elementos de un array.  
10. Verificar si un valor específico existe dentro del array.

---

## 🔁 Bucles: `for`, `for...in` y `for...of`

### 📝 Sin listas (strings o números):

- Imprimir los caracteres de una palabra usando `for...of`  
- Contar del 1 al 5 usando un bucle `for` clásico  
- Mostrar la posición de cada letra en una palabra usando `for...in`

### 🧺 Con listas (arrays):

- Recorrer una lista de nombres con `for...of` y saludar: `"Hola, [nombre]"`  
- Imprimir los índices de un array de colores con `for...in`  
- Imprimir índice y valor de cada número en un array con `for...in`

---

## 🧱 Ejercicios con Objetos

- Crear un objeto `persona` con las propiedades: `nombre`, `edad`, `ciudad`.  
- Mostrar el valor de una propiedad específica del objeto `persona`.  
- Modificar el valor de una propiedad existente en un objeto `libro`.  
- Agregar una nueva propiedad a un objeto `auto`.  
- Recorrer un objeto `estudiante` con un bucle y mostrar todas sus claves y valores.

---

## 🧮 Funciones en JavaScript

### ✨ Funciones básicas:

- `saludar(nombre)` → Devuelve `"Hola, [nombre]!"`  
- `sumar(a, b)` → Devuelve la suma de dos números  
- `esPar(numero)` → Devuelve `true` si es par, `false` si es impar  
- `areaRectangulo(base, altura)` → Devuelve el área de un rectángulo  
- `celsiusAFahrenheit(celsius)` → Convierte Celsius a Fahrenheit usando `F = C * 1.8 + 32`

---

## 👨‍💻 Autor

Andrés Severino Isaza  
Medellín, Colombia 🇨🇴  
Apasionado por la programación y el aprendizaje continuo.

---

## 🧰 Tecnologías

- Lenguaje: JavaScript  
- Editor sugerido: Visual Studio Code  
- Versión recomendada: Node.js >= 18 para pruebas locales

---

## 📝 Licencia

Este proyecto es de uso educativo y libre. ¡Úsalo para practicar o enseñar! 📘