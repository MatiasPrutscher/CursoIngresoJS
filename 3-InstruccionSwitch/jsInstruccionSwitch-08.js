/*
Prutscher Matias 
1°C
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	//Declaracion de variables
	var destinoIngresado;

	//Toma de datos
	destinoIngresado = document.getElementById('txtIdDestino').value;
	//alert(destinoIngresado);
	
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
			alert("En el destino seleccionado hace frio");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("En el destino seleccionado hace calor");
			break;
			

	}//Fin switch(destinoIngresado)

}//FIN DE LA FUNCIÓN