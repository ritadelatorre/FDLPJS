"use strict"; //Obligamos a definir las variables

function ocultarTodo(){
   let secciones = [];
   secciones=document.getElementsByClassName("cuerpo");
   let numeroSecciones = secciones.length;
   console.log("número de secciones", numeroSecciones);
   for (let i=0; i<numeroSecciones; i++) {
      document.getElementById(secciones[i].id).style.display='none';
      //console.log(i, document.getElementById(secciones[i].id));
   }

}



function terminar(){
   ocultarTodo();
   document.getElementById('menu').style.display = 'none'
   document.getElementById("buscaHoteles").style.display='none';
   document.getElementById("salida").style.display = 'block';
}

function mostrar(seccion){
   ocultarTodo();
   document.getElementById("opcion").value = seccion;
   if (seccion == 0 ) {      
      document.getElementById("enunciado").style.display='block';
   } else {
      document.getElementById("buscaHoteles").style.display='block';
      //document.getElementById("datosHotel").style.display = 'block';

   }
}