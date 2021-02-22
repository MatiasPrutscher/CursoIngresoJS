/*
Prutscher Matias
1°C
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/
function mostrar()
{
	//Declaracion de variables
	var repeticiones;
	var contador;

	//Toma de dato y validacion
	repeticiones = prompt("Ingrese el número de repeticiones: ","Mayor a 0");
	while(isNaN(repeticiones) == true || repeticiones <1)
	{

		repeticiones = prompt("Error, reingrese el número de repeticiones: ","Mayor a 0");

	}//Fin while(isNaN(repeticiones) == true || repeticiones <1)
	
	//Logica
	for(contador = 0; contador < repeticiones; contador++)
	{

		document.write("Hola UTN FRA " + (contador + 1)+ "<br>");

	}//Fin for(contador = 0; contador < repeticiones; contador++)


}//FIN DE LA FUNCIÓN