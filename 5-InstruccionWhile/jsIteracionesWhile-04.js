/*
Prutscher Matias
1°C
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{	
	//Declaracion de variables
	var numeroIngresado;

	// Toma de datos
	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while(numeroIngresado < 0 || numeroIngresado > 9)
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	}

	
}//FIN DE LA FUNCIÓN