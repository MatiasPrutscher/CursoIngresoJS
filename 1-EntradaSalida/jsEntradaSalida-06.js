/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	//toma de datos por ID y convercion a enteros
	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

	//suma de ambos numeros enteros
	suma = numeroUno + numeroDos; 

	//muestra de la suma por alert

	alert("La suma de ambos numeros es de: " +suma);
}

