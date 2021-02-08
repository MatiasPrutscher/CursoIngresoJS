/*
Prutscher Matias 
1°C
al selecionar un destino , indicar el punto cardinal de nuestro
pais en donde se encuentra Norte, Sur, Este u Oeste*/
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
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Norte");
			break;

		case "Mar del plata":
			alert("Este");
			break;

		case "Ushuaia":
			alert("Sur");
			break;

	}//Fin switch(destinoIngresado)

}//FIN DE LA FUNCIÓN