/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	//txtIdNumeroDividendo txtIdNumeroDivisor
	//Declaracion de variables
	var numeroDivisor;
	var numeroDividendo;
	var resultado;

	//Toma de datos
	numeroDividendo = document.getElementById('txtIdNumeroDividendo').value;
	numeroDivisor = document.getElementById('txtIdNumeroDivisor').value;

	//Paso a enteros
	numeroDividendo = parseInt(numeroDividendo);
	numeroDivisor = parseInt(numeroDivisor);

	//realizacion del calculo
	resultado = numeroDividendo % numeroDivisor;

	//Muestra del resultado
	alert("El resto es de: " + resultado);
}
