/*al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/
function mostrar()
{
	//Declaro variables
	var mesDelAño;

	//Tomo mes
	mesDelAño = document.getElementById('txtIdMes').value;

	//alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio.");
			break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;

		default:
			alert("Falta para el invierno.");
			break;
	}//Fin del switch




}//FIN DE LA FUNCIÓN