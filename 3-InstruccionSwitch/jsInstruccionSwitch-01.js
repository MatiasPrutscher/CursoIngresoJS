/*al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!."*/

function mostrar()
{
	//Declaracion de variables
	var mesDelAño;

	//tomo el mes
	mesDelAño = document.getElementById('txtIdMes').value;
	//alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año!!!.");
			break;

		case "Marzo":
			alert("a clases!!!.");
			break;

		case "Julio":
			alert("se vienen las vacaciones!!!.");
			break;

		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;
	}//Fin del switch



}//FIN DE LA FUNCIÓN