/*
Prutscher Matias
1°C
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/
function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;

	numeroIngresado = prompt("Ingrese un numero: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )

	for(contador = 0; contador < numeroIngresado ;contador++)
	{

		if(numeroIngresado % (contador+1)  == 0)
		{

			document.write((contador+1) + "<br>");

		}//Fin if(numeroIngresado % (contador+1)  == 0)

	}//Fin for(contador = 0; contador < numeroIngresado ;contador++)


}//FIN DE LA FUNCIÓN