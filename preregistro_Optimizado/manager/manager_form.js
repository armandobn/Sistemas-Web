$(document).ready(function(){
  
  let nombre;

  $("#btn_enviar").click(function(){
    nombre=$("#nombre").val(); 
    
    recolector="bandera_nombre="+nombre; //esto es el bypass

    $.ajax({
      type: 'POST',
      data: recolector,
      url: 'control/control_form.php',
      success: resultado => { //funcion anonima (esto es una promesa)
        /*success: function(resultado){
          success: resultado => {  //funcion promesa
        */
        console.log(resultado);
      }

    });

  });

 

});