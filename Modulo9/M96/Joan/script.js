let escuderias = [];

// creo escuderías para no tener que cargarlas
let ferrari = new Escuderia('Ferrari', 20000000, 'Italia');
escuderias.push(ferrari);
let cocheFerrari1 = new Coche(200, 300, 'rojo', 230000);
let cocheFerrari2 = new Coche(100, 350, 'negro', 250000);
ferrari.agregarCoche(cocheFerrari1);
ferrari.agregarCoche(cocheFerrari2);

let mercedes = new Escuderia('Mercedes', 30000000, 'Alemania');
escuderias.push(mercedes);
let cochemercedes1 = new Coche(500, 250, 'gris perla', 560000);
let cochemercedes2 = new Coche(200, 300, 'azul', 550000);
mercedes.agregarCoche(cochemercedes1);
mercedes.agregarCoche(cochemercedes2);

console.clear();
console.log(escuderias);



function crearEscuderia() {
    let nombreUser = document.getElementById('nombreEscuderia').value;
    let presupuestoUser = document.getElementById('presupuestoEscuderia').value;
    let origenUser = document.getElementById('origenEscuderia').value;
	console.clear();
    let existe = escuderias.find(existe => existe.nombre === nombreUser);
    if (existe != undefined){
        console.log(`Ya existe una escuderia con nombre ${nombreUser}:`);
        // agregar los atributos de la escudería existente
    } else {
        escuderias.push(new Escuderia(nombreUser,presupuestoUser,origenUser));
    }

    console.log(escuderias);    
}

function eliminarEscuderia() {
    let eliminarEscuderia = prompt('Ingrese el nombre de la escudería que desea eliminar:');
	console.clear();
    let existe = escuderias.find(existe => existe.nombre === eliminarEscuderia);
    if (existe != undefined){
        escuderias.splice((escuderias.indexOf(existe)),1);
        console.log(escuderias);
    } else {
        console.log(`No tenemos una escudería con el nombre ${eliminarEscuderia}:`);
    }
}

function verEscuderias() {
    if (escuderias.length == 0) {
        console.log('No tenemos escuderias guardadas.');
    } else {
		console.clear();
        console.log('Estas son las escuderias que tenemos:');
        for (let escuderia of escuderias) {			
            console.log(escuderia.toString());
            
        }
    }
}

function addCoche() {
    if (escuderias.length == 0) {
        console.log('No tenemos escuderias guardadas y por lo tanto no podemos añadir coches.');
    } else {
        let escuderiaUser = prompt('Ingrese el nombre de la escudería del coche:');
        let existe = escuderias.find(existe => existe.nombre === escuderiaUser);
      
        if (existe != undefined){
            let i = escuderias.indexOf(existe);

            let potenciaUser = parseInt(document.getElementById('potenciaCoche').value);
            let velUser = parseInt(document.getElementById('velocidadCoche').value);
            let colorUser = document.getElementById('colorCoche').value;
            let precioUser = parseFloat(parseFloat(document.getElementById('precioCoche').value));

            let coche = new Coche(potenciaUser, velUser, colorUser, precioUser);
            escuderias[i].agregarCoche(coche);
            console.clear();
            console.log(`Estos son los coches de ${escuderiaUser}`);
            console.log(escuderias[i].getCoches());
        } else {
			console.clear();
            console.log(`No tenemos una escudería con el nombre ${escuderiaUser}.`);
        }
    }
}

function verCoches() {
    if (escuderias.length == 0) {
		console.clear();
        console.log('No tenemos escuderias guardadas y por lo tanto no podemos mostrarle ningún coche.');
    } else {
        let escuderiaUser = prompt('Ingrese el nombre de la escudería de la que quiere saber los coches:');
        let existe = escuderias.find(existe => existe.nombre === escuderiaUser);
      
        if (existe != undefined){
            let i = escuderias.indexOf(existe);
			console.clear();
            console.log(`Estos son los coches de ${escuderiaUser}:`);
            for (let coche of escuderias[i].getCoches()) {
                console.log(coche);
            }
        } else {
			console.clear();
            console.log(`No tenemos una escudería con el nombre ${escuderiaUser}.`);
        }
    }
}

function addPiloto() {
    if (escuderias.length == 0) {
		console.clear();
        console.log('No tenemos escuderias guardadas y por lo tanto no podemos añadir pilotos.');
    } else {
        let escuderiaUser = prompt('Ingrese el nombre de la escudería del piloto:');
        let existe = escuderias.find(existe => existe.nombre === escuderiaUser);
      
        if (existe != undefined){
            let i = escuderias.indexOf(existe);

            let nombreUser = document.getElementById('nombreTrabajador').value;
            let apellidoUser = document.getElementById('apellidoTrabajador').value;
            let edadUser = parseInt(document.getElementById('edadTrabajador').value);
            let tiempoUser = parseInt(document.getElementById('tiempoTrabajador').value);
            let alturaUser = parseFloat(prompt('Ingrese la altura del piloto'));
            let pesoUser = parseFloat(prompt('Ingrese el peso del piloto'));

            let piloto = new Piloto(nombreUser, apellidoUser, edadUser, tiempoUser, alturaUser, pesoUser);
            escuderias[i].agregarTrabajador(piloto);
            console.clear();
            console.log(`Estos son los trabajadores de ${escuderiaUser}`);
            console.log(escuderias[i].getTrabajadores()); // falta añadir que muestre peso y altura
            console.log(piloto.calcularSueldo());
        } else {
			console.clear();
            console.log(`No tenemos una escudería con el nombre ${escuderiaUser}.`);
        }
    }
}

function addMecanico() {
    if (escuderias.length == 0) {
		console.clear();
        console.log('No tenemos escuderias guardadas y por lo tanto no podemos añadir mecánicos.');
    } else {
        let escuderiaUser = prompt('Ingrese el nombre de la escudería del mecánico:');
        let existe = escuderias.find(existe => existe.nombre === escuderiaUser);
      
        if (existe != undefined){
            let i = escuderias.indexOf(existe);

            let nombreUser = document.getElementById('nombreTrabajador').value;
            let apellidoUser = document.getElementById('apellidoTrabajador').value;
            let edadUser = parseInt(document.getElementById('edadTrabajador').value);
            let tiempoUser = parseInt(document.getElementById('tiempoTrabajador').value);
            let estudiosUser = prompt('¿Tiene estudios el mecánico?');

            let mecanico = new Mecanico(nombreUser, apellidoUser, edadUser, tiempoUser, estudiosUser);
            escuderias[i].agregarTrabajador(mecanico);
			console.clear();
            console.log(`Estos son los trabajadores de ${escuderiaUser}`);
            console.log(escuderias[i].getTrabajadores()); // falta añadir que muestre si tiene estudios o no
            console.log(mecanico.calcularSueldo());
            
        } else {
            console.log(`No tenemos una escudería con el nombre ${escuderiaUser}.`);
        }
    }
}
