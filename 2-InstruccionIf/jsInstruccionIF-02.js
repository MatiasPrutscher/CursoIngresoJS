function mostrar()
{
	// Declaro variables
	var edad;

	//tomo la edad  
	edad = document.getElementById('txtIdEdad').value;

	//Paso caracter a enteros
	edad = parseInt(edad);

	//El comparador mayor que o menor que son mejores en codigos simples que mayor/igual o menor/igual
	//Verifico que sea mayor de edad
	if(edad > 17)
	{
		alert("Es mayor de edad");
	}//fin del if edad>17


}//FIN DE LA FUNCIÓN