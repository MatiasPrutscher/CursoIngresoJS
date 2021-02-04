/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaracion de variables
	var numeroUno;
	var numeroDos;
	var suma;

	//toma de datos por ID
	numeroUno = document.getElementById('txtIdNumeroUno').value;
	numeroDos = document.getElementById('txtIdNumeroDos').value;


	//conversion a enteros
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);


	//suma de ambos numeros enteros
	suma = numeroUno + numeroDos; 

	//muestra de la suma por alert

	alert("El resultado es: " +suma);


}

/*
function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos
 	var numeroUno;
 	var numeroDos;
 	var resultado;

 	//numeroDos=6;
 	//numeroUno=66;
 	numeroUno=document.getElementById('txtIdNumeroUno').value;
 	numeroDos=document.getElementById('txtIdNumeroDos').value;

 	console.log(numeroUno);
 	alert(numeroUno);


 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);

 	resultado=numeroUno+numeroDos;

 	alert("el resultado es: "+resultado);
 	console.log(resultado);

}

function sumar()
{
	//txtIdNumeroUno txtIdNumeroDos
 	var numeroUno;
 	var numeroDos;
 	var resultado;
 	// alert(resultado);//undefined
 	//numeroDos=6;
 	//numeroUno=66;
 	numeroUno=document.getElementById('txtIdNumeroUno').value;
 	numeroDos=document.getElementById('txtIdNumeroDos').value;

	//numeroUno=document.getElementById('txtIdNumEroUno').value;//error al ejecutar
 	console.log(numeroUno);
 	//alert(numeroUno);


 	numeroUno=parseInt(numeroUno);
 	numeroDos=parseInt(numeroDos);

 	resultado=numeroUno+numeroDos;

 	alert("el resultado es: "+resultado);
 	console.log(resultado);
	document.getElementById('txtIdNumeroDos').value="el resultado es : "+ resultado;

	resultado=prompt("ingrese su nombre");
	console.log(resultado);
	alert(resultado);

}*/
