function mostrar()
{
	// Declaro variables
	var edad;

	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	//Verifico que sea mayor de edad
	if(edad > 17)
	{
		alert("Es mayor de edad");
	}//Fin del if edad>17

	//Verifico que sea menor de edad
	/*if(edad < 18)
	{
		alert("Es menor de edad");
	}//Fin del if edad<18*/

	else
	{
		alert("Es menor de edad");
	}//Fin del else


}//FIN DE LA FUNCIÓN