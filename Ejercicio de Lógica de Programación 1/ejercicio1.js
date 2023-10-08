/*

Este ejercicio fue creado con 3 funciones, ya que si no se colocaran, las variables declaradas dentro de estas presentan un error al momento de ejecutar el mismo ejercicio, pero intentando de darle otro valores a los datos ingresados. Esto se debe a que el scope de las varibles fuera de una función, se consideran de manera global en el documento y al llamar al mismo documento, se deben declarar de nuevo, lo cual no es posible.

Es decir, al cargar la pagina y dar la opcion 1 más el boton de enviar, el programa se ejecuta con normalidad, pero al intentar ejecutar el mismo ejercicio sin cargar de nuevo la pagina, aparece el error mencionado. 

*/


//Función para pedir números al usuario
function pedirNumeros() {
    // Arreglo para colocar numeros y ordenarlos
    let numeros = [];
    let i=1;
    //pedir 3 números
    do {
        
        numeros.push(parseInt(prompt(`Agregue el valor del número ${i}`)));
        if (isNaN(numeros[i-1])){// Se coloco si era NaN para evitar que se ejecute en caso de que no se haya ingresado un número
            numeros.pop(); //en caso de que no sea un numero, se elimina el dato ingresado y se vuelve a pedir
            

        }else{
            i++;
        }
    } while(i<=3);
    return numeros;
}

//Función para colocar elementos en el HTMl, utilizando el manejo del DOM
function mostrarResultado(resultado, descripcion) {
    //Creando un elemento div con createElement
    let divNumeros = document.createElement("div");

    //Añadir etiquetas para colocar los resultados
    divNumeros.innerHTML = `<h3>${descripcion}</h3><p>${resultado}</p>`;

    //Poner en el div
    divEjecucion.appendChild(divNumeros);
    return divEjecucion;
}

//Función donde se realizan las operaciones y se muestran
function operacionesYMostrar() {

    let numeros2 = pedirNumeros();
    // mostrar con el dom los numeros ingresados
    mostrarResultado(numeros2, "Numeros ingresados: ");

    //ordenar numeros del menor al mayor
    numeros2.sort((a, b) => a - b);

    // mostrar con el dom
    mostrarResultado(numeros2, "Numeros de menor a mayor: ");

    //invertir el orden de los numeros, es decir, ahora va del mayor al menor
    numeros2.reverse();


    // mostrar con el dom
    mostrarResultado(numeros2, "Numeros mayor a menor: ");
}

operacionesYMostrar();//llamar a la función
