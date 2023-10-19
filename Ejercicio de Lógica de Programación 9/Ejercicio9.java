package logicaDeProgramacion;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class Ejercicio9 {

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
		
		//pedir palabra al usuario
		Scanner escaner= new Scanner (System.in);
		System.out.println("Ingresa una palabra en español");
		String palabra=escaner.nextLine();
		
		//En caso de que no exista la palabra
		while(!diccionario.containsKey(palabra)) {
			System.out.println("La palabra no se encuentra en el diccinario, por favor ingrese otro palabra");
			palabra= escaner.nextLine();
		}
		
		escaner.close();
		
		//Buscar la palabra
		String traduccion = diccionario.get(palabra);
		System.out.println(palabra+" en inglés es: "+traduccion);
		
		
	}//cierre del metodo main

}
