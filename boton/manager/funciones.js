function nombre(){
  iniciar= "saludo=" +"Hola Mundo";
  console.log(iniciar);
  $.ajax({
    type: "POST",
    url: "control/mandar.php",
    data: iniciar,
    success: function(r){      
        $('#hola').html('Saludo, '+r);
        return false;
    }
  });

}

function mensaje(){

  mensajeA= "mensajea=" +"Control/Mensaje AA";
  mensajeB= "mensajeb=" +"Control/Mensaje BB";
  mensajeC= "mensajec=" +"Control/Mensaje CC";

  $.ajax({
    type: "POST",
    url: "control/mensajeA.php",
    data: mensajeA,
    success: function(r){      
        $('#mensajeA').html('Vengo desde: '+r);
        //return false;
    }
  });

  $.ajax({
    type: "POST",
    url: "control/mensajeB.php",
    data: mensajeB,
    success: function(r){      
        $('#mensajeB').html('Vengo desde: '+r);
        //return false;
    }
  });

  $.ajax({
    type: "POST",
    url: "control/mensajeC.php",
    data: mensajeC,
    success: function(r){      
        $('#mensajeC').html('Vengo desde: '+r);
        //return false;
    }
  });


}

function coleccion(){
  coleccionA= "colecciona=" +"Coleccion A";
  coleccionB= "coleccionb=" +"Coleccion B";
  coleccionC= "coleccionc=" +"Coleccion C";
  
  let info_viaje="";
  $.ajax({
    type: "POST",
    url: "control/coleccionA.php",
    data: coleccionA,
    success: function(r){      
      info_viaje=info_viaje+"Viajo por: "+r+", ";
        
    }
  });

  $.ajax({
    type: "POST",
    url: "control/coleccionB.php",
    data: coleccionB,
    success: function(r){      
      info_viaje=info_viaje+"Viajo por: "+r+", ";
        
    }
  });

  $.ajax({
    type: "POST",
    url: "control/coleccionC.php",
    data: coleccionC,
    success: function(r){      
      info_viaje=info_viaje+"Viajo por: "+r+", ";
      $('#coleccion').html(info_viaje);
    }
  });

}

