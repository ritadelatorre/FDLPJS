class Cuenta {
   constructor(numCuenta) {
		this.numCuenta = numCuenta;
		this.saldo = 0;
   }

   ingresar(cantidad){
      this.saldo +=cantidad;
   }

   retirar(cantidad){
      if (cantidad > this.saldo) {
         alert('No hay saldo suficiente para retirar');
      } else {
         this.saldo -=cantidad;
      }
   }

   toString() {
      let resultado=""; 
		resultado += this.numCuenta + ': €' + this.saldo.toFixed(2);
		return resultado;
   }

}