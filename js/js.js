function desplegar(boton, parragrafo){

   let quien = document.getElementById(boton).value;

   if (quien=='-') {
         document.getElementById(parragrafo).style.display = 'none';
         document.getElementById(boton).value = '+';
   } else {
         document.getElementById(parragrafo).style.display = 'block';
         document.getElementById(boton).value = '-';
   }
}

function ocultarTodo(){
      let numeroSecciones = document.getElementsByClassName("cuerpo").length;
      
      for (let i=0; i<numeroSecciones; i++) { 
            document.getElementById("modulo" + i).style.display = 'none';
            document.getElementById("b" + i).value = '+';
	}
}
function mostrarTodo(){
      let numeroSecciones = document.getElementsByClassName("cuerpo").length;
      for (let i=0; i<numeroSecciones; i++) { 
            document.getElementById("modulo" + i).style.display = 'block';
            document.getElementById("b" + i).value = '-';
	}
}