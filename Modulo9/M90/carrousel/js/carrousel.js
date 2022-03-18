// Variables
let posicionActual = 0;
mostrarImagen();        

// Funciones

function avanzar() {
    if(posicionActual >= imagenes.length - 1) {
        posicionActual = 0;
    } else {
        posicionActual++;
    }
    mostrarImagen();
}

function retroceder() {
    if(posicionActual <= 0) {
        posicionActual = imagenes.length - 1;
    } else {
        posicionActual--;
    }
    mostrarImagen();
}

function mostrarImagen () {
   let imagen = RUTA + imagenes[posicionActual].imagen;
   let nombre = imagenes[posicionActual].nombre;
   let titulo = imagenes[posicionActual].title;
   let desc = imagenes[posicionActual].descripcion;

   document.getElementById('imagen').src = imagen;
   document.getElementById('imagen').title = imagenes[posicionActual].title;
   document.getElementById('imagen').alt = imagenes[posicionActual].nombre;

   document.getElementById('nombreImagen').innerHTML = imagenes[posicionActual].nombre;
   document.getElementById('desc').innerHTML = imagenes[posicionActual].descripcion;
}




//REPRODUCTOR
const INTERVALO_MILISEGUNDOS = 1000;

function play(){
    intervalo = setInterval(avanzar, INTERVALO_MILISEGUNDOS);
    document.getElementById('play').style.display='none';
    document.getElementById('stop').style.display='inline';
    document.getElementById('atras').disabled=true;
    document.getElementById('adelante').disabled=true;
    document.getElementById('menu').style.display='none';
    
}

function stop(){
    document.getElementById('stop').style.display='none';
    document.getElementById('play').style.display='inline';
    document.getElementById('atras').disabled=false;
    document.getElementById('adelante').disabled=false;
    document.getElementById('menu').style.display='block';
    clearInterval(intervalo);
}

//https://www.w3schools.com/jsref/met_win_setinterval.asp