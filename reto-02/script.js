var numero01 = parseInt(prompt('Escribe un número'));
var mensaje = prompt('Escribe la palabra mágica');
var numero02 = prompt('Escribe un número del 1 al 100');

if (numero01 > 1000) {
    console.info('¡Tu número es mayor a 1000!');
} else if (numero01 === 1000) {
    console.info('¡Tu número es 1000!');
}
else {
    console.info('¡Tu número es menor a 1000!');
};

if (mensaje === 'hola') {
    console.info('Conoces la palabra mágica');
} else {
    console.error('No conoces la palabra mágica');
};

if (numero02 > 10 && numero02 < 50) {
    console.info('Tu número está entre 10 y 50');
} else {
    console.error('Tu número **NO** está entre 10 y 50');
};