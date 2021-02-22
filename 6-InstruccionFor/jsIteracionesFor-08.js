/*
Prutscher Matias 
1°C
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.*/

function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;
	var noEsPrimo;

	//Inicializacion
	noEsPrimo = 0;


	//Toma de datos y validacion
	numeroIngresado = prompt("Ingrese un numero a verificar: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero a verificar: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )


	//Logica
	for(contador = numeroIngresado -1; contador >1 ;contador--)
	{

		if((numeroIngresado % contador)  == 0)
		{

			noEsPrimo = 1;
			break;

		}//Fin if(numeroIngresado % (contador+1)  == 0)
		

	}//Fin for(contador = 0; contador < numeroIngresado ;contador++)

	if(noEsPrimo == 0)
	{

		alert("El numero es primo");

	}//Fin if(noEsPrimo == 0)
	else
	{

		alert("El numero no es primo");

	}//Fin else if(noEsPrimo == 0)


}//FIN DE LA FUNCIÓN


/*function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorDivisores;
	contadorDivisores=0;

	numeroIngresado=prompt("ingrese numero a verificar");



	//for(contador=numeroIngresado-1;contador>1;contador--)
	for(contador=2;contador<(numeroIngresado/2);contador++)
	{
		if(numeroIngresado%contador==0)
		{
			//contadorDivisores++;
			break;
		}

	}

	//if(contadorDivisores>0)
	//if(contador!=1)
	if(contador!=((numeroIngresado/2)-1))
	{
		console.log("no es primo");
	}else
	{
		console.log("ES primo");
	}

}//FIN DE LA FUNCIÓN*/



/*function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;
	

	//Toma de datos y validacion
	numeroIngresado = prompt("Ingrese un numero a verificar: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero a verificar: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	numeroIngresado = parseInt(numeroIngresado);


	//Logica
	for(contador = 2; contador < (numeroIngresado/2) ;contador++)
	{

		if((numeroIngresado % contador)  == 0)
		{

			break;

		}//Fin if(numeroIngresado % (contador+1)  == 0)
		

	}//Fin for(contador = 2; contador < (numeroIngresado/2) ;contador++)

	if(contador !=((numeroIngresado/2)-1))
	{

		alert("El numero no es primo");

	}//Fin if(noEsPrimo == 0)
	else
	{

		alert("El numero es primo");

	}//Fin else if(noEsPrimo == 0)


}//FIN DE LA FUNCIÓN*/


/*function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;
	var noEsPrimo;

	//Inicializacion
	noEsPrimo = 0;

	//Toma de datos y validacion
	numeroIngresado = prompt("Ingrese un numero a verificar: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero a verificar: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )


	//Logica
	for(contador = 2; contador < numeroIngresado ;contador++)
	{

		if((numeroIngresado % contador)  == 0)
		{

			noEsPrimo = 1;
			break;

		}//Fin if(numeroIngresado % (contador+1)  == 0)
		

	}//Fin for(contador = 0; contador < numeroIngresado ;contador++)

	if(noEsPrimo == 0)
	{

		alert("El numero es primo");

	}//Fin if(noEsPrimo == 0)
	else
	{

		alert("El numero no es primo");

	}//Fin else if(noEsPrimo == 0)


}//FIN DE LA FUNCIÓN*/

