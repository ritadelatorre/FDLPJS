const clientes = []; 
let indiceCliente = 0;
let indiceCuenta = 0;

function crearCliente(clienteBuscado) {
   document.getElementById("titulo").innerHTML="REGISTRAR NUEVO CLIENTE";   
   document.getElementById("fldDNI").value = clienteBuscado;
   document.getElementById("fldDNI").disabled = true;
   document.getElementById("fldNombre").disabled = false;
   document.getElementById("fldApellidos").disabled = false;
   document.getElementById("1").style.display = "inline-block";
}

function registrarCliente() {
   
   let varDNI = document.getElementById("fldDNI").value;
   let varNombre = document.getElementById("fldNombre").value;
   let varApellidos = document.getElementById("fldApellidos").value;
 
   let cliente = new Cliente(varDNI, varNombre, varApellidos);
   clientes.push(cliente);
   document.getElementById("1").style.display = "none";
   let varNombreCompleto = varNombre + ' ' + varApellidos;
   
    document.getElementById("mensaje").innerHTML = "El cliente <strong>" + varNombreCompleto + "</strong> ha sido registrado.";
}

function eliminarCliente() {
   let cliente = clientes[indiceCliente];
   let varNombreCompleto = cliente.nombre + ' ' + cliente.apellidos;
   clientes.splice(indiceCliente, 1);
   document.getElementById("mensaje").innerHTML = "El cliente <strong>" + varNombreCompleto + "</strong> ha sido eliminado.";

}

function verDatosCliente(opcion) {
  
   
   let cliente = clientes[indiceCliente];
   console.log(cliente);
   let varDNI = cliente.dni;
   let varNombre = cliente.nombre;
   let varApellidos = cliente.apellidos;

   document.getElementById("fldDNI").value = varDNI;
   document.getElementById("fldNombre").value = varNombre;
   document.getElementById("fldApellidos").value = varApellidos;

   document.getElementById("campos").disabled = true;
   document.getElementById("titulo").innerHTML="DATOS DEL CLIENTE";
   
   console.log("opcion ",  opcion);
   if (opcion == 2)  {
      document.getElementById("2").style.display = "inline-block";
   } else {
      document.getElementById("buscaCuenta").style.display = "block";
   }
 
}

function buscarCliente(){
   let opcion = Number(document.getElementById("opcion").value);
   limpiarFormulario();
   let clienteBuscado = document.getElementById("clienteBuscar").value.toUpperCase();

   const clienteEncontrado = clientes.find(clienteEncontrado=> clienteEncontrado.dni == clienteBuscado);
   let indice = clientes.indexOf(clienteEncontrado);
   
   if (indice < 0 && opcion > 1 ) { 
      alert("El cliente " + clienteBuscado + " no está registrado.");
   } else if (indice >= 0 && opcion == 1 ) {
      alert("El cliente " + clienteBuscado + " ya se encuentra registrado.");
   } else { 
      indiceCliente = indice;
      document.getElementById("datos").style.display = 'block';
            
      if (opcion == 1) {
         crearCliente(clienteBuscado);
      } else {
         verDatosCliente(opcion);
      }
   }
}
function operacionesCuenta(opcion) {
   alert(opcion);
}


function buscarCuenta(){
   console.clear();
   console.log("Indice cliente:", indiceCliente);
   console.table(clientes[indiceCliente].cuentas);
   console.table(clientes[indiceCliente].cuentas[0]);

   let cuentaBuscada = document.getElementById("cuentaBuscar").value.toUpperCase();
   console.log("cuentaBuscada:", cuentaBuscada);

   let cuenta = clientes[indiceCliente].cuentas.find(cuentas => cuentas.numCuenta == cuentaBuscada);
   let numeroCuenta = cuenta.numCuenta;
   let indiceCuenta = clientes[indiceCliente].cuentas.findIndex(cuentas => cuentas.numCuenta == cuentaBuscada);
   let indiceCuenta2 = clientes[indiceCliente].buscarCuenta(cuentaBuscada);

   console.table("Numero Cuenta: ", numeroCuenta);
   console.log("Indice cuenta:", indiceCuenta);
   console.log("Indice cuenta2:", indiceCuenta2);
   console.log("Opcion:", opcion);


   if (indiceCuenta < 0 && opcion > 3 ) { 
      alert("La cuenta " + cuentaBuscada + " no está registrada.");
   } else if (indiceCuenta >= 0 && opcion == 3 ) {
      alert("La cuenta  " + cuentaBuscada + " ya se encuentra registrada.");
   } else { 
      if (opcion == 3) {
         cuenta = new Cuenta(numeroCuenta);
         clientes[indiceCliente].cuentas.push(cuenta);         
      } else {
         operacionesCuenta(opcion);
      }
   }
   
}


function iniciaClientes() {
   let cliente, cuenta;
   cliente = new Cliente("11111111K", "Mickey", "Mouse");
   clientes.push(cliente);
   cliente = new Cliente("22222222K", "Minnie", "Mouse");
   clientes.push(cliente);
   cliente = new Cliente("33333333K", "Pato", "Donald");
   clientes.push(cliente);
   cliente = new Cliente("44444444K", "Rico", "McPato");
   clientes.push(cliente);
   cliente = new Cliente("55555555K", "Walt", "Disney");
   clientes.push(cliente);
   cuenta = new Cuenta(123);
   clientes[4].addCuenta(cuenta);

   return ("Clientes cargados");
}

window.onload=function (){
   console.log(iniciaClientes());
   console.log(clientes);
}