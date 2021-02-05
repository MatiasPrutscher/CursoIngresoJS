function mostrar()
{
	// Declaro variables
	var edad;

	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	//Comparo edades
	//+18
	if(edad > 17)
	{
		//Muestro el mensaje mayor de edad
		alert("Usted es mayor de edad");
	
	}//Fin if(edad > 17)
	//Al no ser +18 entra en el else
	else 
	{
		//Compara si es menor de 13
		if(edad < 13)
		{
			//Muestro el mensaje niño
			alert("Usted es un niño");
			
		}// Fin if(edad < 13)
		//Al no ser mayor de 18 y menor de 13 entra
		else 
		{
			//Muestro mensaje de adolecente
			alert("Usted es un adolecente");

		}//Fin else(edad < 13)

	}//Fin else (edad > 17)
	



}//FIN DE LA FUNCIÓN