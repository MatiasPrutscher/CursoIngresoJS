/*al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	//Declaro variables
	var mesDelAño;

	//tomo el mes
	mesDelAño = document.getElementById('txtIdMes').value;
	//alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Febrero":
			alert("tiene 28 días.");
			break;

		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("tiene 30 días.");
			break;

		default:
			alert("tiene 31 días.");
			break;
	}//Fin del switch


}//FIN DE LA FUNCIÓN