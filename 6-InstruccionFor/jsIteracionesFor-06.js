/*
Prutscher Matias
1°C
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
function mostrar()
{
	//Declaracion de variables
	var numeroPedido;
	var contador;
	var contadorDeNumerosPares;

	//Inicializacion 
	contadorDeNumerosPares = 0;

	//toma y validacion de datos
	numeroPedido = prompt("Ingrese un numero mayor a 0: ", "10");
	while(isNaN(numeroPedido) == true || numeroPedido < 1)
	{

		numeroPedido = prompt("Error, reingrese un numero mayor a 0: ", "10");

	}//Fin while(isNaN(numeroPedido) == true || numeroPedido < 1)

	//Logica
	for(contador = 0; contador < numeroPedido ; contador++)
	{

		if((contador + 1) % 2 == 0)
		{

			document.write((contador+1) +"<br>");
			contadorDeNumerosPares++;

		}//Fin if((contador + 1) % 2 == 0)

	}//Fin for(contador = 0; contador < numeroPedido ; contador++)


	document.write("El total de pares de es: " + contadorDeNumerosPares);


}//FIN DE LA FUNCIÓN