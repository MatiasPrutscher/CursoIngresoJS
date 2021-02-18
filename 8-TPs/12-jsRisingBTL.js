/*
Prutscher Matias
1°C
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
 //ID txtIdEdad , txtIdSexo , txtIdEstadoCivil , txtIdSueldo , txtIdLegajo , txtIdNacionalidad
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBruto;
 	var legajo;
 	var nacionalidad;

 	//A.	Edad, entre 18 y 90 años inclusive.
 	//Toma de la edad
 	edadIngresada = prompt("Ingrese su edad: ", "Entre 18 y 90 años (solo numeros)");
 	
 	//Validacion de la edad
 	while(isNaN(edadIngresada) == true || edadIngresada < 18 || edadIngresada > 90)
 	{

 		edadIngresada = prompt("Error, reingrese su edad: ", "Entre 18 y 90 años (solo numeros)");
 
 	}//Fin while(isNaN(edadIngresada) == true || edadIngresada < 18 && edadIngresada > 90)

 	//Paso de caracter a entero
 	edadIngresada = parseInt(edadIngresada);


 	//B.	Sexo, “M” para masculino y “F” para femenino
 	//Toma del sexo
 	sexoIngresado = prompt("Ingrese su sexo: ", "“M” para masculino y “F” para femenino");

 	//Validacion del sexo ingresado
 	while(sexoIngresado != "m" && sexoIngresado != "f")
 	{

 		sexoIngresado = prompt("Error, reingrese su sexo: ", "“M” para masculino y “F” para femenino");

 	}//Fin while(sexoIngresado != "m" || sexoIngresado != "f")


 	//C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
 	//Toma del estado civil
 	estadoCivilIngresado = prompt("Ingrese su estado civil: ", "1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");

 	//Validacion del estado civil
 	while(isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)
 	{
 		estadoCivilIngresado = prompt("Error, reingrese su estado civil: ", "1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
 	}//Fin while(isNaN(estadoCivilIngresado) == true || estadoCivilIngresado < 1 || estadoCivilIngresado > 4)

 	//Paso de caracter a entero
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);


 	//D.	Sueldo bruto, no menor a 8000.
 	//Toma del sueldo
 	sueldoBruto = prompt("Ingrese su sueldo bruto: ", "Sueldo bruto, no menor a 8000.");

 	//Validacion del sueldo
 	while(isNaN(sueldoBruto) == true || sueldoBruto < 8000)
 	{

 		sueldoBruto = prompt("Error, reingrese su sueldo bruto: ", "Sueldo bruto, no menor a 8000.");

 	}//Fin while(isNaN(sueldoBruto) == true || sueldoBruto < 8000)

 	//Paso de caracter a entero
 	sueldoBruto = parseInt(sueldoBruto);


 	//E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
 	//Toma del legajo
 	legajo = prompt("Ingrese el legajo: ", "1111, numérico de 4 cifras, sin ceros a la izquierda.");

 	//Validacion del legajo
 	while(isNaN(legajo) == true || legajo <1000 || legajo >9999)
 	{

 		legajo = prompt("Error, reingrese el legajo: ", "1111, numérico de 4 cifras, sin ceros a la izquierda.");

 	}//Fin while(isNaN(legajo) == true || legajo <1000 || legajo >9999)

 	//Paso de caracter a entero
 	legajo = parseInt(legajo);


 	//F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 	//Toma de datos
 	nacionalidad = prompt("Ingrese su nacionalidad: ", "“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

 	//Validacion de la nacionalidad
 	while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
 	{

 		nacionalidad = prompt("Error, reingrese su nacionalidad: ", "“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.");

 	}//Fin while(nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N")
 	//Fin de validaciones

 	//Logica
 	//
 	if(sexoIngresado =="m")
 	{
 		sexoIngresado = "Masculino";
 	}
 	else
 	{
 		sexoIngresado = "Femenino";
 	}

 	switch(estadoCivilIngresado)
 	{

 		case 1:
 			estadoCivilIngresado = "Soltero";
 			break;
 		case 2:
 			estadoCivilIngresado = "Casado";
 			break;
 		case 3:
 			estadoCivilIngresado = "Divorciado";
 			break;
 		default:
 			estadoCivilIngresado = "Viudo";
 			break;

 	}//Fin switch(estadoCivilIngresado)

 	switch(nacionalidad)
 	{
 		case "A":
 			nacionalidad = "Argentino";
 			break;
 		case "E":
 			nacionalidad = "Extranjero";
 			break;
 		default:
 			nacionalidad = "nacionalizado";
 			break;
 	}//Fin switch(nacionalidad)
 	//Fin de logica


 	//Muestra de datos
 	document.getElementById('txtIdEdad').value = edadIngresada;
 	document.getElementById('txtIdSexo').value = sexoIngresado;
 	document.getElementById('txtIdEstadoCivil').value = estadoCivilIngresado;
 	document.getElementById('txtIdSueldo').value = sueldoBruto;
 	document.getElementById('txtIdLegajo').value = legajo;
 	document.getElementById('txtIdNacionalidad').value = nacionalidad;

}
