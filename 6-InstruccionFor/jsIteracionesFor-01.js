/*
Prutscher Matias
1°C
al presionar el botón mostrar 10 repeticiones con números ASCENDENTE, desde el 1 al 10.*/
/*function mostrar()
{
	//Declaracion de variables
	var contador;


	for(contador=0; contador<10; contador++)
	{

		document.write((contador+1)+"<br>");

	}


}*/
function mostrar()
{
	//Declaracion de variables
	var contador;
	var numeroRandom;
	var contadorde1;
	var contadorde2;
	var contadorde3;
	var contadorde4;
	var contadorde5;
	var contadorde6;
	var contadorde7;
	var contadorde8;
	var contadorde9;
	var contadorde10;
	var suma;


	contadorde1 = 0;
	contadorde2 = 0;
	contadorde3 = 0;
	contadorde4 = 0;
	contadorde5 = 0;
	contadorde6 = 0;
	contadorde7 = 0;
	contadorde8 = 0;
	contadorde9 = 0;
	contadorde10 = 0;

	for(contador=0; contador<10000; contador++)
	{

		numeroRandom = Math.floor(Math.random() * 10) + 1;

		switch(numeroRandom)
		{
			case 1:
				contadorde1++;
				break;
			case 2:
				contadorde2++;
				break;
			case 3:
				contadorde3++;
				break;
			case 4:
				contadorde4++;
				break;
			case 5:
				contadorde5++;
				break;
			case 6:
				contadorde6++;
				break;
			case 7:
				contadorde7++;
				break;
			case 8:
				contadorde8++;
				break;
			case 9:
				if(contador < 40)
				{

					continue;

				}
				contadorde9++;
				break;
			case 10:
				contadorde10++;
				break;


		}

	}

	
	console.log("#1 :"+(contadorde1 / contador*100));
	console.log("#2 :"+(contadorde2 / contador*100));
	console.log("#3 :"+(contadorde3 / contador*100));
	console.log("#4 :"+(contadorde4 / contador*100));
	console.log("#5 :"+(contadorde5 / contador*100));
	console.log("#6 :"+(contadorde6 / contador*100));
	console.log("#7 :"+(contadorde7 / contador*100));
	console.log("#8 :"+(contadorde8 / contador*100));
	console.log("#9 :"+(contadorde9 / contador*100));
	console.log("#10 :"+(contadorde10 / contador*100));

	console.log("Las veces fueron: "+contador);



}