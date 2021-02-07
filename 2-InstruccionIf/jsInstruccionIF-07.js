//id: estadoCivil
function mostrar()
{
	// Declaro variables
	var edad;
	var estadoCivil;

	//tomo los datos  
	edad = document.getElementById('txtIdEdad').value;
	estadoCivil = document.getElementById('estadoCivil').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	//Comparo edades
	if(edad > 18 && estadoCivil == "Soltero")
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

	


}//FIN DE LA FUNCIÓN