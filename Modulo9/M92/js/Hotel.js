class Hotel {

   constructor(nombreHotel, habitaciones, plantas, superficie) {
		this.nombreHotel = nombreHotel;
		this.habitaciones = habitaciones;
		this.plantas = plantas;
		this.superficie = superficie;
   }

   // GETTERS
   getNombreHotel() {return nombreHotel;}
   getHabitaciones() {return habitaciones;}
   getPlantas() {return plantas;}
   getSuperficie() { return superficie;}

   // SETTERS
	setNombreHotel(nombreHotel) {this.nombreHotel = nombreHotel;}
	setHabitaciones(habitaciones) {this.habitaciones = habitaciones;}
	setPlantas(plantas) {this.plantas = plantas;}
	setSuperficie(superficie) {this.superficie = superficie;}
	
	calcularMantenimiento() {
		let personal, mantenimiento;
		personal = parseInt(this.habitaciones / 20);
		if (this.habitaciones % 20 > 0) {
			personal++;
		}
		mantenimiento = "Se necesitan " + personal + " personas para el mantenimiento, "; 
		mantenimiento += "con un coste de €" + (personal * 1500).toFixed(2);
		return mantenimiento;
	}

	toString() {
		let resultado=""; 
		let mantenimiento = this.calcularMantenimiento();
		resultado += "HOTEL " + this.nombreHotel.toUpperCase() + "\n";
		resultado += this.plantas + " plantas." + "\n";
		resultado += this.habitaciones + " habitaciones." + "\n";
		resultado += this.superficie + " de superficie." + "\n";
		resultado += mantenimiento;	
		return resultado;
	}

}

function pruebaHotel() {
	let hotel, mantenimiento;
	hotel = new Hotel("Plaza Lesseps", 21, 3, "1000m2");
	console.log(hotel);
}