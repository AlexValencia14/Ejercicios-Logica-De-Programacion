//Función para colocar elementos en el HTMl, utilizando el manejo del DOM
function mostrarResultado(resultado, descripcion) {
    //Creando un elemento div con createElement
    let divFelicitacion = document.createElement("div");

    //Añadir etiquetas para colocar los resultados
    divFelicitacion.innerHTML = `<h3>${descripcion}</h3><p>${resultado}</p>`;

    //Poner en el div
    divEjecucion.appendChild(divFelicitacion);
    return divEjecucion;
}



//Función para pedir un valor y obtener su factorial
function adivinar() {
    // Pedir al usuario por medio de un promp un número 
    let numeroIngresado = parseInt(prompt(`Ingrese un número del 0 al 100`));
    let seguridad = 0;
    //Se agrega un ciclo para comprobar que el dato ingresado sea un numero
    while (isNaN(numeroIngresado) || numeroIngresado < 0 || numeroIngresado > 100) {
        numeroIngresado = parseInt(prompt(`Error dato no válido, Ingrese un número entero positivo del 0 al 100`));

        //Este codigo se hizo por seguridad para evitar un gran número de iteraciones
        if (seguridad == 100) {
            alert("Programa finalizado, número de intentos excedido");
            break;
        }
        seguridad++;
    }

    //Generar un número pseudoaleatorio
    let numeroSecreto=parseInt(Math.random()*100);
    

    let numerosIngresados = numeroIngresado + ", ";
    let intentos = 1;

    console.log(numeroIngresado);

    //Se agrega un ciclo para comprobar que el dato ingresado sea igual al número secreto
    while (numeroSecreto != numeroIngresado) {
        numeroIngresado = parseInt(prompt(`Ups, el número secreto es incorrecto, vuelve a intentarlo.`));

        if (isNaN(numeroIngresado)) {

            console.log(numeroIngresado);
        } else {
            numerosIngresados += `${numeroIngresado}, `;

            console.log(numeroIngresado);
        }

        //ciclo para comprobar el número de intentos
        if (intentos == 100) {
            alert("Programa finalizado, número de intentos excedido");
            //LLamar a la funcion para mostrar el numero secreto
            mostrarResultado(numeroSecreto, "Suerte para la proxima, el número secreto era: ");
            break;
        }
        intentos++;
    }

    mostrarResultado(numerosIngresados, "Los números ingresados fueron:")

    if (numeroIngresado == numeroSecreto) {
        //LLamar a la funcion para mostrar el numero secreto
        mostrarResultado(numeroSecreto, "Felicidades, adivinaste el número secreto: ");
    }


}

adivinar();//Se llama a la función adivinar