/*
¨Prutscher Matias
1°C
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	//Declaracion de variables
	var contador;
	var respuesta;

	//Inicio del for
	for(contador = 0; ; contador++)
	{

		//Toma de datos y validacion
		respuesta = prompt("Ingrese el 9: ", "9");
		while(isNaN(respuesta)==true)
		{

			respuesta = prompt("Error, Ingrese un numero: ");

		}//Fin while(isNaN(respuesta)==true)

		//Logica
		if(respuesta == 9)
		{

			break;

		}//Fin if(respuesta == 9)

	}//Fin for(contador = 0; ; contador++)


}//FIN DE LA FUNCIÓN