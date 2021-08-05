'use strict'

window.addEventListener('load', function(){
    console.log("DOM Cargado!!");

  var formulario = document.querySelector("#formulario");
  var box_dashed = document.querySelector(".dashed");
  box_dashed.style.display = "none"; 
  
  formulario.addEventListener('submit', function (){
      console.log("Evento submit capturado");

   var nombre = document.querySelector("#nombre").value;
   var apellidos = document.querySelector("#apellidos").value;
   var edad = parseInt(document.querySelector("#edad").value);
   
   if(nombre.trim() == null || nombre.trim().length == 0){
     alert("El nombre no es válido");
return false;
   }
   if(apellidos.trim() == null || apellidos.trim().length == 0){
    alert("Los Apellido no son válidos");
return false;
  }

  console.log(edad);
  if(edad==null || edad<=0 || isNaN(edad)){  
    alert("La edad no es válida");  
return false;
  }
   box_dashed.style.display = "block";

   var p_nombre = document.querySelector("#p_nombre span");
   var p_apellidos = document.querySelector("#p_apellidos span");
   var p_edad = document.querySelector("#p_edad span");
   
   p_nombre.innerHTML = nombre;
   p_apellidos.innerHTML = apellidos;
   p_edad.innerHTML = edad;
   

  });

});
