/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano

*/function mostrar()
{

	//Declaracion de variables
	var tipoDeMascota;
	var tipoDePelaje;
	var edadDeLaMascota;
	var nombreDeLaMascota;
	var razaDeLaMascota;
	var pesoDeLaMascota;
	var estadoClinico;
	var temperaturaCorporal;
	var respuesta;
	var perroMasPesado;
	var banderaPerroMasPesado;
	var pesoPerroMasPesado;
	var contadorDeEnfermos;
	var contador;
	var porcentajeDeEnfermos;
	var nombreDeOtraCosa;
	var menorTemperaturaCorporalParaAnimalSinPelo;
	var banderaTemperaturaSinPelo;
	var nombreDeLaMascotaConMenorTemperaturaSinPelo;
	var tipoDeAnimalConMenorTemperaturaSinPelo;
	var acumuladorTemperaturaGatos;
	var acumuladorTemperaturaPerros;
	var acumuladorTemperaturaOtraCosa;
	var contadorDePerros;
	var contadorDeGatos;
	var contadorDeOtraCosa;
	var porcentajeDeTemperaturaGatos;
	var porcentajeDeTemperaturaPerros;
	var porcentajeDeTemperaturaOtraCosa;
	var sumaDeGatosYPerros;
	var porcentajeDeGatosYPerros;
	var tipoDeMascotaConMayorPromedio;
	var estadoClinicoConMenorCantidadDeMascotas;
	var contadorDeAdopciones;
	var contadorDeInternados;
	var sumaTotalDelPeso;
	var promedioDeKilosDelPesoTotal;
	var nombreDelGatoSinPeloMasLiviano;
	var razaDelGatoSinPoloMasLiviano;
	var pesoDeGatoSinPeloMasLiviano;
	var banderaDeGatosSinPeloMasLiviano;



	//Inicializacion de variables
	banderaPerroMasPesado = 0;
	contadorDeEnfermos = 0;
	banderaTemperaturaSinPelo = 0;
	contadorDePerros = 0;
	contadorDeGatos = 0;
	contadorDeOtraCosa = 0;
	contadorDeAdopciones = 0;
	contadorDeInternados = 0;
	banderaDeGatosSinPeloMasLiviano = 0;




	//Toma de validacion de datos
	for(contador = 0; ;contador++)
	{

		tipoDeMascota = prompt("Ingrese el tipo de mascota: ", " gato, perro, 'otra cosa'");
		while(isNaN(tipoDeMascota) == false || tipoDeMascota != "gato" && tipoDeMascota != "perro" && tipoDeMascota != "otra cosa")
		{

			tipoDeMascota = prompt("Error, reingrese el tipo de mascota: ", " gato, perro, 'otra cosa'");

		}

		tipoDePelaje = prompt("Ingrese el tipo de pelaje: ", "corto, largo , sin pelo");
		while(isNaN(tipoDePelaje) == false || tipoDePelaje != "corto" && tipoDePelaje != "largo" && tipoDePelaje != "sin pelo")
		{

			tipoDePelaje = prompt("Error, reingrese el tipo de pelaje: ", "corto, largo , sin pelo");

		}

		edadDeLaMascota = prompt("Ingrese la edad de la mascota: ", "mayor a 0");
		while(isNaN(edadDeLaMascota) == true || edadDeLaMascota < 1)
		{

			edadDeLaMascota = prompt("Error, reingrese la edad de la mascota: ", "mayor a 0");

		}

		nombreDeLaMascota = prompt("Ingrese el nombre de la mascota: ", "pepito");
		while(isNaN(nombreDeLaMascota) == false)
		{

			nombreDeLaMascota = prompt("Error, reingrese el nombre de la mascota: ", "pepito");

		}

		razaDeLaMascota = prompt("Ingrese la raza: ", "ovejero aleman");
		while(isNaN(razaDeLaMascota) == false)
		{

			razaDeLaMascota = prompt("Error, reingrese la raza: ", "ovejero aleman");

		}

		pesoDeLaMascota = prompt("Ingrese el peso: ", "mayor a 0");
		while(isNaN(pesoDeLaMascota) == true || pesoDeLaMascota < 1)
		{

			pesoDeLaMascota = prompt("Error, reingrese el peso: ", "mayor a 0");

		}

		estadoClinico = prompt("Ingrese el estado clinico: ", "enfermo,internado o adopcion");
		while(isNaN(estadoClinico) == false || estadoClinico != "enfermo" && estadoClinico != "internado" && estadoClinico != "adopcion")
		{

			estadoClinico = prompt("Error, reingrese el estado clinico: ", "enfermo,internado o adopcion");

		}

		temperaturaCorporal = prompt("Ingrese la temperatura corporal: ", "mayor a 20");
		while(isNaN(temperaturaCorporal) == true || temperaturaCorporal < 20)
		{

			temperaturaCorporal = prompt("Error, reingrese la temperatura corporal: ", "mayor a 20");

		}
		respuesta = prompt("Desea seguir ingresando datos? ", "si/no");
		while(isNaN(respuesta)== false || respuesta != "si" && respuesta != "no")
		{

			respuesta = prompt("Error, desea seguir ingresando datos? ", "si/no");

		}


		//Logica
		
		switch(tipoDeMascota)
		{

			case "perro":
				if(banderaPerroMasPesado = 0)
				{
					perroMasPesado = nombreDeLaMascota;
					pesoPerroMasPesado = pesoDeLaMascota;
					banderaPerroMasPesado = 1;
				}
				else
				{
					if(pesoPerroMasPesado < pesoDeLaMascota)
					{

						perroMasPesado = nombreDeLaMascota;
						pesoPerroMasPesado = pesoDeLaMascota;

					}
					
				}
				acumuladorTemperaturaPerros = acumuladorTemperaturaPerros + temperaturaCorporal;
				contadorDePerros++;

				break;

			case "gato":
				acumuladorTemperaturaGatos = acumuladorTemperaturaGatos + temperaturaCorporal;
				contadorDeGatos++;
				if(tipoDePelaje == "sin pelo")
				{

					if(banderaDeGatosSinPeloMasLiviano == 0)
					{

						nombreDelGatoSinPeloMasLiviano = nombreDeLaMascota;
						razaDelGatoSinPoloMasLiviano = razaDeLaMascota;
						pesoDeGatoSinPeloMasLiviano = pesoDeLaMascota;
						banderaDeGatosSinPeloMasLiviano =1;

					}
					else
					{

						if(pesoDeGatoSinPeloMasLiviano < pesoDeLaMascota)
						{

							nombreDelGatoSinPeloMasLiviano = nombreDeLaMascota;
							razaDelGatoSinPoloMasLiviano = razaDeLaMascota;
							pesoDeGatoSinPeloMasLiviano = pesoDeLaMascota;

						}

					}

				}//Fin if(tipoDePelaje == "sin pelo")
				break;

			case "otra cosa":
				nombreDeOtraCosa = nombreDeLaMascota;
				acumuladorTemperaturaOtraCosa = acumuladorTemperaturaOtraCosa + temperaturaCorporal;
				contadorDeOtraCosa++;
				break;

		}//Fin switch(tipoDeMascota)

		if(tipoDePelaje == "sin pelo")
		{

			if(banderaTemperaturaSinPelo == 0)
			{

				menorTemperaturaCorporalParaAnimalSinPelo = temperaturaCorporal;
				nombreDeLaMascotaConMenorTemperaturaSinPelo = nombreDeLaMascota;
				tipoDeAnimalConMenorTemperaturaSinPelo = tipoDeMascota;
				banderaTemperaturaSinPelo = 1;

			}//Fin if(banderaTemperaturaSinPelo == 0)
			else
			{

				if(menorTemperaturaCorporalParaAnimalSinPelo < temperaturaCorporal)
				{

					menorTemperaturaCorporalParaAnimalSinPelo = temperaturaCorporal;
					nombreDeLaMascotaConMenorTemperaturaSinPelo = nombreDeLaMascota;
					tipoDeAnimalConMenorTemperaturaSinPelo = tipoDeMascota;

				}

			}//Fin else if(banderaTemperaturaSinPelo == 0)

		}//Fin if(tipoDePelaje == "sin pelo")

		switch(estadoClinico)
		{

			case "enfermo":
				contadorDeEnfermos++;
				break;

			case "internado":
				contadorDeInternados++;
				break;

			case "adopcion":
				contadorDeAdopciones++;
				break; 


		}//Fin switch(estadoClinico)

		sumaTotalDelPeso = sumaTotalDelPeso + pesoDeLaMascota;
		
		if(respuesta == "no")
		{

			break;

		}

	}//for(contador = 0; ;contador++)

	porcentajeDeEnfermos = ((contadorDeEnfermos * 100) / contador);
	porcentajeDeTemperaturaGatos = ((acumuladorTemperaturaGatos * 100) / contadorDeGatos);
	porcentajeDeTemperaturaPerros = ((acumuladorTemperaturaPerros * 100) / contadorDePerros);
	porcentajeDeTemperaturaOtraCosa = ((acumuladorTemperaturaOtraCosa * 100) / contadorDeOtraCosa);
	sumaDeGatosYPerros = contadorDePerros + contadorDeGatos;
	porcentajeDeGatosYPerros = ((sumaDeGatosYPerros * 100) / contador);
	promedioDeKilosDelPesoTotal = sumaTotalDelPeso / contador;

	if(porcentajeDeTemperaturaPerros > porcentajeDeTemperaturaGatos || porcentajeDeTemperaturaPerros > porcentajeDeTemperaturaOtraCosa)
	{

		tipoDeMascotaConMayorPromedio = "Perros";

	}//Fin if(porcentajeDeTemperaturaPerros > porcentajeDeTemperaturaGatos || porcentajeDeTemperaturaPerros > porcentajeDeTemperaturaOtraCosa)
	else
	{

		if(porcentajeDeTemperaturaGatos > porcentajeDeTemperaturaOtraCosa)
		{

			tipoDeMascotaConMayorPromedio = "Gatos";

		}//Fin if(porcentajeDeTemperaturaGatos > porcentajeDeTemperaturaOtraCosa)
		else
		{

			tipoDeMascotaConMayorPromedio = "Otra cosa";

		}//Fin else if(porcentajeDeTemperaturaGatos > porcentajeDeTemperaturaOtraCosa)

	}//Fin else if(porcentajeDeTemperaturaPerros > porcentajeDeTemperaturaGatos || porcentajeDeTemperaturaPerros > porcentajeDeTemperaturaOtraCosa)

	if(contadorDeEnfermos > contadorDeInternados || contadorDeEnfermos > contadorDeAdopciones)
	{

		estadoClinicoConMenorCantidadDeMascotas = "Enfermos";

	}//Fin if(contadorDeEnfermos > contadorDeInternados || contadorDeEnfermos > contadorDeAdopciones)
	else
	{

		if(contadorDeInternados > contadorDeAdopciones)
		{

			estadoClinicoConMenorCantidadDeMascotas = "internados";

		}//Fin if(contadorDeInternados > contadorDeAdopciones)
		else
		{

			estadoClinicoConMenorCantidadDeMascotas = "Adoptados";

		}//Fin else if(contadorDeInternados > contadorDeAdopciones)

	}//Fin else if(contadorDeEnfermos > contadorDeInternados || contadorDeEnfermos > contadorDeAdopciones)


	//Muestra de mensajes
	document.write("El perro mas pesado es: " + perroMasPesado + "con un peso de: " + pesoPerroMasPesado);
	document.write("<br>El porcentaje de enfermos es:" + porcentajeDeEnfermos);
	document.write("<br>El nombre de la ultima mascota de tipo otra cosa fue: " + nombreDeOtraCosa);
	document.write("<br>El tipo de animal con mayor promedio de temperatura es: " + tipoDeMascotaConMayorPromedio);
	document.write("<br>El porcentaje de perros y gatos es: " + sumaDeGatosYPerros);
	document.write("<br>El estado clinico con menor cantidad de mascotas es: " + estadoClinicoConMenorCantidadDeMascotas);
	document.write("<br>El promedio de peso total es: " + promedioDeKilosDelPesoTotal);
	document.write("<br>El gato sin pelo mas liviano es: " + nombreDelGatoSinPeloMasLiviano + " de la raza: " + razaDelGatoSinPoloMasLiviano + " y con el peso de: " + pesoDeGatoSinPeloMasLiviano);

}//Fin de funcion

















/*
Prutscher Matias 
1°C
al presionar el botón pedir un número. Informar si el numero es PRIMO o no.

function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;
	var noEsPrimo;

	//Inicializacion
	noEsPrimo = 0;


	//Toma de datos y validacion
	numeroIngresado = prompt("Ingrese un numero a verificar: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero a verificar: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )


	//Logica
	for(contador = numeroIngresado -1; contador >1 ;contador--)
	{

		if((numeroIngresado % contador)  == 0)
		{

			noEsPrimo = 1;
			break;

		}//Fin if(numeroIngresado % (contador+1)  == 0)
		

	}//Fin for(contador = 0; contador < numeroIngresado ;contador++)

	if(noEsPrimo == 0)
	{

		alert("El numero es primo");

	}//Fin if(noEsPrimo == 0)
	else
	{

		alert("El numero no es primo");

	}//Fin else if(noEsPrimo == 0)


}//FIN DE LA FUNCIÓN
*/

/*function mostrar()
{
	var numeroIngresado;
	var contador;
	var contadorDivisores;
	contadorDivisores=0;

	numeroIngresado=prompt("ingrese numero a verificar");



	//for(contador=numeroIngresado-1;contador>1;contador--)
	for(contador=2;contador<(numeroIngresado/2);contador++)
	{
		if(numeroIngresado%contador==0)
		{
			//contadorDivisores++;
			break;
		}

	}

	//if(contadorDivisores>0)
	//if(contador!=1)
	if(contador!=((numeroIngresado/2)-1))
	{
		console.log("no es primo");
	}else
	{
		console.log("ES primo");
	}

}//FIN DE LA FUNCIÓN*/



/*function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;
	

	//Toma de datos y validacion
	numeroIngresado = prompt("Ingrese un numero a verificar: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero a verificar: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	numeroIngresado = parseInt(numeroIngresado);


	//Logica
	for(contador = 2; contador < (numeroIngresado/2) ;contador++)
	{

		if((numeroIngresado % contador)  == 0)
		{

			break;

		}//Fin if(numeroIngresado % (contador+1)  == 0)
		

	}//Fin for(contador = 2; contador < (numeroIngresado/2) ;contador++)

	if(contador !=((numeroIngresado/2)-1))
	{

		alert("El numero no es primo");

	}//Fin if(noEsPrimo == 0)
	else
	{

		alert("El numero es primo");

	}//Fin else if(noEsPrimo == 0)


}//FIN DE LA FUNCIÓN*/


/*function mostrar()
{
	//Declaracion de variables
	var numeroIngresado;
	var contador;
	var noEsPrimo;

	//Inicializacion
	noEsPrimo = 0;

	//Toma de datos y validacion
	numeroIngresado = prompt("Ingrese un numero a verificar: ", "Mayor que 0");

	while(isNaN(numeroIngresado) == true || numeroIngresado <1 )
	{

		numeroIngresado = prompt("Error, reingrese un numero a verificar: ", "Mayor que 0");

	}//while(isNaN(numeroIngresado) == true || numeroIngresado <1 )


	//Logica
	for(contador = 2; contador < numeroIngresado ;contador++)
	{

		if((numeroIngresado % contador)  == 0)
		{

			noEsPrimo = 1;
			break;

		}//Fin if(numeroIngresado % (contador+1)  == 0)
		

	}//Fin for(contador = 0; contador < numeroIngresado ;contador++)

	if(noEsPrimo == 0)
	{

		alert("El numero es primo");

	}//Fin if(noEsPrimo == 0)
	else
	{

		alert("El numero no es primo");

	}//Fin else if(noEsPrimo == 0)


}//FIN DE LA FUNCIÓN*/

