
   function mostrarClientes() {
      const $ul1 = document.querySelector("#listado");
      
      $padre = $ul1.parentNode;
		$padre.removeChild($ul1);
      
      const $ul = document.createElement("ul");
      $ul.setAttribute("id", "listado");
      $padre.appendChild($ul);

      const $fragment = document.createDocumentFragment();

      for (const cliente of clientes) {
         const $li = document.createElement("li");
         $li.textContent = cliente;
         $fragment.appendChild($li);
      }

      $ul.appendChild($fragment);
      ocultarTodo();
      document.getElementById("lista").style.display="block";
   }
