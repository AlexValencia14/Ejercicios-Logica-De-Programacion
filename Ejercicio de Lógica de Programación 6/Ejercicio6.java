package logicaDeProgramacion;

import java.util.Scanner;

public class Ejercicio6 {

	public static void main(String[] args) {
		
		//Crear e importar el Scanner
		Scanner escaner= new Scanner (System.in);
				
		//Pedir al usuario una frase
		System.out.println("Por favor escriba una frase o palabra:");
		String frase = escaner.nextLine();
		escaner.close();
		
		String fraseInversa="";
		int longitudFrase = frase.length();
		
		
		//Ciclo que recorre la frase de fin a inicio
		for (int i = longitudFrase-1; i >= 0; i--) {
			fraseInversa += frase.charAt(i);
		}
		
		//Imprimir frase inversa
		System.out.println("La frase invertida es: "+fraseInversa);
				
				
	}

}
