/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	//Declaracion de variables
	var precioUno;
	var precioDos;
	var precioTres;
	var resultado;

	//Toma de datos
	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	//Paso a entero
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//Realizacion del calculo
	resultado = precioUno + precioDos + precioTres;

	//Muestra del mensaje
	alert("El resultado de la suma es: "+resultado);

}
function Promedio () 
{
	//Declaracion de variables
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var resultado;

	//Toma de datos
	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	//Paso a entero
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//Realizacion del calculo
	resultadoSuma = precioUno + precioDos + precioTres;
	resultado = resultadoSuma / 3;

	//Muestra del mensaje
	alert("El resultado del promedio es de: "+resultado);
}
function PrecioFinal () 
{
	//Declaracion de variables
	var precioUno;
	var precioDos;
	var precioTres;
	var resultadoSuma;
	var resultado;

	//Toma de datos
	precioUno = document.getElementById('txtIdPrecioUno').value;
	precioDos = document.getElementById('txtIdPrecioDos').value;
	precioTres = document.getElementById('txtIdPrecioTres').value;

	//Paso a entero
	precioUno = parseInt(precioUno);
	precioDos = parseInt(precioDos);
	precioTres = parseInt(precioTres);

	//Realizacion del calculo
	resultadoSuma = precioUno + precioDos + precioTres;
	resultado = resultadoSuma*1.21;

	//Muestra del mensaje
	alert("El precio final es: "+resultado);

	
}