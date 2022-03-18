// create Building
//seleccionar que tipo de building
var buildings = [];
var hospitals = [];
var cinemas = [];
var hotels = [];
var output = document.getElementById("text");

console.clear;

let hospital1 = new Hospital("Vilafranca", 2, 1950, 26);
let hospital2 = new Hospital("Hospital General de Catalunya", 10, 25350, 315);
hospitals.push(hospital1, hospital2);
buildings.push(hospital1, hospital2);
console.log(hospitals);

let cinema1 = new Cinema("Cinema Montecarlo", 1, 3180, 2000);
let cinema2 = new Cinema("Cinema Principal", 12, 12450, 2, 6000);
cinemas.push(cinema1, cinema2);
buildings.push(cinema1, cinema2);
console.log(cinemas);

let hotel1 = new Hotel("Hotel Hilton", 22, 73.858, 583);
let hotel2 = new Hotel("Hotel Pepita", 3, 593, 12);
let hotel3 = new Hotel("Catalonia", 3, 593, 12);
hotels.push(hotel1, hotel2, hotel3);
console.log(hotels);
buildings.push(hotel1, hotel2, hotel3);
console.log(buildings);


function createBuilding() {
    let kindOfBuilding = prompt("Selecciona qué tipo de edificio quieres crear: 1. Hospital / 2. Cine / 3. Hotel");

    if (kindOfBuilding == "1" || kindOfBuilding.toLowerCase() == "hospital") {    
        createHospital();   
    } else if (kindOfBuilding == "2" || kindOfBuilding.toLowerCase() == "cine") {
        createCinema();
    } else if (kindOfBuilding == "3" || kindOfBuilding.toLowerCase() == "hotel") {
        createHotel();
    } else {
        alert("El número ingresado es incorrecto.");
    }

}


function createHospital() {
    //let newHospital;
    let hospitalName     = prompt("Nombre del Hospital:");
    let hospitalFloors   = prompt("Plantas:");
    let hospitalArea     = prompt("Superficie m2 (sólo el número) ");
    let hospitalPatients = prompt("Cantidad de Pacientes:");
    
    const newHospital = new Hospital(hospitalName, hospitalFloors, hospitalArea, hospitalPatients);
    hospitals.push(newHospital);
    buildings.push(newHospital);

    output.innerHTML = `Hospital <b>${newHospital.name}</b><br><br>
    <ul>
    <li>Plantas: ${newHospital.floors}</li>
    <li>Superficie: ${newHospital.area}m2</li>
    <li>Pacientes: ${newHospital.patients}</li>
    <li>${newHospital.cleaning(newHospital.area, newHospital.floors)}</li>
    <li>${newHospital.calculateVigilanceCost()}</li>
    <li>${newHospital.distributeLunch(newHospital.patients)}</li>
    </ul>`;
    
}

function createCinema() {
    let cinemaName        = prompt("Nombre del Cine:");
    let cinemaFloors      = prompt("Plantas:");
    let cinemaArea        = prompt("Superficie:");
    let cinemaMaxCapacity = parseInt(prompt("Aforo Máximo:"));
    let attendants        = parseInt(prompt("Total de asistentes a la sesión:"));
    let newCinema;

    if (attendants > cinemaMaxCapacity) { //valida que los asistentes no superen el aforo        
        alert("ERROR. El número de asistentes supera el aforo máximo.");        
    } else {
        //let i = 0;
        let encontrado = false;
        for(let edifici of buildings){
            if(edifici instanceof Cinema){
                if(edifici.name == cinemaName){
                encontrado = true;
                }
            }
        }
		console.clear;
        if(!encontrado){
            newCinema = new Cinema(cinemaName, cinemaFloors, cinemaArea, cinemaMaxCapacity);
            cinemas.push(newCinema);
            buildings.push(newCinema);
            console.log(cinemas);
    
      //      for (var i=0; i<cinemas.length; i++) {   
                output.innerHTML = `Cine <b>${newCinema.name}</b><br><br>
                <ul>
                <li>Plantas: ${newCinema.floors}</li>
                <li>Superficie: ${newCinema.area}m2</li>
                <li>Aforo máximo: ${newCinema.maxCapacity} personas</li>
                <li>${newCinema.cleaning()}</li>
                <li>${newCinema.calculateVigilanceCost()}</li></ul>
                `;
    //        }
        let outputExtra = document.getElementById("extraText");
        outputExtra.innerHTML = `${newCinema.projectSession(attendants, ticketPrice())}`;
        }else{
            alert("El cine "+cinemaName+" ya está en nuestro sistema");
        }
         
    }
}

//calcula precio del ticket CINE
function ticketPrice() {
     
    let day = prompt("Día de la sesión:")
    console.log(day);
    let ticket; 

    if(day.toLowerCase() == "viernes" || day.toLowerCase() == "sábado" || 
       day.toLowerCase() == "sabado" || day.toLowerCase() == "domingo") {

        let time = parseInt(prompt("Horario de la sesión (00)hs"));

        if (time >= 16) {
            ticket = 7.50;

        } else if (time < 16) {
            ticket = 6.50;
        }

    } else {
        console.log(ticket);
        ticket = 5.50; //valor de los días de semana
    }
    return ticket;

    //Preu sessió: El cost de l’entrada entre setmana és 5.50€, Divendres, dissabte diumenge: El cost de l’entrada abans de les 16h és 6.50€ i a partir de les 16h és 7.50€
}

function createHotel(){
    //let newHotel;
    let hotelName   = prompt("Nombre del Hotel:");
    let hotelFloors = prompt("Plantas:");
    let hotelArea   = prompt("Superficie:");
    let hotelRooms  = prompt("Habitaciones:")


    let edifici = buildings.find(edifici => edifici instanceof Hotel && edifici.name === hotelName);

    if(edifici == undefined){
        const newHotel = new Hotel(hotelName, hotelFloors, hotelArea, hotelRooms);
        hotels.push(newHotel);
        buildings.push(newHotel);
        console.log(hotels);
    
        //for (var i=0; i<hotels.length; i++) {
            output.innerHTML = `<b>Hotel ${newHotel.name}</b><br><br>
            <ul>
            <li>Plantas: ${newHotel.floors}</li>
            <li>Superficie: ${newHotel.area}m2</li>
            <li>Habitaciones: ${newHotel.rooms}</li>
            <li>${newHotel.cleaning()}</li>
            <li>${newHotel.calculateVigilanceCost()}</li>
            <li>${newHotel.roomsCleaning()}</li>
            </ul>`;
        //}
    }else{
        alert("El hotel "+hotelName+" ya está en nuestro sistema");
    }
    
}

function verHospitales(){
	alert("ver consola");
	console.clear;
    for(let edifici of buildings){
        if(edifici instanceof Hospital){//Filtra los objetos de la clase Hospital (instanceof)
            console.log("Hospitals");
            for (let atributo in edifici) {//para recorrer un objeto atributo por atributo
                console.log(`${edifici[atributo]}`);  
            }   
        }
    }
}

function verHospital(){
	alert("ver consola");
	console.clear;
    let nombreHospital = prompt("Introduzca el nombre del hospital a buscar");
    for(let edifici of buildings){
        if(edifici instanceof Hospital && edifici.name == nombreHospital){//Filtra los objetos de la clase Hospital (instanceof)
            console.log("Hospitals");
            for (let atributo in edifici) {//para recorrer un objeto atributo por atributo
                console.log(`${edifici[atributo]}`);  
            }   
        }
    }
}


function verHotel(){
	alert("ver consola");
	console.clear;
    let nombreHotel = prompt("Introduce el nombre del hotel:");    
    let edifici = buildings.find(edifici => edifici instanceof Hotel && edifici.name === nombreHotel);
    
    if(edifici != undefined){
        for (let atributo in edifici) {
            console.log(`${edifici[atributo]}`);   
        }
        console.log(edifici.calculateVigilanceCost());
        console.log(edifici.roomsCleaning());
    }
}


function eliminarHotel(){
    let nombreHotel = prompt("Introduce el nombre del hotel:");

    /*let edifici = buildings.find(edifici => edifici.name === nombreHotel);
    
    if(edifici != undefined){
        buildings.splice(buildings.indexOf(edifici),1);
    } else {
        console.log("El hotel no estaba en nuestra aplicación");
    }
    console.log(buildings);*/


    /*hotels.forEach((hotel)=>{
        if(hotel.name == nombreHotel){
            hotels.splice(hotels.indexOf(hotel),1);
        }
    })*/



    let i = 0;
    let encontrado = false;
    while(i < hotels.length && !encontrado){
        if (hotels[i].name === nombreHotel) {
            encontrado = true;
            hotels.splice(i,1);
            alert("El hotel "+ nombreHotel + " ha sido eliminado de nuestra aplicación");
        }
        i++;
    }


}