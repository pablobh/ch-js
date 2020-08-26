var dias = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
    "Domingo"
];

function semanario() {
    for (var i = 0; i < dias.length; i++) {
        if (i == 6) {
            alert('Hey no te parece MARAVILLOSO que hoy sea ' + dias[i] + ' ?')
        }
        switch (i) {
            case 1:
                console.log('Hey! ' + dias[i] + ' es un día par')
                break;
            case 3:
                console.log('Hey! ' + dias[i] + ' es un día par')
                break;
            case 5:
                console.log('Hey! ' + dias[i] + ' es un día par');
                break;
            default:
                console.log('Hey! ' + dias[i] + ' es un día IMPAR')
                break;
        }
    }
}

// Esto quedará para otro día
// function semanario2() {
//     for (var i = 0; i < dias.length; i++) {
//         if (i == 1) || (i == 3) || (i == 5) {
//             console.log('Hey! ' + dias[i] + ' es un día par')
//         }
//         else {
//             console.log('No pasa nada')
//         }
//     }
// }