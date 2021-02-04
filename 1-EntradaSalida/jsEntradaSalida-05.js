/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	
/* bis :

Debemos lograr tomar nombre y edad por ID , apellido por prompt ,
y mostrarlos concatenados 
ej.: "Usted se llama José peres y tiene 66 años" 	*/
function mostrar()
{	 
	// Declaracion de variables
	var nombre;
	var apellido;
	var edad;

	//Toma de datos por ID
	nombre = document.getElementById('txtIdNombre').value;
	edad = document.getElementById('txtIdEdad').value;

	//Toma de datos por prompt
	apellido = prompt("Ingrese su apellido: ");

	//muestra de mensaje concatenado
	alert("Usted se llama " + nombre + " "+ apellido+ " y tiene " + edad +" años");
}

