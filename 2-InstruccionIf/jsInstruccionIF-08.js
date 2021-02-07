//id="estadoCivil"
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
	if(edad > 17 && estadoCivil == "Soltero")
	{
		alert("Es soltero y no es menor.");
	}

	

}//FIN DE LA FUNCIÓN