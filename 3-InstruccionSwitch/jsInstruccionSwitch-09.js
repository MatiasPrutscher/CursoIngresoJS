/*
Prutscher Matias 
1°C
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y
Cordoba tiene el precio sin descuento*/
//ID txtIdEstacion		txtIdDestino
function mostrar()
{
	//Declaracion de variables
	var estacionIngresada; 
	var destino;
	var tarifa;
	var porcentaje;
	var precioFinal;

	//Tomo datos
	estacionIngresada =document.getElementById('txtIdEstacion').value;
	destino = document.getElementById('txtIdDestino').value;

	//Defino valor de la tarifa
	tarifa = 15000;

	//switch para determinar el porcentaje
	switch(estacionIngresada)
	{
		case "Invierno":
		case "Verano":
			//switch define el destino
			switch(destino)
			{
				case "Bariloche":
				case "Mar del plata":
					porcentaje = 20;
					break;

				default:
					porcentaje = 10;
					break;
			}//Fin switch(destino)
			break;
		
		default:
			switch(destino)
			{
				case "Cordoba":
					porcentaje = 0;
					break;

				default:
					porcentaje = 10;
					break;
			}//Fin switch(destino)

	}//Fin switch(estacionIngresada)

	//If para corregir porcentaje negativo
	if(estacionIngresada == "Invierno" && destino == "Mar del plata")
	{

		porcentaje = porcentaje * -1;

	}//Fin if(estacionIngresada == "Invierno" && destino == "Mar del plata")
	else
	{
		if(estacionIngresada == "Verano" && destino == "Bariloche")
		{

			porcentaje = porcentaje * -1;

		}//Fin if(estacionIngresada == "Verano" && destino == "Bariloche")

	}//Fin else if(estacionIngresada == "Invierno" && destino == "Mar del plata")

	//Realizacion de calculos
	porcentaje = tarifa * (porcentaje/100);
	precioFinal = tarifa + porcentaje;

	alert("El precio seria de: " + precioFinal);

}//FIN DE LA FUNCIÓN