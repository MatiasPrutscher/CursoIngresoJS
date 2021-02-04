/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
Pedir el porcentaje al usuario*/
function mostrarAumento()
{
	//Declaracion de variables
	var sueldo;
	var porcentaje;
	var resultado;

	//toma de datos
	sueldo = document.getElementById('txtIdSueldo').value;
	porcentaje = prompt("Ingrese porcentaje: ","10");

	//paso a entero
	sueldo = parseInt(sueldo);
	porcentaje = parseInt(porcentaje);

	//realizacion del calculo
	porcentaje = (sueldo * porcentaje) /100;
	resultado = sueldo + porcentaje;

	//muestra del resultado
	document.getElementById('txtIdResultado').value = resultado;

	//alert("ok");
}
