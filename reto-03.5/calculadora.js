function calculo() {
	var numero01 = parseInt(prompt("Primer número:"))
	var numero02 = parseInt(prompt("Segundo número"))
	var operacion01 = prompt("¿Qué operación vamos a realizar?")

	calculadora(numero01, numero02, operacion01);
}


function calculadora(n1, n2, operacion) {
	if ( operacion == "sumar") {
		console.log('La suma de ' + n1 + '+' + n2 + " es igual a " + (n1 + n2))
  	}
  	else if  ( operacion == "restar") {
  		console.log('La resta de ' + n1 + '-' + n2 + " es igual a " + (n1 - n2))
  	}
  	else if  ( operacion == "multiplicar") {
  		console.log('La multiplicación de ' + n1 + '*' + n2 + " es igual a " + (n1 * n2))
  	}
  	else if  ( operacion == "dividir") {
  		console.log('La división de ' + n1 + '➗' + n2 + " es igual a " + (n1 / n2))
  	}
  	else {
  		console.log('Deberías revisar con más calma tus decisiones de vida...')
    }
}