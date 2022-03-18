"use strict";
let ordenador1 = new Ordenador();
let ordenador2 = new Ordenador();

function leerDatosOrdenador(tipMarca, tipModelo, tipCpu, tipMemoria, tipDiscoDuro) {
   let nuevoOrdenador;
   let marca, modelo, cpu, memoria, discoDuro;
   marca = prompt("Indica la marca: ", tipMarca);
   modelo = prompt("Indica el modelo: ", tipModelo);
   cpu = prompt("Indica cpu: ", tipCpu);
   memoria = prompt("Indica la memoria: ", tipMemoria);
   discoDuro = prompt("Indica el disco duro: ", tipDiscoDuro);

   nuevoOrdenador = new Ordenador(marca, modelo, cpu, memoria, discoDuro); 
   console.log(nuevoOrdenador);

   //nuevoOrdenador = new Ordenador(tipMarca, tipModelo, tipCpu, tipMemoria, tipDiscoDuro);  
   return nuevoOrdenador;
} 

function escribeOrdenador(numOrdenador, ordenador) {
   document.getElementById("marca" + numOrdenador).innerHTML = ordenador.getMarca; 
   document.getElementById("modelo" + numOrdenador).innerHTML = ordenador.getModelo; 
   document.getElementById("cpu" + numOrdenador).innerHTML = ordenador.getCpu; 
   document.getElementById("memoria" + numOrdenador).innerHTML = ordenador.getMemoria; 
   document.getElementById("disco" + numOrdenador).innerHTML = ordenador.getDiscoDuro; 

}

function datosOrdenador1() {
   ordenador1 =  leerDatosOrdenador("MSI", "Prestige", "Intel Core i7", "64GB","1TB");
   escribeOrdenador(1, ordenador1);
   alert("Se ha creado el primer ordenador:" + ordenador1); //llama al método toString
   console.log(ordenador1);
   document.getElementById("o1").style.display="block";
}

function datosOrdenador2() {
   ordenador2 =  leerDatosOrdenador("Dell", "Inspiron 15 3000", "5TB", "64GB","DDR3");
   escribeOrdenador(2, ordenador2);
   alert("Se ha creado el segundo ordenador:" + ordenador2); //llama al método toString
   document.getElementById("o2").style.display="block";
}

function crearOrdenadores() {
   datosOrdenador1();
   datosOrdenador2();
}

function cambiarCpu(numOrdenador, ordenador){
   let tipCpu = ordenador.getCpu;
   let nuevoCpu = prompt("Nuevo procesador", tipCpu);
   ordenador.setCpu(nuevoCpu);
   document.getElementById("cpu" + numOrdenador).innerHTML = ordenador.getCpu;
}

function cambiarMemoria(numOrdenador, ordenador){
   let tipMemoria = ordenador.getMemoria;
   let nuevaMemoria = prompt("Nueva memoria", tipMemoria);
   ordenador.setMemoria(nuevaMemoria);
   document.getElementById("memoria" + numOrdenador).innerHTML = ordenador.getMemoria;
}

function cambiarDisco(numOrdenador, ordenador){
   let tipDisco = ordenador.getDiscoDuro;
   let nuevoDisco = prompt("Nuevo disco duro", tipDisco);
   ordenador.setDiscoDuro(nuevoDisco);
   document.getElementById("disco" + numOrdenador).innerHTML = ordenador.getDiscoDuro;
}

function ejecutarPrograma(numOrdenador, ordenador){
   let tipPrograma = "Firefox";
   let programa = prompt("¿Qué programa desea ejecutar?", tipPrograma);
   document.getElementById("programa" + numOrdenador).innerHTML = ordenador.mostrarPrograma(programa);
}

function desplegar(desde, parte){
   let quien = document.getElementById(desde).value;

   if (quien=='-') {
         document.getElementById(parte).style.display = 'none';
         document.getElementById(desde).value = '+';
   } else {
         document.getElementById(parte).style.display = 'block';
         document.getElementById(desde).value = '-';
   }
}