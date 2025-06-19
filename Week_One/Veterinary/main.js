
function registrarMascota(){
    let mascotas ={};

    let nombre = prompt("Cual es el nombre de la mascota: ");
    let especie = prompt("Cual es la especie de la mascota: ");
    let edad = prompt("Cual es la edad de la mascota: ");
    let vacunado = prompt("La mascota está vacunada: ");

    mascotas.nombre = nombre;
    mascotas.especie = especie;
    mascotas.edad = edad;
    mascotas.vacunado = vacunado;

    return mascotas
}







