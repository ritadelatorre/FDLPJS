//abstract class
class Building {
    constructor(name, floors, area) {
        this._name = name;
        this._floors = floors;
        this._area = area;
    } 

    get name() {
        return this._name;
    }
    get floors() {
        return this._floors;
    }
    get area() {
        return this._area;
    }
/*
Es crearà un mètode netejar() en la classe adient, la qual mostrarà per pantalla el temps que s’ha trigat a netejar l’edifici, tenint en compte que es tarda en netejar un minut per cada 5 m². A més, si un edifici té més d’una planta, es tarda a pujar mig minut d’una planta a una altra. Per tant, afegirem mig minut per cada planta addicional. Per cada minut de feina es pagarà un euro diari. A més, com que es neteja cada dia, per obtenir el cost mensual,
haurem de multiplicar per 30 (aquest cost mensual també es mostrarà per pantalla)
*/
    cleaning() {
        let min = (this._area/5); 
        if(this._floors >= 1) {
            min = min + this._floors * 0.5;
        } 
        let hours = Math.floor(min / 60); //horas
        let minutes = min % 60; //minutos

        let costPerMonth = min * 30;

        return `Limpiar el edificio requiere ${hours} horas y ${minutes} minutos al día.<br>Costo mensual: ${costPerMonth}€`;
    } 
       
    //calculateVigilanceCost();
         /* método abstracto!
calcularCostVigilancia() que mostrarà el que costa al mes contractar vigilants a cada edifici. Es considera que cada vigilant d’hotel u hospital pot vigilar 1000 m². Per tant, si un edifici té una superfície de 5500 m², necessitarem 6 vigilants. En canvi, els vigilants dels cinemes poden vigilar 3000 m².
Contractar cada vigilant costa als propietaris de l’edifici 1.300 euros mensuals, però els vigilants d’hotels cobren un plus de perillositat de 500 euros mensuals.
*/

}

//HOSPITAL
class Hospital extends Building {
    constructor(name, floors, area, patients) {
        super(name, floors, area);  //SUPER es para los parámetros que hereda de ´Building´
        this._patients = patients;
    }

    get patients() {
        return this._patients;
    }
    set patients(patients) {
        this._patients = patients;
    }

    calculateVigilanceCost() {
        console.log("Estoy en clase hospital", this._area);
        let employee = super.area / 1000;
        if(super.area % 1000 == 0)
        if(employee % 1 == 0) {   // si es entero
            employee = employee;
        } else {          // si es decimal, redondeo para abajo y se agrega 1 empleado más
            employee = Math.floor(employee) + 1;
        }
        let costPerMonth = employee * 1300;
        return `Vigilantes: ${employee}<br>Costo mensual: ${costPerMonth}€`;
    }

    distributeLunch() {
        let mealsPerDay = this._patients * 3;
        return `Se están repartiendo ${mealsPerDay} raciones al día.`
    }
/*
    En l’hospital es reparteix dinar pels malalts tres vegades al dia. Hi haurà una funció repartirDinar() en el lloc adient que mostrarà, quan sigui cridada, el missatge “S’estan repartint xxx racions”, on xxx haurà de contenir el número de malalts de l’hospital. Aquest número pot variar al llarg del temps, i per tant, s’haurà de permetre accedir a l’atribut corresponent, tant per llegir-lo com per modificar-lo, encara que no es faci directament.
*/
}


//CINE
class Cinema extends Building {
    constructor(name, floors, area, maxCapacity) {
        super(name, floors, area);
        this._maxCapacity = maxCapacity;
    }

    get maxCapacity() {
        return this._maxCapacity;
    }
    set maxCapacity(maxCapacity) {
        this._maxCapacity = maxCapacity;
    }

    calculateVigilanceCost() {
        let employee = super.area / 3000;
        if(employee % 1 == 0) {   
            employee = employee;
        } else {         
            employee = Math.floor(employee) + 1;
        }
        let costPerMonth = employee * 1300;
        return `Vigilantes: ${employee}<br>Costo mensual: ${costPerMonth}€`;
    }

    projectSession(attendants, ticketPrice) {
        let total;
        if(attendants <= this._maxCapacity){
            total = attendants * ticketPrice;
        }else{
            total = this._maxCapacity * ticketPrice;
        }
        
        return `Se han recaudado ${total} euros en esta sesión.`
        }
    }

/*
    En el cinema es passa una pel·lícula diverses vegades al dia (en funció del dia de la setmana o de si és un dia festiu). En funció del dia i la hora, en cada sessió es cobrarà l’entrada a un preu diferent. Es crearà en el lloc adient la funció projectarSessio(), que mostrarà el missatge “S’han recaptat xxx.xx euros”, tenint en compte que, per calcular la recaptació, s’ha de multiplicar el preu d’una entrada pel número d’assistents a la sessió, que no podrà superar l’aforament màxim. 
    Per tant, la funció projectarSessió haurà de rebre com a paràmetres el número d’assistents i el preu de l’entrada per aquella sessió. El número d’assistents a la sessió no pot ser més gran que l’aforament total de la sala.
    Preu sessió: El cost de l’entrada entre setmana és 5.50€, Divendres, dissabte i diumenge: El cost de l’entrada abans de les 16h és 6.50€ i a partir de les 16h és 7.50€
*/


//HOTEL
class Hotel extends Building {
    constructor(name, floors, area, rooms) {
        super(name, floors, area); 
        this._rooms = rooms;
    }
    get rooms() {
        return this._rooms;
    }
    set rooms(rooms) {
        this._rooms = rooms;
    }

    calculateVigilanceCost() {
        let employee = super.area / 1000;
        if(employee % 1 == 0) {  
            employee = employee;
        } else {         
            employee = Math.floor(employee) + 1;
        }
        let costPerMonth = employee * (1300 + 500);  //los empleados del hotel cobran un plus de 500€
        return `Vigilantes: ${employee}<br>Costo mensual: ${costPerMonth}€`;
    }

    roomsCleaning() {
        let employee = Math.floor(this._rooms / 20) + 1;
        let costPerMonth = employee * 1000;
        return `Son necesarios ${employee} empleados para limpiar las habitaciones.<br>Costo mensual: ${costPerMonth}`;
    }
/*
    En els hotels cada dia passa el servei d’habitacions. Es calcula que cada membre del servei pot atendre 20 habitacions. Es crearà un mètode que calculi, i mostri per pantalla: 
    a) Quantes persones són necessàries per atendre el servei d’habitacions l’hotel.
    b) Quin és el total necessari pels sous d’aquestes persones, tenint en compte que cada persona cobra 1.000 euros al mes.
*/  
}
