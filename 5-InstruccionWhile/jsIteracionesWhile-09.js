/*
Prutscher Matias
1°C
Al presionar el botón pedir nombre y edades  hasta que el usuario quiera,
mostrar nombre de la edad máxima y nombre de la edad mínima ingresado.*/
function mostrar()
{	

	// declarar variables
	var banderaDelPrimero;
	var nombreIngresado;
	var edadIngresada;
	var nombreIngresadoPersonaMasVieja;
	var nombreIngresadoPersonaMasJoven;
	var edadPersonaMasVieja;
	var edadPersonaMasJoven;
	var respuesta;
	
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	

	while(respuesta=="si")
	{

		//Toma del nombreIngresado
		nombreIngresado = prompt("Ingrese su nombreIngresado: ", "Natalia Natalia");

		//Toma de la edad
		edadIngresada = prompt("Ingrese su edad: ", "De 1 a 100");

		//Validacion de la edad ingresada
		while(isNaN(edadIngresada) == true || edadIngresada < 1 || edadIngresada >100)
		{
			edadIngresada = prompt("Error, Reingrese su edad: ", "De 1 a 100");
		}//Fin while(isNaN(edadIngresada) == true || edadIngresada < 1 || edadIngresada >100)

		//Paso de caracter a entero
		edadIngresada = parseInt(edadIngresada);


		if(banderaDelPrimero == "es el primero")
		{
			edadPersonaMasVieja = edadIngresada;
			nombreIngresadoPersonaMasVieja = nombreIngresado;
			edadPersonaMasJoven = edadIngresada;
			nombreIngresadoPersonaMasJoven = nombreIngresado;

			banderaDelPrimero = "No es el primero...";

		}//Fin if(banderaDelPrimero == "es el primero")
		else
		{
			if(edadIngresada > edadPersonaMasVieja)
			{

				edadPersonaMasVieja = edadIngresada;
				nombreIngresadoPersonaMasVieja = nombreIngresado;

			}//Fin if(edadIngresada > edadPersonaMasVieja)

			else
			{
				if(edadIngresada < edadPersonaMasJoven)
				{

					edadPersonaMasJoven = edadIngresada;
					nombreIngresadoPersonaMasJoven = nombreIngresado;

				}//Fin if(edadIngresada < edadPersonaMasJoven)

			}//Fin else if(edadIngresada > edadPersonaMasVieja)

		}//Fin else if(banderaDelPrimero == "es el primero")

		


		respuesta=prompt("desea continuar?");

	}//Fin while(respuesta=="si")

	document.getElementById('txtIdMaximo').value= nombreIngresadoPersonaMasVieja + " " + edadPersonaMasVieja;
	document.getElementById('txtIdMinimo').value= nombreIngresadoPersonaMasJoven + " " + edadPersonaMasJoven;

}//FIN DE LA FUNCIÓN