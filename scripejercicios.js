//Traer los elementos del html para la manipulación del DOM
let numeroEjercicio = document.getElementById("ejercicio");
let divEjecucion = document.getElementById("ejercicioEjecutado");
let boton=document.getElementById("btnEjecutar");
let scriptEjercicio;

//función que indica que js ejecutar
function elegirEjercicio(ejercicio) {
    switch (ejercicio) {
        case '1':
            scriptEjercicio = "./Ejercicio de Lógica de Programación 1/ejercicio1.js";
            break;
        case '2':
            scriptEjercicio = "./Ejercicio de Lógica de Programación 2/ejercicio2.js";
            break;
        case '3':
            scriptEjercicio = "./Ejercicio de Lógica de Programación 3/ejercicio3.js";
            break;
        case '4':
            scriptEjercicio = "./Ejercicio de Lógica de Programación 4/ejercicio4.js";
            break;
        case '5':
            scriptEjercicio = "./Ejercicio de Lógica de Programación 5/ejercicio5.js";
            break;
        default:
            alert("No se encontro este ejercicio");
    }
    return scriptEjercicio;
}

function insertarEjercicio() {

    //Elimina el contenido del divEjecucion antes de insertar el ejercicio
    divEjecucion.innerHTML='';

    //Creando un elemento script con createElement
    let script = document.createElement("script");

    //Crear el atributo src para el scrip
    script.src = elegirEjercicio(numeroEjercicio.value);

    //Poner mi scrip en el div
    divEjecucion.appendChild(script);
}


//Evento
boton.addEventListener('click',insertarEjercicio);