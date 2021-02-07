function mostrar()
{
	//Declaracion de variables
	var notaRandom;

	//Genero el número RANDOM entre 1 y 10 
	notaRandom = Math.floor((Math.random() * 10) + 1);

	//Guardo el numero ranbom por console.log
	console.log(notaRandom);
	//Comparo notas 
	//nota 9/10
	if(notaRandom > 8)
	{
		alert("EXCELENTE");
	}//Fin if(notaRandom > 8)
	else
	{
		//Notas menos de 4
		if(notaRandom < 4)
		{
			alert("Vamos, la proxima se puede");
		}//Fin if(notaRandom < 4)
		//Notas del 4 al 8
		else
		{
			alert("APROBÓ");
		}//Fin else (notaRandom < 4)

	}//Fin else (notaRandom > 8)

}//FIN DE LA FUNCIÓN