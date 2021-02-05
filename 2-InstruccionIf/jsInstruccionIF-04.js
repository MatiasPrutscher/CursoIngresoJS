function mostrar()
{
	// Declaro variables
	var edad;

	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	/*//Paso a comparar edades. Que sea mayor a 12 años
	if(edad > 12) 
	{
		//Comparacion para saber que sea menor a 18 años
		if(edad < 18)
		{
			//Muestra de Mensaje
			alert("Usted es un adolecente");
		
		}//Fin if edad < 18
		else
		{
			//Muestra de Mensaje
			alert("Usted no es un adolecente");
		
		}//Fin else edad < 18
	}//Fin if edad > 12
	else
	{
		//Muestra de Mensaje
		alert("Usted no es un adolecente");
	
	}//Fin else edad > 12*/
	
	//Paso a comparar edades. Que sea mayor a 12 años y menor a 18 años
	if(edad > 12 && edad < 18)
	{	
		//Muestra del mensaje
		alert("Usted es un adolecente");
	
	}//Fin if(edad > 12 && edad < 18)
	else
	{
		//Muestra del mensaje
		alert("Usted no es un adolecente");

	}//Fin else(edad > 12 && edad < 18)

}//FIN DE LA FUNCIÓN