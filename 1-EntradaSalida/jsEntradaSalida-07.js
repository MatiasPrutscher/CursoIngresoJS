/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

	var numeroUno;
	var numeroDos;
	var calculo;
function tomada()
{

	numeroUno = parseInt(document.getElementById('txtIdNumeroUno').value);
	numeroDos = parseInt(document.getElementById('txtIdNumeroDos').value);

}


function sumar()
{	
	tomada()
	
	calculo = numeroUno + numeroDos;

	alert("El resultado de la suma es: "+calculo);	
}

function restar()
{	
	
	tomada()

	calculo = numeroUno - numeroDos;

	alert("El resultado de la resta es: "+calculo);
}

function multiplicar()
{
	tomada()

	calculo = numeroUno * numeroDos;

	alert("El resultado de la multiplicacion es: "+calculo);
}

function dividir()
{
	tomada()

	calculo = numeroUno / numeroDos;

	alert("El resultado de la divicion es: "+calculo);
}

