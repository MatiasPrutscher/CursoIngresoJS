/*
Prutscher Matias
1°C
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.
*/
function mostrar()
{
	//Declaracion de variables
	var marca;
	var peso;
	var temperatura;
	var respuesta;
	var temperaturasPares;
	var marcaProductoMasPesado;
	var productosConservadosAMenosDe0Grados;
	var promedioDePeso;
	var pesoMaximo;
	var pesoMinimo;
	var banderaDelPrimero;
	var contador;
	var pesoTotal;

	//Inicializacion de variables
	respuesta = "si";
	banderaDelPrimero = 0;
	temperaturasPares = 0;
	contador = 0;
	productosConservadosAMenosDe0Grados = 0;


	//Inicio del bucle hasta que el usuario quiera 
	while(respuesta == "si")
	{

		//Toma de la marca
		marca = prompt("Ingrese la marca: ", "pepito");

		//Toma del peso
		peso = prompt("Ingrese el peso del producto: ", "Entre 1 y 100");

		//Validacion del peso
		while(isNaN(peso) == true || peso < 1 || peso > 100)
		{	

			peso = prompt("Error, reingrese el peso del producto: ", "Entre 1 y 100");

		}//Fin while(isNaN(peso) == true || peso < 1 || peso > 100)

		//Paso de caracter a entero
		peso = parseFloat(peso);

		//Tomo temperatura
		temperatura = prompt("Ingrese la temperatura: ", "De -30 a 30 grados");

		//Validacion de la temperatura
		while(isNaN(temperatura) == true || temperatura < -30 || temperatura >30)
		{

			temperatura = prompt("Error, reingrese la temperatura: ", "De -30 a 30 grados");

		}//Fin while(isNaN(temperatura) == true || temperatura < -30 || temperatura >30)

		//Paso de caracter a entero
		temperatura = parseInt(temperatura);

		//Fin toma de datos y validaciones

		//Logica

		if(banderaDelPrimero == 0)
		{

			marcaProductoMasPesado = marca;
			pesoMaximo = peso;
			pesoMinimo = peso;
			banderaDelPrimero = 1;
			pesoTotal = peso;

		}//Fin if(banderaDelPrimero == 0)
		else
		{

			if(peso > pesoMaximo)
			{

				pesoMaximo = peso;
				marcaProductoMasPesado = marca;

			}//Fin if(peso > pesoMaximo)
			else
			{
				if(peso < pesoMinimo)
				{

					pesoMinimo = peso;

				}//Fin if(peso < pesoMinimo)

			}//Fin else if(peso > pesoMaximo)

			//suma del peso total
			pesoTotal = pesoTotal + peso;

		}//Fin else if(banderaDelPrimero == 0)


		if((temperatura%2)==0)
		{

			temperaturasPares++;

		}//Fin if((temperatura%2)==0)

		if(temperatura < 0)
		{
			productosConservadosAMenosDe0Grados++;
		}

		contador++;



		respuesta = prompt("Desea seguir ingresando? ", "si");

	}//Fin while(respuesta != "si")

	promedioDePeso = pesoTotal / contador;
	//Ajuste decimales
	promedioDePeso = promedioDePeso.toFixed(2);

	//Fin de logica

	//Muestra de mensajes

	document.write("La cantidad de temperaturas pares: " + temperaturasPares);
	document.write("<br>La marca del producto más pesado: " + marcaProductoMasPesado);
	document.write("<br>La cantidad de productos que se conservan a menos de 0 grados: " + productosConservadosAMenosDe0Grados);
	document.write("<br>El promedio del peso de todos los productos: " + promedioDePeso);
	document.write("<br>El peso máximo: " + pesoMaximo);
	document.write("<br>El peso mínimo: " + pesoMinimo);


}//Fin de funcion
