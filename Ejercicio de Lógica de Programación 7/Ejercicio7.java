package logicaDeProgramacion;

import java.util.Scanner;

public class Ejercicio7 {

	public static void main(String[] args) {
		
		
		Scanner escaner= new Scanner (System.in);
		
		String[] dias= {"lunes","martes","miercoles","jueves","viernes"};
		boolean comprobacionDia=false;
		byte indice=0;
		
		System.out.println("Ingrese un día de la semana (lunes, martes, miercoles, jueves, viernes)");
		String dia=escaner.nextLine();
		
		//Verificacion del dato ingresado
		do {
			indice=0;//indica donde se encontro la coincidencia
			for (String i : dias) {//forEach para recorrer el arreglo
				if(dia.equals(i)) {
					comprobacionDia=true;
					//en caso de que se encuentre una coincidencia ya no es necesario terminar con el arreglo
					break;
				}
				indice++;
			}//cierre for
			
			//en caso de que este en el arreglo, se cierra el ciclo While para evitar que se ejecute la linea 36 y 37
			if(comprobacionDia){
				break;
			}
			
			System.out.println("Por favor, ingrese un día de la semana");
			dia=escaner.nextLine();
			
		}while(comprobacionDia==false);
		
		
		System.out.println("Ingrese la hora");
		String horaString;
		byte hora=0;
		//Verificación que los datos de hora sean correctos
		do {
			if (hora<0 || hora>23) {
				System.out.println("Por favor, ingrese solo números del 0 al 23 para la hora");
			}
			horaString=escaner.nextLine();
			while(!horaString.matches("\\d{1,2}")) {
				System.out.println("Por favor, ingrese solo números del 0 al 23 para la hora");
				horaString= escaner.nextLine();
			}
			hora=Byte.parseByte(horaString);
			
		}while( hora<0 || hora>23);
		
		
		
		System.out.println("Ingrese los minutos");
		String minutosString;
		byte minutos=0;
		//Verificación que los datos de los minutos sean correctos
		do {
			if (minutos<0 || minutos>23) {
				System.out.println("Por favor, ingrese solo números del 0 al 59 para los minutos");
			}
			minutosString=escaner.nextLine();
			while(!minutosString.matches("\\d{1,2}")) {
				System.out.println("Por favor, ingrese solo números del 0 al 59 para los minutos");
				minutosString= escaner.nextLine();
			}
			minutos=Byte.parseByte(minutosString);
			
		}while( minutos<0 || minutos>59);
		
		escaner.close();
		
		
		//Se calculan los minutos restantes
		short minutosFaltantes= (short) ((4-indice)*24*60+(15-hora)*60-minutos);
		System.out.println("Faltan "+minutosFaltantes+ " minutos para el fin de semana");
		
		
	}//metodo main

}
