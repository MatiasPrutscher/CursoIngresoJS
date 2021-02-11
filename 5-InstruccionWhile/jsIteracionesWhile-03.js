/*
Prutscher Matias
1°C
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	//Declaracion de variables
	var claveIngresada;

	//Toma de datos
	claveIngresada = prompt("ingrese el número clave.");

	//Validaciond e clave
	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("La clave ingresada es incorrecta, por favor reingrese: ");
	}
	
}//FIN DE LA FUNCIÓN
