/*
Prutscher Matias
1°C
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	//Declaracion de variables
	var sexoIngresado;

	//Toma de datos
	sexoIngresado = prompt("ingrese f ó m .");

	//Validacion por while
	while(sexoIngresado != "f" || sexoIngresado !="m")
	{
		sexoIngresado = prompt("ingrese f ó m .");
	}


	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN