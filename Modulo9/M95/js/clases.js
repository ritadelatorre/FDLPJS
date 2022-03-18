class Punto {
    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    getPosX() { return this.posX; }
    getPosY() {return this.posY;}

	 setPosX(posX) {this.posX = posX; }
    setPosY(posY) {this.posY = posY;}

}

class Circulo {
    constructor(centro, radio) {
        this.centro = centro;
        this.radio = radio;
    }

    getCentro() { return this.centro; }
    getRadio() { return this.radio;}


/* Métodos de círculo: */

	distanciaCentro(otroCirculo) {
		let xCuadrado = (this.centro.posX - otroCirculo.centro.posX) ** 2;
		let yCuadrado = (this.centro.posY - otroCirculo.centro.posY) ** 2;
		let distancia = Math.sqrt(xCuadrado + yCuadrado, 2).toFixed(2);
		return distancia;
	}
	esIgual(otroCirculo) {
		let iguales = (this.centro.posX === otroCirculo.centro.posX ) 
			&& (this.centro.posY === otroCirculo.centro.posY) 
			&& (this.radio === otroCirculo.radio)
		return iguales;
	}
	esConcentrico(otroCirculo) {
		//Dos círculos son concéntricos si tienen igual centro.
		let concentricos = (this.centro.posX === otroCirculo.centro.posX) 
			&& (this.centro.posY === otroCirculo.centro.posY) 
		return concentricos;
	}
	tieneIgualRadio(otroCirculo) {
		return (this.radio === otroCirculo.radio);
	}
	esTangente(otroCirculo) {
		//Dos círculos son tangentes si la distancia entre sus centros es igual a la suma de sus radios
		let sumaRadios = this.radio + otroCirculo.radio;
		let distancia = this.distanciaCentro(otroCirculo);
		return sumaRadios == distancia;
	}
	esSecante(otroCirculo) {
		// Dos círculos son secantes si la distancia entre sus centros se encuentra
		// entre la resta de sus radios y la suma de sus radios.

		let sumaRadios = Math.abs(this.radio + otroCirculo.radio);
		let restaRadios = Math.abs(this.radio - otroCirculo.radio);
		let distancia = this.distanciaCentro(otroCirculo);

		return (distancia > restaRadios && distancia < sumaRadios);
	}

	sumaRadio(otroCirculo) {
		return Math.abs(this.radio + otroCirculo.radio);
	}

	tocaA(otroCirculo) {
		//Dos círculos no se tocan si la distancia entre sus centros es mayor a la suma de sus radios
		
		let sumaRadios = Math.abs(this.radio + otroCirculo.radio);
		let distancia = this.distanciaCentro(otroCirculo);
		
		console.clear;
		console.log("Distancia", distancia);
		console.log("Suma Radios", sumaRadios);
		console.log(distancia-sumaRadios > 0);

		return (distancia-sumaRadios > 0);
	}

}