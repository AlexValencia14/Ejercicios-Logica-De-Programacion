//Función para colocar elementos en el HTMl, utilizando el manejo del DOM
function mostrarResultado(resultado, descripcion) {
    //Creando un elemento div con createElement
    let divFactorial = document.createElement("div");

    //Añadir etiquetas para colocar los resultados
    divFactorial.innerHTML = `<h3>${descripcion}</h3><p>${resultado}</p>`;

    //Poner en el div
    divEjecucion.appendChild(divFactorial);
    return divEjecucion;
}

//Función para pedir un valor y obtener su factorial
function factorial() {
    // Pedir al usuario por medio de un promp un número para calcular su factorial
    let numero = parseInt(prompt(`Ingrese un número para obtener su factorial`));
    let seguridad = 0;
    //Se agrega un ciclo para comprobar que el dato ingresado sea un numero
    while (isNaN(numero)  || numero < 0) {
        numero = parseInt(prompt(`Error dato no válido, Ingrese un número entero positivo`));

        //Este codigo se hizo por seguridad para evitar un gran número de iteraciones
        if (seguridad == 100) {
            alert("Programa finalizado, número de intentos excedido");
            break;
        }
        seguridad++;
    }

    //Calculo del factorial del numero
    let factorialDelNumero = 1;
    for (let i = 1; i <= numero; i++) {
        factorialDelNumero = factorialDelNumero * i;
    }

    //LLamar a la funcion para mostrar el numero ingresado
    mostrarResultado(numero, "El número ingresado fue: ");


    //LLamar a la funcion para mostrar los resultados
    mostrarResultado(factorialDelNumero, "El factorial del número es: ");

}

factorial();//Se llama a la función factorial