function mostrar()
{
	// Declaro variables
	var edad;

	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	//Paso a comparar edades. Que no sea mayor a 12 años y menor a 18 años
	/*if(!(edad > 12 && edad < 18))
	{	
		//Muestra del mensaje
		alert("Usted no es  adolecente");
	
	}//Fin if(!(edad > 12 && edad < 18))*/

	if(edad < 13 || edad > 17)
	{	
		//Muestra del mensaje
		alert("Usted no es  adolecente");
	
	}//Fin if(edad < 13 || edad > 17)


}//FIN DE LA FUNCIÓN