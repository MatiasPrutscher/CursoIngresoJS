function mostrar()
{
	// Declaro variables
	var edad;

	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	//Verifico que la edad sea igual a 15
	/*if(edad == 15) //if influye al reglon que esta debajo, aun asi no se realiza asi
		alert("niña bonita");*/

	if(edad == 15)
	{
		alert("niña bonita");
	}//Fin del if edad == 15

			//testing

/*	if(edad == 15)
	{
		alert("Verdadero");
	}
	else
	{
		alert("falso");
	}
*/

}//FIN DE LA FUNCIÓN