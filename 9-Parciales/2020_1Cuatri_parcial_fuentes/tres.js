/*
Prutscher Matias
1°C
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
function mostrar()
{	
	//Declaracion de variables
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var respuesta;
	var nombreDeLaPersonaConMayorTemperatura;
	var mayorTemperatura;
	var banderaMayorTemperatura;
	var contadorMayoresDeEdadViudos;
	var contadorHombresSolteros;
	var sumaEdadHombresSolteros;
	var contadorHombresViudos;
	var contadorPersonasDeLaTerceraEdadConMasDe38Grados;
	var sumaSolterosYViudos;


	//Inicializacion de variables
	respuesta = "si";
	banderaMayorTemperatura = 0;
	contadorMayoresDeEdadViudos = 0;
	contadorHombresSolteros = 0;
	contadorHombresViudos = 0;
	sumaEdadHombresSolteros = 0;
	contadorPersonasDeLaTerceraEdadConMasDe38Grados = 0;


	while(respuesta == "si")
	{

		//Toma de datos y validacion
		//Toma y validacion nombre
		nombreIngresado = prompt("Ingrese el nombre: ", "Natalia Natalia");
		while(isNaN(nombreIngresado)==false)
		{

			nombreIngresado = prompt("Error, reingrese el nombre: ", "Natalia Natalia");

		}//Fin Toma y validacion nombre

		//Toma y validacion edad
		edadIngresada = prompt("Ingrese la edad: ", "mayor a 0");
		while(isNaN(edadIngresada)==true || edadIngresada < 1)
		{

			edadIngresada = prompt("Error, reingrese la edad: ", "mayor a 0");

		}//Fin Toma y validacion edad

		//Fin Toma y validacion sexo
		sexoIngresado = prompt("Ingrese el sexo: ", "f para femenino, m para masculino");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{

			sexoIngresado = prompt("Error, reingrese el sexo: ", "f para femenino, m para masculino");

		}//Fin toma y validacion sexo


		//Toma y validacion estado civil
		estadoCivilIngresado = prompt("Ingrese el estado civil: ", "soltero, casado o viudo");
		while(isNaN(estadoCivilIngresado) == false || estadoCivilIngresado != "soltero" && estadoCivilIngresado != "casado" && estadoCivilIngresado != "viudo")
		{

			estadoCivilIngresado = prompt("Error, reingrese el estado civil: ", "soltero, casado o viudo");

		}//Fin Toma y validacion estado Civil


		//Toma y validacion temperatura
		temperaturaCorporalIngresada = prompt("Ingrese la temperatura corporal: ", "37");
		while(isNaN(temperaturaCorporalIngresada) == true)
		{

			temperaturaCorporalIngresada = prompt("Error, reingrese la temperatura corporal: ", "37");

		}//Fin Toma y validacion temperatura

		respuesta = prompt("Desea seguir ingresando datos?", "si");

		//logica

		//a) El nombre de la persona con mas temperatura.
		if(banderaMayorTemperatura == 0)
		{

			mayorTemperatura = temperaturaCorporalIngresada;
			nombreDeLaPersonaConMayorTemperatura = nombreIngresado;
			banderaMayorTemperatura = 1;

		}//Fin if(banderaMayorTemperatura == 0)
		else
		{

			if(mayorTemperatura < temperaturaCorporalIngresada)
			{

				mayorTemperatura = temperaturaCorporalIngresada;
				nombreDeLaPersonaConMayorTemperatura = nombreIngresado;

			}//Fin if(mayorTemperatura < temperaturaCorporalIngresada)

		}//Fin else if(banderaMayorTemperatura == 0)


		//b) Cuantos mayores de edad estan viudos
		if(edadIngresada > 17 edadIngresada < 60)
		{

			if(estadoCivilIngresado == "viudo")
			{

				contadorMayoresDeEdadViudos++;

			}//Fin if(estadoCivilIngresado == "viudo")

		}//Fin if(edadIngresada > 17)
		else
		{
			//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			if(edadIngresada > 60)
			{

				if(temperaturaCorporalIngresada > 38)
				{

					contadorPersonasDeLaTerceraEdadConMasDe38Grados++;

				}//Fin if(temperaturaCorporalIngresada > 38)

			}//Fin if(edadIngresada > 60)

		}//Fin else if(edadIngresada > 17 edadIngresada < 60)


		//c) La cantidad de hombres que hay solteros o viudos. e) El promedio de edad entre los hombres solteros.
		if(sexoIngresado == "m")
		{

			switch(estadoCivilIngresado)
			{

				case "viudo":
					contadorHombresViudos++;
					break;

				case "soltero":
					contadorHombresSolteros++;
					sumaEdadHombresSolteros = sumaEdadHombresSolteros + edadIngresada;
					break;

			}

		}//Fin if(sexoIngresado == "m")

	}//Fin while(respuesta == "si")

	sumaSolterosYViudos = contadorHombresSolteros + contadorHombresViudos;


	//Muestra de datos
	/*El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/
	document.write("La persona de mayor temperatura es: " + nombreDeLaPersonaConMayorTemperatura);
	document.write("Cantidad de hombres solteros o viudos: " + sumaSolterosYViudos);


}//Fin de la funcion
