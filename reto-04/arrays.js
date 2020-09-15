var semestre01 = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
]
var semestre02 = [
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
]

function unirArrays(a1, a2) {
    arrayUnido = a1.concat(a2);
    console.table (arrayUnido); 
}

unirArrays(semestre01, semestre02);