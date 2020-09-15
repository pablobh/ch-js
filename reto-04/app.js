function Computador(marca, tipo, serial) {
    this.marca = marca;
    this.tipo = tipo;
    this.serial = serial;

    this.getDatosPC = function () {
        if (this.tipo == 'Desktop' || this.tipo == 'Notebook') {
            console.log ( this.tipo + ' marca ' + this.marca);
        }
        else {
            console.error(this.tipo + ' no es un tipo de computador válido')
        }
    }
}

var PC = new Computador("Dell", "Desktop", "LOQ-C10Y");
PC.getDatosPC();