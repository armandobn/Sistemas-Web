$(document).ready(function(){


  function factorial (n) {
    let total = 1; 
    for (i=1; i<=n; i++) {
      total = total * i; 
    }
    return total; 
  }

  historial=[];

  $("#btn_registro").click(function(){
  
    registrar= "usuario=" +  $('#regis_usuario').val() +
    "&password=" + $('#regis_password').val();

    console.log(registrar);

    $.ajax({
      type: 'POST',
      url: "control/registrar.php",
      data: registrar,
      success: function(r){
        if(r==1){
          swal('Exito','Registro Exitoso','success');
          return false;
        }else{
          swal('Upps','Algo salio mal','warning');
          return false;
        }
      }

    });

  });

  $("#btn_login").click(function(){
  
    login= "usuario=" +  $('#usuario').val() +
    "&password=" + $('#password').val();

    console.log(login);

    $.ajax({
      type: 'POST',
      url: "control/login.php",
      data: login,
      success: function(r){
        if(r==1){
          swal('Exito','Ingresando','success');
          window.location = "usuario";
          return false;
        }else{
          swal('Upps','Algo salio mal','warning');
          return false;
        }
       
      }

    });

  });

  $('#btn_calcular').click(function(){

    calcular=$('#factorial').val();

    if(calcular.includes("!")){
      //alert("yes");
      
    }else{
      swal('Upps','Debes incluir "!"','warning');
      return false;
    }

    calcular=calcular.replace('!', '');

    calcular=parseInt(calcular);
    //console.log(factorial(calcular));
    resultado=factorial(calcular);

    resultado_mostrar="";
    resultado_mostrar="!"+calcular+"=";
    for(i=1; i<=calcular-1; i++){
      resultado_mostrar=resultado_mostrar+i+"*";
    }

    resultado_mostrar=resultado_mostrar+calcular+"="+resultado;
    //console.log(historial.length);

    if(historial.length<10){
      historial.unshift(resultado_mostrar+"</br>");
      //console.log("unischi: "+historial);
    }else{
      historial.pop();
      historial.unshift(resultado_mostrar+"</br>");
      //console.log("pop: "+historial);
    }
    

    $('#resultado').html(resultado_mostrar);
    
    $('#historial').html(historial);


    //guardar bd
    historial_fac= "historial_fac=" +  historial;
    
    //console.log(historial);

    $.ajax({
      type: 'POST',
      url: "control/historial.php",
      data: historial_fac,
      success: function(r){
       console.log(r);
      }

    });



  });



});