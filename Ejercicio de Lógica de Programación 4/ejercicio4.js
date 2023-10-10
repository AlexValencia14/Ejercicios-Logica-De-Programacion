//Función para colocar elementos en el HTMl, utilizando el manejo del DOM
function mostrarResultado(resultado, descripcion) {
    //Creando un elemento div con createElement
    let divFibonacci = document.createElement("div");

    //Añadir etiquetas para colocar los resultados
    divFibonacci.innerHTML = `<h3>${descripcion}</h3><p>${resultado}</p>`;

    //Poner en el div
    divEjecucion.appendChild(divFibonacci);
    return divEjecucion;
}

//Función para pedir un valor y obtener la serie Fibonacci
function serieFibonacci() {
    // Pedir al usuario por medio de un promp el número de elementos de la serie Fibonacci
    let numero = parseInt(prompt(`Ingrese el número de elementos que quiere conocer de la serie Fibonacci`));
    let seguridad = 0;
    //Se agrega un ciclo para comprobar que el dato ingresado sea un numero y sea mayor a cero
    while (isNaN(numero) || numero < 1) {
        numero = parseInt(prompt(`Error dato no válido, Ingrese un número entero mayor a cero`));

        //Este codigo se hizo por seguridad para evitar un gran número de iteraciones
        if (seguridad == 100) {
            alert("Programa finalizado, número de intentos excedido");
            break;
        }
        seguridad++;
    }

    let stringElementos = "0";
    if (numero > 1) {
        //Calculo de la serie Fibonacci
        let elementoAnterior = 0;
        let elementoPosterior = 1;
        let suma;//se creo la varible suma para guardar de manera temporal el elemento posterior
        for (let i = 2; i <= numero; i++) {//Se inicia desde el 2 debido a que se tienen ya los 2 primeros valores

            stringElementos = stringElementos +", "+ elementoPosterior;//Se agrego el elemento posterior a la lista antes de calcular el nuevo, debido a que en la serie ya se cuenta con los dos primeros valores, por lo tanto se va adelantado por un número
            suma = elementoPosterior + elementoAnterior;
            elementoAnterior = elementoPosterior;//Se reemplazo el elemento anterior por el siguiente
            elementoPosterior = suma;//Se reemplazo el elemento posterior por el nuevo  
        }
    }

    //LLamar a la funcion para mostrar el numero ingresado
    mostrarResultado(numero, "El número ingresado fue: ");

    //LLamar a la funcion para mostrar los resultados
    mostrarResultado(stringElementos, `La serie Fibonacci hasta el número ${numero} es: `);

}

serieFibonacci();//Se llama a la función serie Fibonacci