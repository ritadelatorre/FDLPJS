
let x =    {
   imagen	: "barcelona.jpg",
   nombre: "Barcelona",
   title: "Ciudad de España",
   descripcion	: "Barcelona es la capital de Catalunya, una hermosa ciudad a las orillas del mediterráneo"
}

class Imagen {

   constructor (imagen, nombre, title, descripcion) {
      this.imagen = imagen;
      this.nombre = nombre;
      this.title = title;
      this.descripcion = descripcion;
   }

   getImagen() {return this.imagen}

   setImagen(imagen) {this.imagen = imagen;}
 
   toString
}

let y = new Imagen("barcelona.jpg", "Barcelona", "Ciudad de España", "Barcelona es la capital de Catalunya, una hermosa ciudad a las orillas del mediterráneo")

y.setImagen("Kiev.jpg");
alert(y.getImagen);
alert(y.nombre);

