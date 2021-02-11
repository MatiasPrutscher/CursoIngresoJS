/*
Prutscher Matias 
1°C
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	//Declaraciond de variables
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	//Inicializacion de variables
	contador=0;
	acumulador=0;
	respuesta='si';

	while(respuesta == "si")
	{
		contador++;
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = numeroIngresado + acumulador;
		respuesta = prompt("Desea seguir ingresando numeros? ");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN