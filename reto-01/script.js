var futuro = 20;
var nombre = prompt('Hola, ¿Cuál es tu nombre?');
var edadActual = prompt('¿Cuantos años tienes?');

var edadFutura = parseInt(edadActual) + futuro;

var mensaje01 = '¡Hola '+ nombre + '!';
var mensaje02 = 'En 20 años tendrás '+ edadFutura + ' años';

console.log(mensaje01);
console.log(mensaje02);

alert(mensaje01 + "\n" + mensaje02);