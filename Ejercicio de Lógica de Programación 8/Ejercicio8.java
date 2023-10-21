package logicaDeProgramacion;

import java.util.Scanner;

public class Ejercicio8 {

	public static void main(String[] args) {
		Scanner escaner=new Scanner(System.in);
		int[] numeros= new int[10];
		boolean[] esPrimo=new boolean[10];
		int[] numerosOrdenados=new int[10];
		byte i=0;
		
		//Pedir al usuario los 10 números
		System.out.println("Ingrese 10 números");
		
		
		//Se evalua que el dato ingresado sea al menos 1 dato númerico, si no, se piden de nuevo
		String numeroString=null;
		do {
			numeroString= escaner.nextLine();
			if(numeroString.matches("\\d{1,}")) {
				//Se convierte en un dato de tipo Byte
				int numero=Integer.parseInt(numeroString);
				numeros[i]=numero;
				i++;
			}else {
				System.out.println("Por favor, ingrese solo números");
			}
		}while(i<=9);
		
		escaner.close();
		
		
		//Imprimir en consola los datos ingresados
		byte posicion=0;
		System.out.println("Array: ");
        while (posicion < numeros.length) {
            System.out.println("pos["+posicion+"] = " +numeros[posicion]);
            posicion++;
        }
        
        
        //evaluar si es Primo
        posicion=0;
        while (posicion< numeros.length) {
            esPrimo[posicion] = true;
            
            //Saber si un número es primo
            if (numeros[posicion] <= 1) {
                esPrimo[posicion] = false; // Los números menores o iguales a 1 no son primos
            } else {
                for (int k = 2; k <= Math.sqrt(numeros[posicion]); k++) {
                    if (numeros[posicion] % k == 0) {
                        esPrimo[posicion] = false; // El número es divisible por i, por lo que no es primo
                        break; // No es necesario seguir verificando
                    }//Cierre de if que evalua el residuo
                }//Cierre del for
            }//Cierre del if si es menor o igual a 1
            
            posicion++;
        }//Cierre del while
        
        //Ordenar primero los numeros primos
        byte posicion2=0;
        byte cantidadDeNumPrimos=0;
        while (posicion2< numeros.length) {
        	if(esPrimo[posicion2]==true) {
        		numerosOrdenados[cantidadDeNumPrimos]=numeros[posicion2];
        		cantidadDeNumPrimos++;
        	}
        	posicion2++;
        }
        System.out.print("Cantidad de números Primos: ");
        System.out.println(cantidadDeNumPrimos);
        
        //Ordenar los números no primos
        byte cantidadDeNumNOPrim=0;
        posicion2=0;
        while (posicion2< numeros.length ) {
        	if(esPrimo[posicion2]==false) {
        		numerosOrdenados[cantidadDeNumPrimos+cantidadDeNumNOPrim]=numeros[posicion2];
        		
        		cantidadDeNumNOPrim++;
        	}
        	posicion2++;
        }
	
        byte posicionMostrar=0;
		System.out.println("Array con números primos primero: ");
        while (posicionMostrar < numeros.length) {
            System.out.println("pos["+posicionMostrar+"] = " +numerosOrdenados[posicionMostrar]);
            posicionMostrar++;
        }
        

	}//Cierre del main

}
