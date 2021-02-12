/*
Prutscher Matias
1°C
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	

	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");

		numeroIngresado = parseInt(numeroIngresado);

		if(banderaDelPrimero == "es el primero")
		{
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = "No es el primero...";

		}//Fin if(banderaDelPrimero == "es el primero")
		else
		{
			if(numeroIngresado > numeroMaximo)
			{

				numeroMaximo = numeroIngresado;

			}//Fin if(numeroIngresado > numeroMaximo)

			else
			{
				if(numeroIngresado < numeroMinimo)
				{

					numeroMinimo = numeroIngresado;

				}//Fin if(numeroIngresado < numeroMinimo)

			}//Fin else if(numeroIngresado > numeroMaximo)

		}//Fin else if(banderaDelPrimero == "es el primero")

		


		respuesta=prompt("desea continuar?");

	}//Fin while(respuesta=="si")

	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN