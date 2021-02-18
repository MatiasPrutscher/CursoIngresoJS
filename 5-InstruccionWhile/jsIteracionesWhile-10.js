/*
Prutscher Matias
1°C
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivo;
	var promedioNegativo;
	var diferenciaEntrePositivosYNegativos;
	var par;
	

	//Inicializacion de variables
	respuesta="si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	promedioPositivo = 0;
	promedioNegativo = 0;
	


	while(respuesta=="si")
	{	

		numeroIngresado = prompt("Ingrese un numero: ");
		while(isNaN(numeroIngresado)==true)
		{

			numeroIngresado = prompt("Error, ingrese un numero: ");
			
		}
		numeroIngresado = parseInt(numeroIngresado);
		par = numeroIngresado % 2;

		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
		}
		else
		{
			if(numeroIngresado < 0)
			{
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++;
			}
			else
			{
				cantidadCeros++;
			}

		}
		if(par == 0)
		{
			cantidadPares++;
		}




		respuesta=prompt("desea continuar?");

	}//fin del while

	promedioPositivo = sumaPositivos / cantidadPositivos;
	promedioNegativo = sumaNegativos / cantidadNegativos;
	diferenciaEntrePositivosYNegativos = sumaPositivos - sumaPositivos;


	document.write("La suma de negativos es: " + sumaNegativos);
	document.write("<br>La suma de positivos es: " + sumaPositivos);
	document.write("<br>La cantidad de positivos es: " + cantidadPositivos);
	document.write("<br>La cantidad de negativos es: " + cantidadNegativos);
	document.write("<br>La cantidad de ceros: " + cantidadCeros);
	document.write("<br>La cantidad de pares: "+ cantidadPares);
	document.write("<br>El promedio positivo es: " + promedioPositivo);
	document.write("<br>El promedio negativo es: " + promedioNegativo);
	document.write("<br>La diferencia entre positivos y negativos es: " + diferenciaEntrePositivosYNegativos);

	/*
	document.write("La suma de negativos es: " + sumaNegativos);
	document.write("<br>");
	document.write("La suma de positivos es: " + sumaPositivos);
	document.write("<br>");
	document.write("La cantidad de positivos es: " + cantidadPositivos);
	document.write("<br>");
	document.write("La cantidad de negativos es: " + cantidadNegativos);
	document.write("<br>");
	document.write("La cantidad de ceros: " + cantidadCeros);
	document.write("<br>");
	document.write("La cantidad de pares: "+ cantidadPares);
	document.write("<br>");
	document.write("El promedio positivo es: " + promedioPositivo);
	document.write("<br>");
	document.write("El promedio negativo es: " + promedioNegativo);
	document.write("<br>");
	document.write("La diferencia entre positivos y negativos es: " + diferenciaEntrePositivosYNegativos);*/

	/*document.write("La suma de negativos es: " + sumaNegativos);
	document.write("\nLa suma de positivos es: " + sumaPositivos);*/

	/*alert("La suma de negativos es: " + sumaNegativos + "\nLa suma de positivos es: " + sumaPositivos);
	alert("La cantidad de positivos es: " + cantidadPositivos +"\nLa cantidad de negativos es: " + cantidadNegativos + "\nLa cantidad de ceros: " + cantidadCeros + "\nLa cantidad de pares: "+ cantidadPares);
	alert("El promedio positivo es: " + promedioPositivo + "\nEl promedio negativo es: " + promedioNegativo);
	alert("La diferencia entre positivos y negativos es: " + diferenciaEntrePositivosYNegativos);*/
	
	
}//FIN DE LA FUNCIÓN