/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	//Declaracion de variables
	var resultado;
	var importe;
	var porcentaje;

	//toma de datos
	importe = document.getElementById('txtIdImporte').value;
	porcentaje = prompt("Ingrese el porcentaje: ", "25");

	//paso a entero
	importe = parseInt(importe);
	porcentaje = parseInt(porcentaje);

	//realizacion del calculo
	porcentaje = (importe * porcentaje)/100;
	resultado = importe - porcentaje;

	//Muestra del resultado

	document.getElementById('txtIdResultado').value = resultado;


	//alert("ok");
}
