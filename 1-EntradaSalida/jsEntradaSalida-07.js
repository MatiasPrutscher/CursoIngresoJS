/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*//declaracion de variables 
	var numeroUno;
	var numeroDos;
	var calculo;
function tomadedatos()// funcion exclusiva para la toma de datos
{
	// toma de datos
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//conversion de datos a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
} Aun no vimos funciones
*/

function sumar()
{	

	//llamada a la toma de datos
	//tomadedatos()

	//declaracion de variables 
	var numeroUno;
	var numeroDos;
	var calculo;

	// toma de datos
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//conversion de datos a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);
	
	//realizacion del calculo
	calculo = numeroUno + numeroDos;

	//muestra del resultado
	alert("El resultado de la suma es: "+calculo);	
}

function restar()
{	
	//llamada a la toma de datos
	//tomadedatos()

	//declaracion de variables 
	var numeroUno;
	var numeroDos;
	var calculo;

	// toma de datos
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//conversion de datos a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//realizacion del calculo
	calculo = numeroUno - numeroDos;

	//muestra del resultado
	alert("El resultado de la resta es: "+calculo);
}

function multiplicar()
{
	//llamada a la toma de datos
	//tomadedatos()

	//declaracion de variables 
	var numeroUno;
	var numeroDos;
	var calculo;

	// toma de datos
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//conversion de datos a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//realizacion del calculo
	calculo = numeroUno * numeroDos;

	//muestra del resultado
	alert("El resultado de la multiplicacion es: "+calculo);
}

function dividir()
{
	//llamada a la toma de datos
	//tomadedatos()

	//declaracion de variables 
	var numeroUno;
	var numeroDos;
	var calculo;

	// toma de datos
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;

	//conversion de datos a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	//realizacion del calculo
	calculo = numeroUno / numeroDos;

	//muestra del resultado
	alert("El resultado de la divicion es: "+calculo);
}

