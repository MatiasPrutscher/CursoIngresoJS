/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	/*let nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	alert(nombreIngresado);*/
	
	/*var nombreIngresado;
	nombreIngresado=txtIdNombre.value;
	console.log("nombreIngresado");
	console.log(nombreIngresado);
	alert(nombreIngresado);*/

	var nombreIngresado;
	/* nombreIngresado= txtIdNombre.value; //sin value muestra el input html en vez del valor del mismo*/
	nombreIngresado= document.getElementById('txtIdNombre').value; //hace lo mismo que la linea anterior
	 alert(nombreIngresado);

}


