/*Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/
function mostrar()
{
	//Declaro variables
	var horaDelDia

	//tomo la hora
	horaDelDia = document.getElementById('txtIdHora').value;
	//alert(horaDelDia);
	horaDelDia = parseInt(horaDelDia);

	switch(horaDelDia)
	{
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana.");
			break;
	}//Fin del switch
	


}//FIN DE LA FUNCIÓN