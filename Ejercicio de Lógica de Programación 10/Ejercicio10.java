package logicaDeProgramacion;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;
import java.util.Scanner;

public class Ejercicio10 {

	public static void main(String[] args) {
		//Diccionario de palabras en ingles
		Map<String,String> diccionario = new HashMap<>();
				
		//Agregar palabras
		diccionario.put("gato", "cat");
		diccionario.put("perro", "dog");
		diccionario.put("pez", "fish");
		diccionario.put("vaca", "cow");
		diccionario.put("toro", "bull");
		diccionario.put("ave", "bird");
		diccionario.put("león", "lion");
		diccionario.put("elefante", "elephant");
		diccionario.put("jirafa", "giraffe");
		diccionario.put("mono", "monkey");
		diccionario.put("leopardo", "leopard");
		diccionario.put("mariposa", "butterfly");
		diccionario.put("araña", "spider");
		diccionario.put("águila", "eagle");
		diccionario.put("paloma", "pigeon");
		diccionario.put("pingüino", "penguin");
		diccionario.put("delfín", "dolphin");
		diccionario.put("tiburón", "shark");
		diccionario.put("oso", "bear");
		diccionario.put("rana", "frog");
		
		ArrayList <String> palabrasEnEspañol = new ArrayList<>(diccionario.keySet());
		ArrayList<String> palabrasOK= new ArrayList<>();
		ArrayList<String> palabrasNoOK= new ArrayList<>();
		
		Scanner escaner= new Scanner (System.in);
		String palabraIngles;
		byte palabrasIncorrectas=0;
		
		
		
		for(int i=0; i<5; i++) {
			// Generar un número aleatorio para seleccionar un elemento al azar
	        Random rand = new Random();
	        int indiceAleatorio = rand.nextInt(palabrasEnEspañol.size());

	        // Obtener el valor correspondiente al índice aleatorio
	        String elementoAzar = palabrasEnEspañol.get(indiceAleatorio);
	        
	        //Pedir la traducción
	        System.out.println("¿Como se escribe "+elementoAzar+" en inglés? ");
	        palabraIngles=escaner.nextLine();
	        
	        //Evaluar si la palabra ingresada es correcta
	        if (!diccionario.containsValue(palabraIngles)) {
	        	palabrasNoOK.add("La traducción correcta de "+elementoAzar+ " es: "+ diccionario.get(elementoAzar));
	        	palabrasIncorrectas++;
	        }else {
	        	palabrasOK.add("Correcto, "+elementoAzar+ " en inglés es: "+ diccionario.get(elementoAzar));
	        }
	        
		}
		escaner.close();
		
		//Impresiones en consola
		System.out.println("Palabra correctas: "+(5-palabrasIncorrectas));
		for(String txtImprimirOK:palabrasOK) {
			System.out.println(txtImprimirOK);
		}
		
		System.out.println("Palabra incorrectas: "+palabrasIncorrectas);
		
		for(String txtImprimirNoOK:palabrasNoOK) {
			System.out.println(txtImprimirNoOK);
		}

	}//Cierre del metodo main

}
