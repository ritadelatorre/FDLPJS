const hoteles = []; //Definimos el array de hoteles con el cual vamos a trabajar
let indiceHotel = 0;
// constructor(nombreHotel, habitaciones, plantas, superficie) {

function limpiarFormulario() {
   document.getElementById("infoHotel").reset();
   document.getElementById("mantenimiento").innerHTML = ""; 
   document.getElementById("mensaje").innerHTML = "";
   document.getElementById("1").style.display = "none";
   document.getElementById("2").style.display = "none";
   document.getElementById("4").style.display = "none";
}
function crearHotel() {
   // alert("creando el nuevo hotel");
   document.getElementById("titulo").innerHTML="REGISTRAR NUEVO HOTEL";   
   document.getElementById("nombreHotel").value = document.getElementById("hotelBuscar").value;
   document.getElementById("nombreHotel").disabled = true;
   document.getElementById("campos").disabled = false;
   document.getElementById("1").style.display = "inline-block";

}

function registrarHotel() {
   
   let varNombreHotel = document.getElementById("nombreHotel").value;
   let varHabitaciones = document.getElementById("habitaciones").value;
   let varPlantas = document.getElementById("plantas").value
   let varSuperficie = document.getElementById("superficie").value;

   let hotel = new Hotel(varNombreHotel, varHabitaciones, varPlantas, varSuperficie);
   hoteles.push(hotel);
   document.getElementById("1").style.display = "none";
   
   let mantenimiento = hotel.calcularMantenimiento();  
   document.getElementById("mantenimiento").innerHTML = mantenimiento;
   document.getElementById("mensaje").innerHTML = "El hotel <b>" + varNombreHotel + "</b> ha sido registrado.";
}

function modificaHotel() {
   let varNombreHotel = document.getElementById("nombreHotel").value;
   let varHabitaciones = document.getElementById("habitaciones").value;
   let varPlantas = document.getElementById("plantas").value
   let varSuperficie = document.getElementById("superficie").value;

   let hotel = new Hotel(varNombreHotel, varHabitaciones, varPlantas, varSuperficie);
   alert (hotel);
   let mantenimiento = hotel.calcularMantenimiento();
   document.getElementById("mantenimiento").innerHTML = mantenimiento;  
   hoteles.splice(indiceHotel, 1, hotel);
   document.getElementById("mensaje").innerHTML = "Los datos del hotel <strong>" + varNombreHotel + "</strong> se han actualizado.";
}

function eliminaHotel() {
   let hotel = hoteles[indiceHotel];
   let varNombreHotel = hotel.nombreHotel;
   hoteles.splice(indiceHotel, 1);
   document.getElementById("mensaje").innerHTML = "El hotel <strong>" + varNombreHotel + "</strong> ha sido eliminado.";

}

function verDatosHotel(opcion) {

   let hotel = hoteles[indiceHotel];
   console.log(hotel);
   let varNombreHotel = hotel.nombreHotel;
   console.log(varNombreHotel);
   let varHabitaciones = hotel.habitaciones;
   let varPlantas = hotel.plantas;
   let varSuperficie = hotel.superficie;

   document.getElementById("nombreHotel").value = varNombreHotel;
   document.getElementById("habitaciones").value = varHabitaciones;
   document.getElementById("plantas").value = varPlantas;
   document.getElementById("superficie").value = varSuperficie;
   document.getElementById("mantenimiento").innerHTML = hotel.calcularMantenimiento();

   switch (opcion) {
      case 2:
         document.getElementById("campos").disabled = true;
         document.getElementById("titulo").innerHTML="DAR DE BAJA AL HOTEL";
         document.getElementById("2").style.display = "inline-block";
         break;
      case 3:
         document.getElementById("campos").disabled = true;
         document.getElementById("titulo").innerHTML="VER DATOS DEL HOTEL";
         document.getElementById("3").style.display = "inline-block";
         document.getElementById("campos").disabled = true;
         break;
      case 4:
         document.getElementById("campos").disabled = false;
         document.getElementById("titulo").innerHTML="MODIFICAR DATOS DEL HOTEL";
         document.getElementById("4").style.display = "inline-block";
         document.getElementById("campos").disabled = false;
   }   
}



function buscarHotel(){
   let hotelBuscado = document.getElementById("hotelBuscar").value;
   let opcion = Number(document.getElementById("opcion").value);

   const hotelEncontrado = hoteles.find(hotelEncontrado=> hotelEncontrado.nombreHotel == hotelBuscado);
   let indice = hoteles.indexOf(hotelEncontrado);
   // OPCIONES 1->CREAR 2->DAR DE BAJA 3->VER DATOS 4->MODIFICAR
   if (indice < 0 && opcion > 1 ) { 
      alert("El hotel " + hotelBuscado + " no está registrado.");
   } else if (indice >= 0 && opcion == 1 ) {
      alert("El hotel " + hotelBuscado + " ya se encuentra registrado.");
   } else { 
      indiceHotel = indice;
      document.getElementById("datosHotel").style.display = 'block';
      limpiarFormulario();
      
      if (opcion == 1) {
         crearHotel();
      } else {
         verDatosHotel(opcion);
      }
   }
}

function iniciaHoteles() {
   let hotel, nuevoNombre;
   hotel = new Hotel("Plaza Lesseps", 21, 3, "1000m2");
   hoteles.push(hotel);
   hotel = new Hotel("Hilton", 200, 10, "10000m2");
   hoteles.push(hotel);
   hotel = new Hotel("Catalonia", 30, 5, "7000m2");
   hoteles.push(hotel);
   hotel = new Hotel("Princess", 40, 5, "7500m2");
   hoteles.push(hotel);
   hotel = new Hotel("Ayre", 30, 3, "500m2");
   hoteles.push(hotel);
   nuevoNombre = document.getElementById("hotelBuscar").value;
   console.log(nuevoNombre);
   hoteles[0].setNombreHotel(nuevoNombre);

   return ("Hoteles cargados");
}

window.onload = function (){
   console.log(iniciaHoteles());
   console.log(hoteles);
}