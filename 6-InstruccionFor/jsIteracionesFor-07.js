/*Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania) 
el nombre del país, 
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)   
la temperaruta mínima que se registra en su territorio(entre -50 y 50)  
a)La cantidad de temperaturas pares.  1
b)la cantidad de temperaturas impares de europa  1
c)El nombre del pais con menos habitantes  1
d)la cantidad de paises que superan los 40 grados. 1 
e)la cantidad de paises de america que tienen menos de 0 grados .  1
f)el promedio de habitantes entre los paises ingresados .  1  
g)el promedio de habitantes entre los paises que superan los 40 grados  1        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.  1*/

function mostrar()
{
	//Declaracion de variables
	var paisIngresado;
	var continenteIngresado;
	var cantidadDeHabitantesIngresados;
	var nivelDePobrezaIngresado;
	var temperaturaMinimaRegistradaIngresada;
	var temperaturasPares;
	var temperaturasImpares;
	var contador;
	var nombrePaisConMenosHabitantes;
	var cantidadDeHabitantesDelPaisConMenosCantidadDeHabitantes;
	var cantidadDePaisesAmericanosConMenosDe0GradosDeTemperatura;
	var cantidadDePaisesConMasDe40Grados;
	var habitantesAmerica;
	var habitantesAsia;
	var habitantesEuropa;
	var habitantesAfrica;
	var habitantesOceania;
	var cantidadDeHabitantesEnPaisesDeMasDe40Grados;
	var habitantesDePaisesConMasDe40Grados;
	var promedioDeHabitantes;
	var sumaDeHabitantes;
	var continenteConMasHabitantes;
	var cantidadDeHabitantesDelPaisConMasCantidadDeHabitantes;
	var promedioDeHabitantesConMasDe40Grados;
	var temperaturaMinima;
	var paisConLaTemperaturaMinima;


	//Inicializacion de variables
	temperaturasPares = 0;
	temperaturasImpares = 0;
	cantidadDePaisesAmericanosConMenosDe0GradosDeTemperatura = 0;
	cantidadDePaisesConMasDe40Grados = 0;
	habitantesAmerica = 0;
	habitantesAsia = 0;
	habitantesEuropa = 0;
	habitantesAfrica = 0;
	habitantesOceania = 0;
	cantidadDeHabitantesDelPaisConMasCantidadDeHabitantes = 0;
	cantidadDeHabitantesEnPaisesDeMasDe40Grados = 0;

	for(contador = 0; contador < 5; contador++)
	{
		//Toma de datos y validaciones
		continenteIngresado = prompt("Ingrese un continente: ", "america , asia , europa ,africa y oceania");
		while(isNaN(continenteIngresado) == false || continenteIngresado != "america" && continenteIngresado != "asia" && continenteIngresado != "europa" && continenteIngresado != "africa" && continenteIngresado != "oceania")
		{

			continenteIngresado = prompt("Error, reingrese un continente: ", "america , asia , europa ,africa y oceania");

		}

		paisIngresado = prompt("Ingrese el pais: ", "argentina");
		while(isNaN(paisIngresado) == false)
		{

			paisIngresado = prompt("Error, reingrese el pais: ", "argentina");

		}

		cantidadDeHabitantesIngresados = prompt("Ingrese la cantidad de habitantes en millones: ", "Entre 1 y 7000");
		while(isNaN(cantidadDeHabitantesIngresados) == true || cantidadDeHabitantesIngresados < 1 || cantidadDeHabitantesIngresados >7000)
		{

			cantidadDeHabitantesIngresados = prompt("Error, reingrese la cantidad de habitantes en millones: ", "Entre 1 y 7000");

		}
		cantidadDeHabitantesIngresados = parseInt(cantidadDeHabitantesIngresados);

		nivelDePobrezaIngresado = prompt("Ingrese el nivel de pobreza: ", "pobre, rico , muy rico");
		while(isNaN(nivelDePobrezaIngresado)== false || (nivelDePobrezaIngresado!= "pobre" && nivelDePobrezaIngresado!= "rico" && nivelDePobrezaIngresado != "muy rico") || (continenteIngresado == "europa" && nivelDePobrezaIngresado == "pobre"))
		{

			nivelDePobrezaIngresado = prompt("Error, reingrese el nivel de pobreza: ", "pobre, rico , muy rico");

		}

		temperaturaMinimaRegistradaIngresada = prompt("Ingrese la temperaruta mínima que se registra en su territorio: ", "entre -50 y 50");
		while(isNaN(temperaturaMinimaRegistradaIngresada) == true || temperaturaMinimaRegistradaIngresada < -50 || temperaturaMinimaRegistradaIngresada > 50)
		{

			temperaturaMinimaRegistradaIngresada = prompt("Error, reingrese la temperaruta mínima que se registra en su territorio: ", "entre -50 y 50");

		}
		
		//Logica
		if(temperaturaMinimaRegistradaIngresada % 2 == 0)
		{

			temperaturasPares++;

		}//Fin if(temperaturaMinimaRegistradaIngresada % 2 == 0)

		if(temperaturaMinimaRegistradaIngresada > 40)
		{

			cantidadDePaisesConMasDe40Grados++;
			cantidadDeHabitantesEnPaisesDeMasDe40Grados = cantidadDeHabitantesEnPaisesDeMasDe40Grados + cantidadDeHabitantesIngresados;

		}

		
		if(contador == 0)
		{

			nombrePaisConMenosHabitantes = paisIngresado;
			cantidadDeHabitantesDelPaisConMenosCantidadDeHabitantes = cantidadDeHabitantesIngresados;
			temperaturaMinima = temperaturaMinimaRegistradaIngresada;
			paisConLaTemperaturaMinima = paisIngresado;


		}//Fin if(contador == 0)
		else
		{

			if(cantidadDeHabitantesDelPaisConMenosCantidadDeHabitantes > cantidadDeHabitantesIngresados)
			{

				nombrePaisConMenosHabitantes = paisIngresado;
				cantidadDeHabitantesDelPaisConMenosCantidadDeHabitantes = cantidadDeHabitantesIngresados;

			}//Fin if(cantidadDeHabitantesDelPaisConMenosCantidadDeHabitantes > cantidadDeHabitantesIngresados)

			if(temperaturaMinima > temperaturaMinimaRegistradaIngresada)
			{

				temperaturaMinima = temperaturaMinimaRegistradaIngresada;
				paisConLaTemperaturaMinima = paisIngresado;

			}//Fin if(temperaturaMinima > temperaturaMinimaRegistradaIngresada)

		}//Fin else if(contador == 0)

		switch(continenteIngresado)
		{

			case "europa":
				if(temperaturaMinimaRegistradaIngresada % 2 != 0)
				{

					temperaturasImpares++;

				}
				habitantesEuropa = habitantesEuropa + cantidadDeHabitantesIngresados;
				break;

			case "america":
				if(temperaturaMinimaRegistradaIngresada < 0)
				{

					cantidadDePaisesAmericanosConMenosDe0GradosDeTemperatura++;

				}
				habitantesAmerica = habitantesAmerica + cantidadDeHabitantesIngresados;
				break;

			case "asia":
				habitantesAsia = habitantesAsia + cantidadDeHabitantesIngresados;
				break;

			case "africa":
				habitantesAfrica = habitantesAfrica + cantidadDeHabitantesIngresados;
				break;

			case "oceania":
				habitantesOceania = habitantesOceania + cantidadDeHabitantesIngresados;
				break;
		}

	}//Fin for(contador = 0; contador < 5; contador++)

	if(habitantesEuropa > habitantesAmerica || habitantesEuropa > habitantesOceania || habitantesEuropa > habitantesAsia || habitantesEuropa > habitantesAfrica)
	{

		continenteConMasHabitantes = "Europa";

	}//Fin if(habitantesEuropa > habitantesAmerica || habitantesEuropa > habitantesOceania || habitantesEuropa > habitantesAsia || habitantesEuropa > habitantesAfrica)
	else
	{

		if(habitantesAmerica > habitantesAfrica || habitantesAmerica > habitantesOceania || habitantesAmerica > habitantesAsia)
		{

			continenteConMasHabitantes = "America";

		}//Fin f(habitantesAmerica > habitantesAfrica || habitantesAmerica > habitantesOceania || habitantesAmerica > habitantesAsia)
		else
		{

			if(habitantesAsia > habitantesAfrica || habitantesAsia >  habitantesOceania)
			{

				continenteConMasHabitantes = "asia";

			}//Fin if(habitantesAsia > habitantesAfrica || habitantesAsia >  habitantesOceania)
			else
			{

				if(habitantesAfrica > habitantesOceania)
				{

					continenteConMasHabitantes = "Africa";

				}//FIn if(habitantesAfrica > habitantesOceania)
				else
				{

					continenteConMasHabitantes = "Oceania";

				}//Fin else if(habitantesAfrica > habitantesOceania)

			}//Fin else if(habitantesAsia > habitantesAfrica || habitantesAsia >  habitantesOceania)

		}//Fin else f(habitantesAmerica > habitantesAfrica || habitantesAmerica > habitantesOceania || habitantesAmerica > habitantesAsia)

	}//Fin else if(habitantesEuropa > habitantesAmerica || habitantesEuropa > habitantesOceania || habitantesEuropa > habitantesAsia || habitantesEuropa > habitantesAfrica)

	sumaDeHabitantes = habitantesOceania + habitantesAfrica + habitantesAsia + habitantesAmerica + habitantesEuropa;
	promedioDeHabitantes = sumaDeHabitantes / contador;
	promedioDeHabitantesConMasDe40Grados = cantidadDeHabitantesEnPaisesDeMasDe40Grados / cantidadDePaisesConMasDe40Grados;



	document.write("La cantidad de temperaturas pares es :" + temperaturasPares);
	document.write("<br>La cantidad de temperaturas impares es: " + temperaturasImpares);
	document.write("<br>El nombre del pais con menos habitantes" + cantidadDeHabitantesDelPaisConMenosCantidadDeHabitantes);
	document.write("<br>La cantidad de paises que superan los 40 grados: " + cantidadDePaisesConMasDe40Grados);
	document.write("<br>La cantidad de paises de america que tienen menos de 0 grados: " + cantidadDePaisesAmericanosConMenosDe0GradosDeTemperatura);
	document.write("<br>El promedio de habitantes entre los paises ingresados: " + promedioDeHabitantes);
	document.write("<br>el promedio de habitantes entre los paises que superan los 40 grados: " + promedioDeHabitantesConMasDe40Grados);
	document.write("<br>La temperatura mínima ingresada es: " + temperaturaMinima + " y nombre del pais que registro esa temperatura: " + paisConLaTemperaturaMinima);
	document.write("<br>Que continente tiene mas habitantes: " + continenteConMasHabitantes);
/*a)La cantidad de temperaturas pares.  1
b)la cantidad de temperaturas impares de europa  1
c)El nombre del pais con menos habitantes  1
d)la cantidad de paises que superan los 40 grados. 1 
e)la cantidad de paises de america que tienen menos de 0 grados .  1
f)el promedio de habitantes entre los paises ingresados .  1  
g)el promedio de habitantes entre los paises que superan los 40 grados  1        
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura. 
i) que continente tiene mas habitantes.  1*/

}//Fin function mostrar()





















/*
Prutscher Matias
1°C
al presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados.*/
/*function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;

	numeroIngresado = prompt("Ingrese un numero: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )

	for(contador = 0; contador < numeroIngresado ;contador++)
	{

		if(numeroIngresado % (contador+1)  == 0)
		{

			document.write((contador+1) + "<br>");

		}//Fin if(numeroIngresado % (contador+1)  == 0)

	}//Fin for(contador = 0; contador < numeroIngresado ;contador++)


}//FIN DE LA FUNCIÓN*/