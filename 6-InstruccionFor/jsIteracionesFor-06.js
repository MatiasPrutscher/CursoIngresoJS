/*
Prutscher Matias
1°C
For 11 (a 5 personas nombre , sexo ,edad(validar que solo sean hombres no mayores a 12 y que las mujeres sean ADOLESCENTES), altura(rangos que quiera)) ... 
informar el sexo y nombre de la persona mas alta
For 12 (lo anterior mas..--de las mujeres el nombre de la mas joven ,--de los hombre el nombre del mas bajito , ... solo si los hay
For 13 ( o anterior mas ...el promedio de edad entre los hombre ,el promedio de edad entre las mujeres, la cantidad de personas que miden mas de 1,60 metros, 
y el porcentaje de mujeres sobre el total de personas de mas de 1,60 mts*/
function mostrar()
{
	//Declaracion de variables
	var contador;
	var nombreIngresado;
	var sexoIngresado;
	var edadIngresada;
	var alturaIngresada;
	var nombreDeLaPersonaMasAlta;
	var sexoDeLaPersonaMasAlta;
	var personaMasAlta;
	var nombreDeLaMujerMasJoven;
	var edadDeLaMujerMasJoven;
	var alturaHombreMasBajo;
	var nombreDelHombreMasBajo;
	var cantidadDeHombres;
	var promedioDeEdadEntreLosHombres;
	var promedioDeEdadEntreLasMujeres;
	var sumaEdadesDeLasMujeres;
	var sumaEdadesDeLosHombres;
	var cantidadDeMujeres;
	var cantidadDePersonasDeMasDe160Cm;
	var cantidadDeMujeresQueMidenMasDe160Cm;
	var porcentajeDeMujeresDeMasDe160Cm;

	//Inicializacion de variables
	cantidadDeMujeres = 0;
	cantidadDeHombres = 0;
	promedioDeEdadEntreLosHombres = 0;
	promedioDeEdadEntreLasMujeres = 0;
	sumaEdadesDeLasMujeres = 0;
	sumaEdadesDeLosHombres = 0;
	cantidadDePersonasDeMasDe160Cm = 0;
	cantidadDeMujeresQueMidenMasDe160Cm = 0;
	porcentajeDeMujeresDeMasDe160Cm = 0;


	for(contador = 0; contador < 5 ; contador++)
	{
		//Toma y validacion de datos
		nombreIngresado = prompt("Ingrese nombre: " + (contador+1), "Natalia Natalia");
		while(isNaN(nombreIngresado) == false)
		{

			nombreIngresado = prompt("Error, reingrese nombre: ", "Natalia Natalia");

		}//Fin while(isNaN(nombreIngresado) == false)

		sexoIngresado = prompt("Ingrese el sexo: ", "f femenino, m masculino");
		while(isNaN(sexoIngresado) == false || sexoIngresado != "f" && sexoIngresado != "m")
		{

			sexoIngresado = prompt("Error, reingrese el sexo: ", "f femenino, m masculino");

		}//Fin while(isNaN(nombreIngresado) == false && sexoIngresado != "f" || sexoIngresado != "m")

		edadIngresada = prompt("Ingrese la edad: ", "hombres no mayores a 12 y que las mujeres sean adolescentes (entre 13 y 18)");
		
			
		while((isNaN(edadIngresada) == true) || (sexoIngresado != "m" || (edadIngresada < 1 || edadIngresada > 12)) && (sexoIngresado != "f" || (edadIngresada < 13 || edadIngresada > 18)))
		{

			edadIngresada = prompt("Error, reingrese la edad: ", "hombres no mayores a 12 y que las mujeres sean adolescentes (entre 13 y 18)");

		}//Fin while((isNaN(edadIngresada) == true) || (sexoIngresado != "m" || edadIngresada > 13) && (sexoIngresado != "f" || edadIngresada < 17))
		edadIngresada = parseInt(edadIngresada);
						
		alturaIngresada = prompt("Ingrese la altura: ");
		while(isNaN(alturaIngresada) == true)
		{

			alturaIngresada = prompt("Error, reingrese la altura: ");

		}//while(isNaN(alturaIngresada) == true)
		alturaIngresada = parseFloat(alturaIngresada);

		//Logica
		if(contador == 0)
		{

			nombreDeLaPersonaMasAlta = nombreIngresado;
			sexoDeLaPersonaMasAlta = sexoIngresado;
			personaMasAlta = alturaIngresada;

		}//Fin if(contador == 0)
		else
		{

			if(personaMasAlta < alturaIngresada)
			{

				nombreDeLaPersonaMasAlta = nombreIngresado;
				sexoDeLaPersonaMasAlta = sexoIngresado;

			}//Fin if(personaMasAlta < alturaIngresada)

		}//Fin else if(contador == 0)
		if(alturaIngresada > 1.6)
		{

			cantidadDePersonasDeMasDe160Cm++;

		}
		switch(sexoIngresado)
		{

			case "f":
				if(cantidadDeMujeres == 0)
				{

					nombreDeLaMujerMasJoven = nombreIngresado;
					edadDeLaMujerMasJoven = edadIngresada;
					

				}//Fin if(banderaMujer == 0)
				else
				{

					if(edadDeLaMujerMasJoven > edadIngresada)
					{

						nombreDeLaMujerMasJoven = nombreIngresado;
						edadDeLaMujerMasJoven = edadIngresada;
					}

				}//Fin else if(banderaMujer == 0)
				if(alturaIngresada > 1.6)
				{

					cantidadDeMujeresQueMidenMasDe160Cm++;

				}

				sumaEdadesDeLasMujeres = sumaEdadesDeLasMujeres + edadIngresada;
				cantidadDeMujeres++;


				break;

			case "m":
				if(cantidadDeHombres == 0)
				{

					alturaHombreMasBajo = alturaIngresada;
					nombreDelHombreMasBajo = nombreIngresado;

				}
				else 
				{

					if(alturaHombreMasBajo > alturaIngresada)
					{

						alturaHombreMasBajo = alturaIngresada;
						nombreDelHombreMasBajo = nombreIngresado;

					}

				}

				sumaEdadesDeLosHombres = sumaEdadesDeLosHombres + edadIngresada;
				cantidadDeHombres++;

				break;

		}//Fin switch(sexoIngresado)

		

		/*console.log(nombreIngresado);
		console.log(sexoIngresado);
		console.log(edadIngresada);
		console.log(alturaIngresada);*/


	}//Fin for(contador = 0; contador < 5 ; contador++)

	promedioDeEdadEntreLasMujeres = sumaEdadesDeLasMujeres / cantidadDeMujeres;
	promedioDeEdadEntreLosHombres = sumaEdadesDeLosHombres / cantidadDeHombres;
	porcentajeDeMujeresDeMasDe160Cm = ((cantidadDeMujeresQueMidenMasDe160Cm * 100) / cantidadDePersonasDeMasDe160Cm);



	if(cantidadDeMujeres == 0)
	{
		nombreDeLaMujerMasJoven = "No se ingresaron mujeres";
		promedioDeEdadEntreLasMujeres = "No se ingresaron mujeres";
		porcentajeDeMujeresDeMasDe160Cm = "No se ingresaron mujeres de mas de 1.6 mts";
	}
	if(cantidadDeHombres == 0)
	{
		nombreDelHombreMasBajo = "No se ingresaron hombres";
		promedioDeEdadEntreLosHombres = "No se ingresaron hombres";
	}


	//Muestra de datos

	console.log("La persona mas alta es: " + nombreDeLaPersonaMasAlta);
	console.log("La altura mas alta fue: " + personaMasAlta);
	console.log("La mujer mas joven es: " + nombreDeLaMujerMasJoven);
	console.log("El hombre mas bajo es: " + nombreDelHombreMasBajo);
	console.log("El promedio de edades de los hombres es: " + promedioDeEdadEntreLosHombres);
	console.log("El promedio de edades de las mujeres es: " + promedioDeEdadEntreLasMujeres);
	console.log("La cantidad de personas que miden mas de 1.6: " + cantidadDePersonasDeMasDe160Cm);
	console.log("El porcentaje de mujeres que miden mas de 1.6: " + porcentajeDeMujeresDeMasDe160Cm);

}//Fin function mostrar()









/*
Prutscher Matias
1°C
For 9 bis( pedir 10 numeros , informar el mayor de los negativos y el menor de los pares).. solo si los hay
function mostrar()
{

	//Declaracion de variables
	var numeroPedido;
	var mayorNegativos;
	var menorDeLosPares;
	var contador;
	var banderaNegativos;
	var banderaPares;

	//Inicializacion de variables
	banderaPares = 0;
	banderaNegativos = 0;


	for(contador = 0; contador < 10; contador++)
	{

		//Toma de datos y validacion
		numeroPedido = prompt("Ingrese un numero: ", (contador+1));
		while(isNaN(numeroPedido) == true)
		{

			numeroPedido = prompt("Error, Reingrese un numero: ", (contador+1));

		}//Fin while(isNaN(numeroPedido) == true)

		//Pasaje de caracter a entero
		numeroPedido = parseInt(numeroPedido);

		//Logica
		if(numeroPedido < 0)
		{

			if(banderaNegativos == 0)
			{

				mayorNegativos = numeroPedido;
				banderaNegativos = 1;

			}//Fin if(banderaNegativos == 0)
			else
			{

				if(mayorNegativos < numeroPedido)
				{

					mayorNegativos = numeroPedido;

				}//Fin if(mayorNegativos < numeroPedido)

			}//Fin else if(banderaNegativos == 0)

		}//Fin if(numeroPedido < 0)

		if(numeroPedido%2==0)
		{

			if(banderaPares == 0)
			{

				banderaPares = 1;
				menorDeLosPares = numeroPedido;

			}//Fin if(banderaPares == 0)
			else 
			{

				if(menorDeLosPares > numeroPedido)
				{

					menorDeLosPares = numeroPedido;

				}//Fin if(menorDeLosPares < numeroPedido)

			}//Fin else if(banderaPares == 0)

		}//Fin if(numeroPedido%2==0)

	}//Fin for(contador = 0; contador < 10; contador++)

	if(banderaPares == 0)
	{

		menorDeLosPares = "No hay numeros pares";

	}//Fin if(banderaPares == 0)
	if(banderaNegativos == 0)
	{

		mayorNegativos = "No hay numeros negativos";

	}//Fin if(banderaNegativos == 0)


	//Muestra de datos 
	document.write("El menor de los pares es: " + menorDeLosPares);
	document.write("<br>El mayor de los negativos es: " + mayorNegativos);

}//Fin function mostrar()
*/






/*
Prutscher Matias
1°C
al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados.*/
/*function mostrar()
{
	//Declaracion de variables
	var numeroPedido;
	var contador;
	var contadorDeNumerosPares;

	//Inicializacion 
	contadorDeNumerosPares = 0;

	//toma y validacion de datos
	numeroPedido = prompt("Ingrese un numero mayor a 0: ", "10");
	while(isNaN(numeroPedido) == true || numeroPedido < 1)
	{

		numeroPedido = prompt("Error, reingrese un numero mayor a 0: ", "10");

	}//Fin while(isNaN(numeroPedido) == true || numeroPedido < 1)

	//Logica
	for(contador = 0; contador < numeroPedido ; contador++)
	{

		if((contador + 1) % 2 == 0)
		{

			document.write((contador+1) +"<br>");
			contadorDeNumerosPares++;

		}//Fin if((contador + 1) % 2 == 0)

	}//Fin for(contador = 0; contador < numeroPedido ; contador++)


	document.write("El total de pares de es: " + contadorDeNumerosPares);


}//FIN DE LA FUNCIÓN*/