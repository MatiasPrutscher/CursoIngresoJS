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
	numeroMaximo = 0;
	numeroMinimo = 0;

	while(respuesta=="si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");

		numeroIngresado = parseInt(numeroIngresado);

		if(numeroIngresado > numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado < numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}


		respuesta=prompt("desea continuar?");
	}

	document.getElementById('txtIdMaximo').value=numeroMaximo;
	document.getElementById('txtIdMinimo').value=numeroMinimo;

}//FIN DE LA FUNCIÓN