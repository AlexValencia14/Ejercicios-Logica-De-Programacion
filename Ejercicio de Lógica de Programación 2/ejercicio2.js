
//Función para colocar elementos en el HTMl, utilizando el manejo del DOM
function mostrarResultado(resultado, descripcion) {
    //Creando un elemento div con createElement
    let divTemperatura = document.createElement("div");

    //Añadir etiquetas para colocar los resultados
    divTemperatura.innerHTML = `<h3>${descripcion}</h3><p>${resultado}</p>`;

    //Poner en el div
    divEjecucion.appendChild(divTemperatura);
    return divEjecucion;
}


//Función para convertir la temperatura de Celcius a Fahranheit
function conversionTemperatura() {
    // Pedir al usuario por medio de un promp la temperatura en grados Celcius
    let temperaturaCelcius = parseFloat(prompt(`Ingrese la temperatura en grado Celcius`));
    let seguridad=0;
    //Se agrega un ciclo para comprobar que el dato ingresado sea un numero
    while (isNaN(temperaturaCelcius)) {
        temperaturaCelcius = parseFloat(prompt(`Error dato no válido, Ingrese una temperatura en grado Celcius`));

        //Este codigo se hizo por seguridad para evitar un gran número de iteraciones
        if (seguridad==100){
            alert("Programa finalizado, número de intentos excedido");
            break;
        }
        seguridad++;
    }


    //LLamar a la funcion para mostrar los resultados
    mostrarResultado(temperaturaCelcius, "La temperatura en grados Celcius es: ");

    //Aplicar la formula para grados Celcius
    let temperaturaFahrenheit = temperaturaCelcius * 9 / 5 + 32;

    //LLamar a la funcion para mostrar los resultados
    mostrarResultado(temperaturaFahrenheit, "La temperatura en grados Farhrenheit es: ");

    //Aplicar la formula para grados Celcius
    let temperaturaKelvi = temperaturaCelcius + 273.15;

    //LLamar a la funcion para mostrar los resultados
    mostrarResultado(temperaturaKelvi, "La temperatura en grados Kelvin es: ");
}

conversionTemperatura();

