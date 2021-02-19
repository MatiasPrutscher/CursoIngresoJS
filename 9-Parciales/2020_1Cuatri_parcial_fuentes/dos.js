/*
Prutscher Matias
1°C
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{

	//Declaracion de variables
	var productosIngresados;
	var cantidadDeBolsasIngresadas;
	var precioPorBolsaIngresado;
	var precioBruto;
	var precioTotalConDescuento;
	var tipoConMasCantidadDeBolsas;
	var tipoMasCaro;
	var porcentaje;
	var respuesta;
	var cantidadDeBolsasTotales;
	var sumaPrecioBruto;
	var descuento;


	//Inicializacion
	respuesta ="si";
	sumaPrecioBruto = 0;
	cantidadDeBolsasTotales = 0;


	//Bucle
	while(respuesta == "si")
	{

		//Toma y validacion datos

		//toma del producto
		productosIngresados = prompt("Ingrese el producto: ", "arena, cal, cemento");
		//Validacion
		while(isNaN(productosIngresados) == false || productosIngresados != "arena" && productosIngresados != "cal" && productosIngresados != "cemento")
		{

			productosIngresados = prompt("Error, reingrese el producto: ", "arena, cal, cemento");

		}//Fin while(productosIngresados != "arena" && productosIngresados != "cal" && productosIngresados != "cemento")

		//Toma de cantidad de bolsas
		cantidadDeBolsasIngresadas = prompt("Ingrese la cantidad de bolsas: ", "mayor que 0");
		//Validacion
		while(isNaN(cantidadDeBolsasIngresadas) == true || cantidadDeBolsasIngresadas < 1)
		{
		
			cantidadDeBolsasIngresadas = prompt("Error, reingrese la cantidad de bolsas: ", "mayor que 0");

		}//Fin while(isNaN(cantidadDeBolsasIngresadas) == true || cantidadDeBolsasIngresadas > 0)
		//Paso de caracter a numero
		cantidadDeBolsasIngresadas = parseInt(cantidadDeBolsasIngresadas);

		//Toma del precio por bolsa
		precioPorBolsaIngresado = prompt("Ingrese el precio por bolsa: ", "Mayor que 0");
		//Validacion
		while(isNaN(precioPorBolsaIngresado) == true || precioPorBolsaIngresado < 1)
		{
		
			precioPorBolsaIngresado = prompt("Error, reingrese el precio por bolsas: ", "mayor que 0");

		}//Fin while(isNaN(precioPorBolsaIngresado) == true || precioPorBolsaIngresado > 0)
		//Paso de caracter a numero
		precioPorBolsaIngresado = parseInt(precioPorBolsaIngresado);


		//Logica
		//Acumulador precio total
		precioBruto = cantidadDeBolsasIngresadas * precioPorBolsaIngresado;

		//acumulador del precio bruto
		sumaPrecioBruto = sumaPrecioBruto + precioBruto;

		//Acumulador total de bolsas
		cantidadDeBolsasTotales = cantidadDeBolsasTotales + cantidadDeBolsasIngresadas;
		

		//Continuidad del while
		respuesta = prompt("Desea seguir ingresando datos? ", "si");

	}//Fin while(respuesta == "si")

	if(cantidadDeBolsasTotales < 10)
	{

		porcentaje = 0;

	}//Fin if(cantidadDeBolsasTotales < 10)
	else
	{
		if(cantidadDeBolsasTotales < 30)
		{

			porcentaje = 25/100;

		}//Fin if(cantidadDeBolsasTotales < 30)
		else
		{

			porcentaje = 25/100;

		}//Fin else if(cantidadDeBolsasTotales < 30)

	}//Fin else if(cantidadDeBolsasTotales < 10)


	//precio con descuento
	descuento = sumaPrecioBruto * (porcentaje);
	precioTotalConDescuento = sumaPrecioBruto - descuento;



	//Muestra de datos
	document.write("El precio bruto total es de: $" + sumaPrecioBruto);
	document.write("<br>El precio total con el descuento aplicado es de: $" + precioTotalConDescuento);
	document.write("<br>El tipo con mas cantidad de bolsas es: " + tipoConMasCantidadDeBolsas);
	document.write("<br>El tipo mas caro es: " + tipoMasCaro);


}//Fin de funcion
