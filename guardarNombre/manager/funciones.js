$(document).ready(function(){

  $("#btn_guardar").click(function(){

    recolector="nombre="+$('#nombre').val();
    let opcion = prompt("Cual Base de Datos deseas aguardar el nombre:\n"+
                "1-Datosn\n"+
                "2-DatosB\n"+
                "3-DatosC");


    switch(opcion){
      
      case "1":
        $.ajax({
          type: 'POST',
          data: recolector,
          url: "control/guardar.php",
          success: function(r){
            if(r==1){
              alert("Guardado en Datos");
            }else{
              alert("no "+r);
            }
    
          }
    
        });
        break;

      case "2":
        $.ajax({
          type: 'POST',
          data: recolector,
          url: "control/guardarB.php",
          success: function(r){
            if(r==1){
              alert("Guardado en DatosB");
            }else{
              alert("no "+r);
            }
    
          }
    
        });
        break;

      case "3":
        $.ajax({
          type: 'POST',
          data: recolector,
          url: "control/guardarC.php",
          success: function(r){
            if(r==1){
              alert("Guardado en DatosC");
            }else{
              alert("no "+r);
            }
    
          }
    
        });
        break;

    }
    

  });

});

