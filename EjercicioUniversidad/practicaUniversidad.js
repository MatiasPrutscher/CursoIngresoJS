/*validación :
pedir el ingreso de 10 mascotas 
 validar 
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza , si es perro (pastor, toy, callejero) y si gato (siamés, turco, Peterbald , generico) y  si es de tipo "otros" o pájaro , pedir solo un texto
edad entre 1 y 20 para gatos y perros ,  para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre ( no se permite solo numero)
mostrar por cada tipo el nombre del  mas viejo , solo si hay de ese tipo
mostrar que raza  de gatos tiene mas animales y el promedio de edad de esta raza
Julian Leandro Nieva 1°C
Extra 3*/

function mostrar()
{
	//Declaracion de variables
	var tipoIngresado;
	var razaIngresada;
	var edadIngresada;
	var nombreIngresado;
	var gatoMasViejo;
	var edadGatoMasViejo;
	var perroMasViejo;
	var edadPerroMasViejo;
	var pajaroMasViejo;
	var edadPajaroMasViejo;
	var otrosMasViejo;
	var edadOtrosMasViejo;
	var banderaGato;
	var banderaPerro;
	var banderaPajaro;
	var banderaOtros;
	var contadorGatoSiames;
	var contadorGatoTurco;
	var contadorGatoPeterbald;
	var contadorGatoGenerico;


	//Inicializacion de variables
	banderaGato = 0;
	banderaPerro = 0;
	banderaPajaro = 0;
	banderaOtros = 0;


	//Bluque de 10 vueltas
	for(contadorDeIngreso = 0; contadorDeIngreso < 10 ; contadorDeIngreso++)
	{
		//Toma de datos y validacion
		tipoIngresado = prompt("Ingrese el tipo de mascota");
		while(isNaN(tipoIngresado) == false || tipoIngresado != "gato" && tipoIngresado != "perro" && tipoIngresado != "pajaro" && tipoIngresado != "otros")
		{
			tipoIngresado = prompt("Error. Por favor ingrese el tipo de mascota");
		}

		razaIngresada = prompt("Ingrese la raza de la mascota");
		while(isNaN(razaIngresada) == false || tipoIngresado != "gato" && (razaIngresada != "siames" && razaIngresada != "turco" && razaIngresada != "peterbald" && razaIngresada != "generico") || tipoIngresado != "perro" && (razaIngresada != "pastor" && razaIngresada != "toy" && razaIngresada != "callejero"))
		{
			razaIngresada = prompt("Error. Por favor ingrese una raza valida");
		}

		edadIngresada = prompt("Ingrese una edad de la mascota (entre 1 y 20 para gatos y perros ,  para otros entre 1 y 100 , para pájaro 1 de 50)");
		edadIngresada = parseInt (edadIngresada);
		while(isNaN(edadIngresada) == true || tipoIngresado != "gato" && (edadIngresada < 1 || edadIngresada > 20) || tipoIngresado != "perro" && (edadIngresada < 1 || edadIngresada > 20) || tipoIngresado != "otros" && (edadIngresada < 1 || edadIngresada > 100) || tipoIngresado != "pajaro" && (edadIngresada < 1 || edadIngresada > 50)) 
		{
			edadIngresada = prompt("Error. Por favor una edad valida");
		}

		nombreIngresado = prompt("Ingrese el nombre de la mascota");
		while(isNaN(nombreIngresado) == false)
		{
			nombreIngresado = prompt("Error. Por favor ingrese un nombre valido");
		}

		/*switch(tipoIngresado)
		{
			case "gato":
				if(banderaGato == 0)
				{
					edadGatoMasViejo = edadIngresada;
					gatoMasViejo = nombreIngresado;
				}
				else
				{
					if(edadIngresada > edadGatoMasViejo)
					{
						edadGatoMasViejo = edadIngresada;
						gatoMasViejo = nombreIngresado;
					}
				}
				switch(razaIngresada)
				{
					case "siames":
						contadorGatoSiames++;
						break;
					case "turco":
						contadorGatoTurco++;
						break;
					case "peterbald":
						contadorGatoPeterbald++;
						break;
					case "generico":
						contadorGatoGenerico++;
						break;
				}	//Fin del switch de raza del gato
				break;
			case "perro":
				break;
			case "pajaro":
				break;
			case "otros":
				break;
		}*/

	}//Fin del for

}






































/*
Prutscher Matias 
1°C
1. El alumno deberá ingresar:
Nombre del alumno
Carrera (Programación, Psicología, Diseño gráfico)
Estado de la carrera: en curso-abandono-finalizado
Sexo (femenino-masculino-nobinario)
Edad (18 o más)
Nota (entre 1 y 10)
2. Se desconoce la cantidad de alumnos que se ingresaran.
3. Se deberán validar los casos resaltados en negrita.
4. El programa deberá informar a través del documento html:
A. Cantidad total de alumnos de cada carrera.
B. Cantidad total de mujeres que cursan la carrera de programación
C. Cantidad de alumnos no binarios.
D. Promedio de notas de los alumnos finalizantes.
E. Nombre, sexo y edad del alumno mas viejo en la carrera de psicología.
F. Nombre, nota y estado de la carrera del mejor alumno no binario que estudia psicología.)
G. ¿Cuál es la carrera que tiene más alumnos?
*/
/*function probarEjercicio()
{
	//Declaracion de variables
	var nombreDeAlumnoIngresado;
	var carrera;
	var estadoDeLaCarrera;
	var sexoIngresado;
	var edadIngresado;
	var notaIngresada;
	var respuesta;

	//Inicializacion de variables
	respuesta = "si";

	//Toma y validacion de datos
	while(respuesta == "si")
	{

		nombreDeAlumnoIngresado = prompt("Ingrese el nombre del alumno: ", "Natalia Natalia");
		while(isNaN(nombreDeAlumnoIngresado) == false)
		{

			nombreDeAlumnoIngresado = prompt("Error, reingrese el nombre del alumno: ", "Natalia Natalia");

		}

		carrera = prompt("Ingrese la carrera: ","Programación, Psicología, Diseño gráfico");
		while(isNaN(carrera) == false || carrera != "Programación" && carrera != "Psicología" && carrera != "Diseño gráfico")
		{

			carrera = prompt("Error, reingrese la carrera: ","Programación, Psicología, Diseño gráfico");

		}

		estadoDeLaCarrera = prompt("Ingrese el estado de la carrera: ", "curso-abandono-finalizado");
		while(isNaN(estadoDeLaCarrera) == false || estadoDeLaCarrera != "curso" && estadoDeLaCarrera != "abandono" && estadoDeLaCarrera != "finalizado")
		{

			estadoDeLaCarrera = prompt("Error, reingrese el estado de la carrera: ", "curso-abandono-finalizado");

		}

		sexo = prompt("Ingrese el sexo: ", "femenino-masculino-nobinario");
		while(isNaN(sexo) == false || sexo != "femenino" && sexo != "masculino" && sexo != "nobinario")
		{

			sexo = prompt("Error, reingrese el sexo: ", "femenino-masculino-nobinario");

		}

		edadIngresado = prompt("Ingrese la edad: ", "Mayor a 18");
		while(isNaN(edadIngresado) == true || edadIngresado < 18)
		{

			edadIngresado = prompt("Error, reingrese la edad: ", "Mayor a 18");

		}

		notaIngresada = prompt("Ingrese la nota: ", "de 1 a 10");
		while(isNaN(notaIngresada) == true || notaIngresada < 1 || notaIngresada >10)
		{

			notaIngresada = prompt("Error, reingrese la nota: ", "de 1 a 10");

		}

	}//Fin while(respuesta == "si")

}//Fin function probarEjercicio()
*/