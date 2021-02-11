/*4. 
Prutscher Matias
1°C
	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
 //ID = txtIdCantidad, Marca, txtIdprecioDescuento 

 /*
 	a- solo if
 	b- solo switch
 	c- if con switch adentro (if cantidad y marca con switch)
 	d- switch con if adentro (cantidad por switch y marca por if)
 */

//Solo con switch

 function CalcularPrecio () 
{
 	//Declaracion de variables
 	var cantidadDeLamparas;
 	var marcaDeLamparas;
 	var descuentoAAplicarSobreElPrecioFinal;
 	var precioDeLamparasIndividual;
 	var precioDeLaparasTotal;
 	var precioDeLamparasFinal;
 	var impuestoSobrePrecioFinal;
 	var porcentaje;

 	//Defino el precio de las lamparas
 	precioDeLamparasIndividual = 35;

 	//Toma de datos
 	cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
 	marcaDeLamparas = document.getElementById('Marca').value;

 	//Paso de caracter a numero
 	cantidadDeLamparas = parseInt(cantidadDeLamparas);

 	//Calculo precio total
 	precioDeLaparasTotal = cantidadDeLamparas * precioDeLamparasIndividual;

 	switch(cantidadDeLamparas)
 	{
 		case 1:
 		case 2:
 			porcentaje = 0;
 			break;

 		case 3:
 			switch(marcaDeLamparas)
 			{
 				case "ArgentinaLuz":
 					porcentaje = 15;
 					break;

 				case "Felipelamparas":
 					porcentaje = 10;
 					break;

 				default:
 					porcentaje = 5;
 					break;

 			}//Fin switch(marcaDeLamparas)
 			break;

 		case 4:
 			switch(marcaDeLamparas)
 			{
 				case "ArgentinaLuz":
 				case "Felipelamparas":
 					porcentaje = 25; 
 					break;

 				default:
 					porcentaje = 20;
 					break;

 			}//Fin switch(marcaDeLamparas)
 			break;

 		case 5:
 			switch(marcaDeLamparas)
 			{
 				case "ArgentinaLuz":
 					porcentaje = 40;
 					break;

 				default:
 					porcentaje = 30;
 					break;

 			}// Fin switch(marcaDeLamparas)
 			break;

 		default:
 			porcentaje = 50;
 			break;


 	}//Fin switch(cantidadDeLamparas)

 	//Realizacion de calculos
 	descuentoAAplicarSobreElPrecioFinal = precioDeLaparasTotal * (porcentaje/100);
 	precioDeLamparasFinal = precioDeLaparasTotal - descuentoAAplicarSobreElPrecioFinal;

 	//Importe mayor a $120, se le agrega un 10% por impuestos
 	if(precioDeLamparasFinal > 119)
 	{
 		//Realizacion de calculos
 		impuestoSobrePrecioFinal = precioDeLamparasFinal * (10/100);
 		precioDeLamparasFinal = precioDeLamparasFinal + impuestoSobrePrecioFinal;

 		//Muestro mensaje sobre la aplicacion del impuesto
 		alert("Usted pago " + impuestoSobrePrecioFinal + " de IIBB.");

 	}//Fin if(precioDeLamparasFinal > 119)


 	//Muestro precio final
 	document.getElementById('txtIdprecioDescuento').value = precioDeLamparasFinal; 

}//Fin function CalcularPrecio ()







/*switch con if adentro

 function CalcularPrecio () 
{
 	//Declaracion de variables
 	var cantidadDeLamparas;
 	var marcaDeLamparas;
 	var descuentoAAplicarSobreElPrecioFinal;
 	var precioDeLamparasIndividual;
 	var precioDeLaparasTotal;
 	var precioDeLamparasFinal;
 	var impuestoSobrePrecioFinal;
 	var porcentaje;

 	//Defino el precio de las lamparas
 	precioDeLamparasIndividual = 35;

 	//Toma de datos
 	cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
 	marcaDeLamparas = document.getElementById('Marca').value;

 	//Paso de caracter a numero
 	cantidadDeLamparas = parseInt(cantidadDeLamparas);

 	//Calculo precio total
 	precioDeLaparasTotal = cantidadDeLamparas * precioDeLamparasIndividual;

 	switch(cantidadDeLamparas)
 	{
 		case 1:
 		case 2:
 			porcentaje = 0;
 			break;

 		case 3:
 			//ArgentinaLuz 15% off
 			if(marcaDeLamparas == "ArgentinaLuz")
 			{

 				porcentaje = 15;


 			}//Fin if(marcaDeLamparas == "ArgentinaLuz")
 			else
 			{	
 				//FelipeLamparas 10% off
 				if(marcaDeLamparas == "FelipeLamparas")
 				{
 							
 					porcentaje = 10;

 				}//Fin if(marcaDeLamparas == "FelipeLamparas")
 				//Otras marcas 5% off
 				else
 				{
 						
 					porcentaje = 5;

 				}//Fin else if(marcaDeLamparas == "FelipeLamparas")

 			}//Fin else if(marcaDeLamparas == "ArgentinaLuz")
 			break;

 		case 4:
 			//Argentinaluz y Felipelamparas tienen un 25% off
 			if(marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas")
 			{
 					 
 				porcentaje = 25;

 			} //Fin if(marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas") 
 			//else otras marcas tienen un 20% off
 			else
 			{
 					 
 				porcentaje = 20;

 			}//Fin else if(marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas")
 			break;

 		case 5:
 			//ArgentinaLuz tiene un 40% off sobre otras marcas
 			if(marcaDeLamparas == "ArgentinaLuz")
 			{
 				
 				porcentaje = 40;


 			}//Fin if(marcaDeLamparas == "ArgentinaLuz")
 			//else otras marcas tienen un 30% off
 			else
 			{
 				 
 				porcentaje = 30;


 			}//Fin else if(marcaDeLamparas == "ArgentinaLuz")
 			break;

 		default:
 			porcentaje = 50;
 			break;


 	}//Fin switch(cantidadDeLamparas)

 	//Realizacion de calculos
 	descuentoAAplicarSobreElPrecioFinal = precioDeLaparasTotal * (porcentaje/100);
 	precioDeLamparasFinal = precioDeLaparasTotal - descuentoAAplicarSobreElPrecioFinal;

 	//Importe mayor a $120, se le agrega un 10% por impuestos
 	if(precioDeLamparasFinal > 119)
 	{
 		//Realizacion de calculos
 		impuestoSobrePrecioFinal = precioDeLamparasFinal * (10/100);
 		precioDeLamparasFinal = precioDeLamparasFinal + impuestoSobrePrecioFinal;

 		//Muestro mensaje sobre la aplicacion del impuesto
 		alert("Usted pago " + impuestoSobrePrecioFinal + " de IIBB.");

 	}//Fin if(precioDeLamparasFinal > 119)


 	//Muestro precio final
 	document.getElementById('txtIdprecioDescuento').value = precioDeLamparasFinal; 

}//Fin function CalcularPrecio ()
*/


/*If con switch adentro

function CalcularPrecio () 
{
 	//Declaracion de variables
 	var cantidadDeLamparas;
 	var marcaDeLamparas;
 	var descuentoAAplicarSobreElPrecioFinal;
 	var precioDeLamparasIndividual;
 	var precioDeLaparasTotal;
 	var precioDeLamparasFinal;
 	var impuestoSobrePrecioFinal;
 	var porcentaje;

 	//Defino el precio de las lamparas
 	precioDeLamparasIndividual = 35;

 	//Toma de datos
 	cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
 	marcaDeLamparas = document.getElementById('Marca').value;

 	//Paso de caracter a numero
 	cantidadDeLamparas = parseInt(cantidadDeLamparas);

 	//Calculo precio total
 	precioDeLaparasTotal = cantidadDeLamparas * precioDeLamparasIndividual;

 	
 	//Comparo cantidad de lamparas compradas 50%off
 	if(cantidadDeLamparas > 5)
 	{
 	 
 		porcentaje = 50;

 	}//Fin if(cantidadDeLamparas > 5)
 	//5 Lamparas
 	else
 	{	
 		//Cantidad de lamparas x5
 		if(cantidadDeLamparas == 5)
 		{	
 			switch(marcaDeLamparas)
 			{
 				case "ArgentinaLuz":
 					porcentaje = 40;
 					break;

 				default:
 					porcentaje = 30;
 					break;
 			}
 			
 		} //if(cantidadDeLamparas == 5)
 		//else 4 lamparas
 		else
 		{	
 			//if cantidad de lamparas *4
 			if(cantidadDeLamparas == 4)
 			{
 				switch(marcaDeLamparas)
 				{

 					case "ArgentinaLuz":
 					case "FelipeLamparas":
 						porcentaje = 25;
 						break;

 					default:
 						porcentaje = 20;
 						break;
 				}

 			}//Fin if(cantidadDeLamparas == 4)
 			else
 			{

 				//if cantidad de lamparas *3
 				if(cantidadDeLamparas == 3)
 				{	
 					switch(marcaDeLamparas)
 					{
 						case "ArgentinaLuz":
 							porcentaje = 15;
 							break;

 						case "FelipeLamparas":
 							porcentaje = 10;
 							break;

 						default:
 							porcentaje = 5;
 							break;

 					}

 				}//Fin if(cantidadDeLamparas == 3)
 				//else para 1 o 2 lamparas
 				else 
 				{	
 					
 					porcentaje = 0;

 				}//Fin else if(cantidadDeLamparas == 3)

 			}//Fin else if(cantidadDeLamparas == 4) 

 		}//Fin else if(cantidadDeLamparas == 5)

 	}//Fin else if(cantidadDeLamparas > 5)


 	//Realizacion de calculos
 	descuentoAAplicarSobreElPrecioFinal = precioDeLaparasTotal * (porcentaje/100);
 	precioDeLamparasFinal = precioDeLaparasTotal - descuentoAAplicarSobreElPrecioFinal;

 	//Importe mayor a $120, se le agrega un 10% por impuestos
 	if(precioDeLamparasFinal > 119)
 	{
 		//Realizacion de calculos
 		impuestoSobrePrecioFinal = precioDeLamparasFinal * (10/100);
 		precioDeLamparasFinal = precioDeLamparasFinal + impuestoSobrePrecioFinal;

 		//Muestro mensaje sobre la aplicacion del impuesto
 		alert("Usted pago " + impuestoSobrePrecioFinal + " de IIBB.");

 	}//Fin if(precioDeLamparasFinal > 119)


 	//Muestro precio final
 	document.getElementById('txtIdprecioDescuento').value = precioDeLamparasFinal; 
 	
}//Fin function CalcularPrecio ()
*/





/* solo con if

function CalcularPrecio () 
{
 	//Declaracion de variables
 	var cantidadDeLamparas;
 	var marcaDeLamparas;
 	var descuentoAAplicarSobreElPrecioFinal;
 	var precioDeLamparasIndividual;
 	var precioDeLaparasTotal;
 	var precioDeLamparasFinal;
 	var impuestoSobrePrecioFinal;
 	var porcentaje;

 	//Defino el precio de las lamparas
 	precioDeLamparasIndividual = 35;

 	//Toma de datos
 	cantidadDeLamparas = document.getElementById('txtIdCantidad').value;
 	marcaDeLamparas = document.getElementById('Marca').value;

 	//Paso de caracter a numero
 	cantidadDeLamparas = parseInt(cantidadDeLamparas);

 	//Calculo precio total
 	precioDeLaparasTotal = cantidadDeLamparas * precioDeLamparasIndividual;

 	//Comparo cantidad de lamparas compradas 50%off
 	if(cantidadDeLamparas > 5)
 	{
 	 
 		porcentaje = 50;

 	}//Fin if(cantidadDeLamparas > 5)
 	//5 Lamparas
 	else
 	{	
 		//Cantidad de lamparas x5
 		if(cantidadDeLamparas == 5)
 		{	
 			//ArgentinaLuz tiene un 40% off sobre otras marcas
 			if(marcaDeLamparas == "ArgentinaLuz")
 			{
 				
 				porcentaje = 40;


 			}//Fin if(marcaDeLamparas == "ArgentinaLuz")
 			//else otras marcas tienen un 30% off
 			else
 			{
 				 
 				porcentaje = 30;


 			}//Fin else if(marcaDeLamparas == "ArgentinaLuz")

 		} //if(cantidadDeLamparas == 5)
 		//else 4 lamparas
 		else
 		{	
 			//if cantidad de lamparas *4
 			if(cantidadDeLamparas == 4)
 			{
 				//Argentinaluz y Felipelamparas tienen un 25% off
 				if(marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas")
 				{
 					 
 					porcentaje = 25;

 				} //Fin if(marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas") 
 				//else otras marcas tienen un 20% off
 				else
 				{
 					 
 					porcentaje = 20;


 				}//Fin else if(marcaDeLamparas == "ArgentinaLuz" || marcaDeLamparas == "FelipeLamparas")

 			}//Fin if(cantidadDeLamparas == 4)
 			else
 			{

 				//if cantidad de lamparas *3
 				if(cantidadDeLamparas == 3)
 				{	
 					//ArgentinaLuz 15% off
 					if(marcaDeLamparas == "ArgentinaLuz")
 					{

 						porcentaje = 15;


 					}//Fin if(marcaDeLamparas == "ArgentinaLuz")
 					else
 					{	
 						//FelipeLamparas 10% off
 						if(marcaDeLamparas == "FelipeLamparas")
 						{
 							
 							porcentaje = 10;

 						}//Fin if(marcaDeLamparas == "FelipeLamparas")
 						//Otras marcas 5% off
 						else
 						{
 						
 							porcentaje = 5;

 						}//Fin else if(marcaDeLamparas == "FelipeLamparas")

 					}//Fin else if(marcaDeLamparas == "ArgentinaLuz")

 				}//Fin if(cantidadDeLamparas == 3)
 				//else para 1 o 2 lamparas
 				else 
 				{	
 					
 					porcentaje = 0;

 				}//Fin else if(cantidadDeLamparas == 3)

 			}//Fin else if(cantidadDeLamparas == 4) 

 		}//Fin else if(cantidadDeLamparas == 5)

 	}//Fin else if(cantidadDeLamparas > 5)

 	//Realizacion de calculos
 	descuentoAAplicarSobreElPrecioFinal = precioDeLaparasTotal * (porcentaje/100);
 	precioDeLamparasFinal = precioDeLaparasTotal - descuentoAAplicarSobreElPrecioFinal;

 	//Importe mayor a $120, se le agrega un 10% por impuestos
 	if(precioDeLamparasFinal > 119)
 	{
 		//Realizacion de calculos
 		impuestoSobrePrecioFinal = precioDeLamparasFinal * (10/100);
 		precioDeLamparasFinal = precioDeLamparasFinal + impuestoSobrePrecioFinal;

 		//Muestro mensaje sobre la aplicacion del impuesto
 		alert("Usted pago " + impuestoSobrePrecioFinal + " de IIBB.");

 	}//Fin if(precioDeLamparasFinal > 119)


 	//Muestro precio final
 	document.getElementById('txtIdprecioDescuento').value = precioDeLamparasFinal; 

}*/
