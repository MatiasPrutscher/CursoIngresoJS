/*
Prutscher Matias
1°C
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	//Declaracion de variables
	var contador;
	var acumulador;
	var numeroIngresado;

	//Inicializacion de variables
	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		contador++;
		numeroIngresado = prompt("Ingrese un numero: " + contador);
		while(isNaN(numeroIngresado) == true)
		{
			numeroIngresado = prompt("Error, ingrese un numero: " + contador);
		}
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
	}
	
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN