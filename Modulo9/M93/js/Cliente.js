class Cliente {

   constructor(dni, nombre, apellidos) {
		this.dni = dni;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.cuentas = [];
   }

   // GETTERS
   getDni() {return dni;}
   getNombre() {this.nombre = nombre;}
   getApellidos() {return apellidos;}
 
   // SETTERS
   setDni() {this.dni = dni;}
   setNombre() {this.nombre = nombre;}
   setApellidos() {this.apellidos = apellidos;}
	addCuenta(cuenta) {
		this.cuentas.push(cuenta);
	}

	buscarCuenta(cuenta) {
		let indice = this.cuentas.findIndex(cuentas => cuentas.numCuenta == cuenta);
		return indice;
	}
	
	toString() {
		let resultado=""; 
		resultado += this.nombre + ' ' + this.apellidos + " (DNI Número: " + this.dni + ")";
		return resultado;
	}

}



function pruebaClaseCliente() {
	let cliente = new Cliente("55555555K", "Mickey", "Mouse");
	alert(cliente);
	console.log(cliente);
}

