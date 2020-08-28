var promedio

function sacarPromedio() {
	var numero01 = parseInt(prompt("Primer número:")) 
    var numero02 = parseInt(prompt("Segundo número:")) 
    promediar(numero01, numero02);
    mensaje(promedio) 
}

function promediar(n1, n2) {
    promedio = ((n1 + n2)/2) 
}

function mensaje(txt) {
    alert("El promedio de los 2 número que escribiste es: " + txt) 
}