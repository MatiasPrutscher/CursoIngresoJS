/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

// txtIdLargo - txtIdAncho - txtIdRadio

function Rectangulo () 
{	
	//Declaracion de variables
	var largoDelTerreno;
	var anchoDelTerreno;
	var dimensionDelTerreno;
	var cantidadDeAlambre;

	//Toma de datos
	largoDelTerreno = document.getElementById('txtIdLargo').value;
	anchoDelTerreno = document.getElementById('txtIdAncho').value;

	//Pasaje a caracteres a numeros
	largoDelTerreno = parseFloat(largoDelTerreno);
	anchoDelTerreno = parseFloat(anchoDelTerreno);

	//Realizacion de calculos
	dimensionDelTerreno = largoDelTerreno + anchoDelTerreno;
	dimensionDelTerreno = dimensionDelTerreno * 2;
	cantidadDeAlambre = dimensionDelTerreno * 3;

	//Muestra del resultado
	alert("La cantidad de alambre necesaria es de: " + cantidadDeAlambre + " metros");
	
}
function Circulo () 
{
	//Declaracion de variables
	var radioDelTerreno;
	var diametroDelTerreno
	var cantidadDeAlambre;

	//Toma de datos
	radioDelTerreno = document.getElementById('txtIdRadio').value;

	//Pasaje a caracteres a numeros
	radioDelTerreno = parseFloat(radioDelTerreno);

	//Realizacion de calculos
	diametroDelTerreno = radioDelTerreno * 2;
	cantidadDeAlambre = diametroDelTerreno * 3;

	//Muestra del resultado
	alert("La cantidad de alambre necesaria es de: " + cantidadDeAlambre + " metros");

}
function Materiales () 
{
	//Declaracion de variables
	var largoDelTerreno;
	var anchoDelTerreno;
	var metrosCuadradosDelTerreno;
	var cantidadDeCalParaTerrenoRectangular;
	var cantidadDeCementoParaTerrenoRectangular;
	var areaDelCirculo;
	var radioDelTerreno;
	var cantidadDeCalParaCirculo;
	var cantidadDeCementoParaCirculo;

	//Toma de datos
	largoDelTerreno = document.getElementById('txtIdLargo').value;
	anchoDelTerreno = document.getElementById('txtIdAncho').value;
	radioDelTerreno = document.getElementById('txtIdRadio').value;

	//Pasaje a caracteres a numeros
	largoDelTerreno = parseFloat(largoDelTerreno);
	anchoDelTerreno = parseFloat(anchoDelTerreno);
	radioDelTerreno = parseFloat(radioDelTerreno);

	//Realizacion de calculos para el terreno cuadrado
	metrosCuadradosDelTerreno = largoDelTerreno * anchoDelTerreno;
	cantidadDeCementoParaTerrenoRectangular = metrosCuadradosDelTerreno * 2;
	cantidadDeCalParaTerrenoRectangular = metrosCuadradosDelTerreno * 3;
	
	//Realizacion de calculos para el terreno circular
	areaDelCirculo = 3.14 * radioDelTerreno**2;
	cantidadDeCementoParaCirculo = areaDelCirculo * 2;
	cantidadDeCalParaCirculo = areaDelCirculo * 3;

	//Muestra del resultado
	alert("Para un terreno rectangulo va a necesitar: " + cantidadDeCementoParaTerrenoRectangular + " bolsas de cemento y " + cantidadDeCalParaTerrenoRectangular + " bolsas de cal");	
	alert("Para un terreno circular va a necesitar: " + cantidadDeCementoParaCirculo + " bolsas de cemento y " + cantidadDeCalParaCirculo + " bolsas de cal");

}