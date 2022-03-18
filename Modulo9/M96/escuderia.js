class Escuderia {
    constructor(nombre, presupuesto, paisOrigen) {
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.paisOrigen = paisOrigen;
        this.coches = new Array();
        this.trabajadores = new Array();
    }

    getCoches() {
        return this.coches;
    }

    getTrabajadores() {
        return this.trabajadores;
    }
    
    agregarCoche(valor){
        this.coches.push(valor);
    }

    agregarTrabajador(valor){
        this.trabajadores.push(valor);
    }
    
    toString() {
        return `Escudería ${this.nombre}. Tiene un presupuesto de ${this.presupuesto} y su origen es ${this.paisOrigen}.`;
    }

}

class Coche {
    constructor(potencia, velMax, color, precio) {
        this.potencia = potencia;
        this.velMax = velMax;
        this.color = color;
        this.precio = precio;
    }
}


