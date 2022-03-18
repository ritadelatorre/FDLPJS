function agregar() {
   
   let img = prompt("Indica nombre de la imagen jpg (sin extensión):","") + ".jpg";
   let nomImagen = prompt("Indica el nombre de la ciudad:","");
   let titulo = prompt("Indica el tip en la imagen:","");
   let desc = prompt("Escribe una breve descripción:","");

   let ciudad = {
      imagen: img,
      nombre: nomImagen,
      title: titulo,
      descripcion: desc
   }

 //  let ciudad = new Imagen(img, nomImagen, title, descripcion); 

   imagenes.push(ciudad);
   posicionActual = imagenes.length - 1;
   mostrarImagen();

}


function eliminar(){
   
   let mensaje="¿Estás seguro que deseas eliminar la foto de " + imagenes[posicionActual].nombre + "?"
   let confirmar = confirm(mensaje);

   if (confirmar) {
      imagenes.splice(posicionActual, 1);
      //imagenes.splice(indice en el array, elementos a eliminar -o sustituir, nuevo elemento) 
      avanzar();
   }
}

function buscar(){
   
   let nom = prompt("Indica el nombre de la ciudad:","");

   let ciudad = imagenes.find(ciudad => ciudad.nombre === nom);

  
   console.log(ciudad);
   let indice = imagenes.indexOf(ciudad);
   console.log(indice);
   
   if (indice >=0) {
      posicionActual = indice;
      mostrarImagen();
   } else {
      alert("La ciudad ( " + nom  + " ) no se encuentra.");
   }

}

function modificar() {
   let nomImagen = imagenes[posicionActual].nombre;
   let img = imagenes[posicionActual].imagen;
   img = img.substr(0, img.length - 4);
   let titulo = imagenes[posicionActual].title;
   let desc = imagenes[posicionActual].descripcion;

   img = prompt("Nueva imagen jpg para " + nomImagen + "(sin extensión):", img) + ".jpg";
   titulo = prompt("Nuevo tip en la imagen para " + nomImagen, titulo);
   desc = prompt("Escribe una nueva descripción:", desc);

   let ciudad = {
      imagen: img,
      nombre: nomImagen,
      title: titulo,
      descripcion: desc
   }

   imagenes.splice(posicionActual, 1, ciudad);
   mostrarImagen();  
}



function terminar(){
   document.getElementById("menu").style.display="none";
   document.getElementById("atras").style.display="none";
   document.getElementById("adelante").style.display="none";

   document.getElementById('imagen').src = RUTA + "adeu.jpg";
   document.getElementById('imagen').title = "adeu !";
   document.getElementById('imagen').alt = "adeu !";

   document.getElementById('nombreImagen').innerHTML = "Hasta la vista, baby";
   document.getElementById('desc').innerHTML = "... adiós - adeu - ciao - arrivederci ";


}