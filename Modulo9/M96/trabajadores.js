class Trabajador {
    constructor(nombreTrabajador, apellido, edad, tiempoEnEscuderia) {
        this.nombreTrabajador = nombreTrabajador;
        this.apellido = apellido;
        this.edad = edad;
        this.tiempoEnEscuderia = tiempoEnEscuderia;
        this.sueldoBase = 50000 ;
    }

    getSueldoBase() {
        return this.sueldoBase;
    }

    getTiempoEnEscuderia() {
        return this.tiempoEnEscuderia;
    }
}

class Piloto extends Trabajador {
    constructor(nombreTrabajador, apellido, edad, tiempoEnEscuderia, altura, peso) {
        super(nombreTrabajador, apellido, edad, tiempoEnEscuderia);
        this.altura = altura;
        this.peso = peso;
    }

    calcularSueldo() {
        return 'El sueldo de este piloto será de ' + super.getSueldoBase() + 50000 + (10000 * super.getTiempoEnEscuderia())
    }
}

class Mecanico extends Trabajador {
    constructor(nombreTrabajador, apellido, edad, tiempoEnEscuderia, tieneEstudios) {
        super(nombreTrabajador, apellido, edad, tiempoEnEscuderia);
        this.tieneEstudios = tieneEstudios;
    }

    calcularSueldo() {
        return 'El sueldo de este mecánico será de ' + super.getSueldoBase() + (10000 * this.getTiempoEnEscuderia());
    }
}
