/*
Prutscher Matias
1°C
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/

function mostrar()
{
	//Declaracion de variables
	var contador;
	var productoIngresado;
	var precioIngresado;
	var cantidad;
	var marcaIngresada;
	var fabricante;
	var alcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var mayorCantidadDeUnidades;
	var cantidadDeJabonEnTotal;
	var cantidadDeAlcoholEnTotal;
	var cantidadDeBarbijoEnTotal;
	var promedioPorCompra;
	var tipoConMasUnidades;
	var contadorAlcohol;
	var contadorBarbijo;
	var contadorJabon;
	var dividendo;

	//Inicializacion de variables
	contador = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;

	//while para realizar las 5 repeticiones
	while(contador < 5)
	{

		//Toma de informacion y validacion de la misma


		//Toma del productoIngresado
		productoIngresado = prompt("Ingrese el producto de prevención de contagio: ", "barbijo , jabon o alcohol");
		//validacion "barbijo" , "jabon" o "alcohol"
		while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")
		{

			productoIngresado = prompt("Error, reingrese el producto de prevención de contagio: ", "barbijo , jabon o alcohol");

		}//Fin while(productoIngresado != "barbijo" && productoIngresado != "jabon" && productoIngresado != "alcohol")

		//Toma del precioIngresado
		precioIngresado = prompt("Ingrese el precio: ", "Entre 100 y 300");
		//validacion del precioIngresadon
		while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		{

			precioIngresado = prompt("Error, reingrese el precio: ", "Entre 100 y 300");

		}//Fin while(isNaN(precioIngresado) == true || precioIngresado < 100 || precioIngresado > 300)
		//Paso de caracter a entero
		precioIngresado = parseInt(precioIngresado);

		//Toma de la cantidad
		cantidad = prompt("Ingrese la cantidad de unidades: ", "Entre 0 y 1000");
		//Validacion de la cantidad
		while(isNaN(cantidad) == true || cantidad < 0 || cantidad >1000)
		{

			cantidad = prompt("Ingrese la cantidad de unidades: ", "Entre 0 y 1000");

		}//Fin while(isNaN(cantidad) == true || cantidad < 0 || cantidad >1000)
		//Paso de caracter a entero
		cantidad = parseInt(cantidad);

		//Toma de la marcaIngresada
		marcaIngresada = prompt("Ingrese la marca: ", "3M");

		//Toma del fabricante
		fabricante = prompt("Ingrese el fabricante: ", "Anmat");

		//Contador++ hasta 5
		contador++;



		//Logica

		switch(productoIngresado)
		{

			case "alcohol":
				

					if(contadorAlcohol == 0)
					{

						cantidadAlcoholMasBarato = cantidad;
						fabricanteAlcoholMasBarato = fabricante;
						alcoholMasBarato = precioIngresado;
						cantidadDeAlcoholEnTotal = cantidad;
						//banderaDelPrimeroAlcohol = 1;
						contadorAlcohol++;

					}//Fin if(contadorAlcohol == 0)
					else
					{

						if(alcoholMasBarato > precioIngresado)
						{

							alcoholMasBarato = precioIngresado;
							fabricanteAlcoholMasBarato = fabricante;
							cantidadAlcoholMasBarato = cantidad;
							contadorAlcohol++;

						}//Fin if(alcoholMasBarato > precioIngresado)

					}//Fin else if(banderaDelPrimeroAlcohol == 0)

				break;

			case "jabon":
				if(contadorJabon == 0)
				{

					cantidadDeJabonEnTotal = cantidad;
					//banderaDelPrimeroJabon = 1;
					contadorJabon++;

				}//Fin if(banderaDelPrimeroJabon == 0)
				else
				{

					cantidadDeJabonEnTotal = cantidadDeJabonEnTotal + cantidad;
					contadorJabon++;

				}//Fin if(banderaDelPrimeroJabon == 0)
				break;

			default: 
				if(contadorBarbijo == 0)
				{

					cantidadDeBarbijoEnTotal = cantidad;
					//banderaDelPrimeroBarbijo = 1;
					contadorBarbijo++;

				}//Fin if(banderaDelPrimeroBarbijo = 0)
				else
				{

					cantidadDeBarbijoEnTotal = cantidadDeBarbijoEnTotal + cantidad;
					contadorBarbijo++;

				}//Fin else if(banderaDelPrimeroBarbijo = 0)
				break;


		}//Fin switch(productoIngresado)
		

	}//Fin while(contador < 5)

	if(cantidadDeBarbijoEnTotal > cantidadDeJabonEnTotal || cantidadDeBarbijoEnTotal > cantidadDeAlcoholEnTotal)
	{

		promedioPorCompra = cantidadDeBarbijoEnTotal;
		tipoConMasUnidades = "Barbijo";
		dividendo = contadorBarbijo;

	}
	else
	{

		if(cantidadAlcoholMasBarato > cantidadDeBarbijoEnTotal || cantidadDeAlcoholEnTotal > cantidadDeJabonEnTotal)
		{

			promedioPorCompra = cantidadAlcoholMasBarato;
			tipoConMasUnidades = "Alcohol";
			dividendo = contadorAlcohol;

		}
		else
		{

			promedioPorCompra = cantidadDeJabonEnTotal;
			tipoConMasUnidades = "Jabon";
			dividendo = contadorJabon;

		}

	}

	promedioPorCompra = promedioPorCompra / dividendo;



	//Muestra del mensaje
	document.write("El alcohol mas barato lleva: " + cantidadAlcoholMasBarato + " unidades");
	document.write("<br>El alcohol mas barato es del fabricante: " + fabricanteAlcoholMasBarato);
	document.write("<br>El tipo con mas unidades es: " + tipoConMasUnidades + " y el promedio es de: " + promedioPorCompra);
	document.write("<br>La cantidad de unidades total de jabon es: " + cantidadDeJabonEnTotal);


}//Fin de la funcion
