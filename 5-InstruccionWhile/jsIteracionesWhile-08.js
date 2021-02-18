/*
Prutscher Matias
1°C
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{	
	//Declaracion de variables
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numeroIngresado;
	var bandera;

	//Inicializacion de variables
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';
	bandera = 0;

	while(respuesta == "si")
	{
		
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado > 0)
		{
			sumaPositivos = sumaPositivos + numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
			bandera = 1;
		}

		respuesta = prompt("Desea seguir ingresando? ");
	}
	if(bandera == 0)
	{
		multiplicacionNegativos = 0;
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN