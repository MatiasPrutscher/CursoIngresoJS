/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
// txtIdTemperatura

function FahrenheitCentigrados () 
{
	//Declaracion de variables
	var temperaturaEnFahrenheit;
	var temperaturaEnCentigrados;

	//Toma de datos
	temperaturaEnFahrenheit = document.getElementById('txtIdTemperatura').value;

	//pasaje de caracter a numero
	temperaturaEnFahrenheit = parseFloat(temperaturaEnFahrenheit);

	//Realizacion de calculos
	temperaturaEnCentigrados = temperaturaEnFahrenheit - 32;

	//Muestra del resultado
	alert(temperaturaEnFahrenheit + " Fahrenheit son " + temperaturaEnCentigrados + " centígrados");

}

function CentigradosFahrenheit () 
{
	//Declaracion de variables
	var temperaturaEnFahrenheit;
	var temperaturaEnCentigrados;

	//Toma de datos
	temperaturaEnCentigrados = document.getElementById('txtIdTemperatura').value;

	//pasaje de caracter a numero
	temperaturaEnCentigrados = parseFloat(temperaturaEnCentigrados);

	//Realizacion de calculos
	temperaturaEnFahrenheit = temperaturaEnCentigrados + 32;

	//Muestra del resultado
	alert(temperaturaEnCentigrados + " centígrados son " + temperaturaEnFahrenheit + " Fahrenheit");

}
