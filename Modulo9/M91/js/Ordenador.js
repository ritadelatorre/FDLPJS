class Ordenador {
		
      constructor (marca, modelo, cpu, memoria, discoDuro) {
          this.marca =marca;
          this.modelo = modelo;
          this.cpu = cpu;
          this.memoria = memoria;
          this.discoDuro = discoDuro;
      }

      //GETTERS
      get getMarca() { return this.marca;}
      get getModelo() { return this.modelo;}
      get getCpu() { return this.cpu;}
      get getMemoria() { return this.memoria;}
      get getDiscoDuro() { return this.discoDuro;}
        
      //SETTERS
      setCpu(cpu) {this.cpu = cpu;}
      setMemoria(memoria) {this.memoria = memoria;}
      setDiscoDuro(discoDuro) {this.discoDuro = discoDuro;}

      /* Un mètode que rebrà un string per paràmetre i retornarà un string que digui: 
      ** "En aquests moments s'està executant: 'X'" 
      ** (X és el paràmetre rebut pel mètode i que normalment serà el nom d'un programa) */
              
      mostrarPrograma(programa){
         return "En estos momentos se está ejecutando: " + programa;
      } 

      toString() {
         let datosOrdenador = "\n";
         datosOrdenador += "Marca: " +  this.marca + "\n";
         datosOrdenador += "Modelo: " +  this.modelo + "\n";
         datosOrdenador += "Procesador: " +  this.cpu + "\n";
         datosOrdenador += "Memoria: " +  this.memoria + "\n";
         datosOrdenador += "Disco Duro: " + this.discoDuro + "\n";
         return datosOrdenador;
      
      }


}