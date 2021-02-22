/*
Prutscher Matias
1°C
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	var contador;
	var respuesta;

	//Logica
	for(contador = 0; ; contador++)
	{

		respuesta = prompt("Ingrese BREAK para finalizar: ", "BREAK");
		if(respuesta == "BREAK")
		{

			break;

		}//Fin if(respuesta == "BREAK")



	}//Fin for(contador = 0; ; contador++)


}//FIN DE LA FUNCIÓN