function login(){
  iniciar= "usuario=" + $('#usuario').val() +
  "&password=" + $('#password').val();

  console.log(iniciar);

  $.ajax({
    type: "POST",
    url: "control/login.php",
    data: iniciar,
    success: function(r){
      
      if(r==1){
        console.log("conectado");
        window.location = "usuario";
        return false;
      }else{
       
        console.log(r);
       
        return false;

      }

    }
  });

}


function registro(){
  
  informacion= "regis_usuario=" + $('#regis_usuario').val() +
  "&regis_password=" + $('#regis_password').val();

  console.log(informacion);


  $.ajax({
    type: "POST",
    url: "control/guardar_usuario.php",
    data: informacion,
    success: function(r){
      if(r==1){
        console.log("registrado");
        return false;
      }else if(r==2){
        console.log("error");
        return false;
      }else{
        return false;

      }

    }
  });

}


function sesion(){

  let aleatorio=Math.floor((Math.random()*10000000000)+1);
  console.log(aleatorio);
  informacion= "sesion_aleatoria=" +aleatorio;

  $.ajax({
    type: "POST",
    url: "control/sesion.php",
    data: informacion,
    success: function(r){
      $('#texto').html('Aleatorio, '+r);  
      return false;
    }
  });

}

/*
crear una web con dos vistas
construir un boton que genere sesion, que genere una cadena de manera aleatoria de
10 digitos y lo tiene que volver una sesion de usuario y poder leer esa sesion
de usuario

*/