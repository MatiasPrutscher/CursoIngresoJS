/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
/*function mostrar()
{
	let nombre;
	let apellido;
	
	/*nombre = prompt("Ingrese su nombre: ");

	txtIdNombre.value = nombre; 

	//txtIdNombre.value = prompt("Ingrese su nombre: ");

	//txtIdNombre.value; no hace falta

*/

function mostrar()
{
	var nombreIngresado;
	var apellido;

	nombreIngresado="Maria";
	apellido="Lopez";

	nombreIngresado = prompt("ingrese su nombre: ","nadie");
	apellido = prompt("ingrese su apellido: ","nadie");
 	
 	//tomar un dato por ID
	//nombreIngresado=document.getElementById('txtIdNombre').value;


	//mostrar un dato por ID
	document.getElementById('txtIdNombre').value=nombreIngresado +" "+ apellido;

 	// mal prompt("ingrese su nombreIngresado: ","nadie");
	alert("su nombreIngresado es : "+ nombreIngresado + " , " + apellido);
	console.log("su nombreIngresado es : "+ nombreIngresado + " , " + apellido);
	//alert(nombreIngresado);

}

