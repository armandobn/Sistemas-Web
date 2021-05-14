$(document).ready(function(){

  function validar_vacio(){

    if($('#registro_nombre').val()==""){
      swal('Upps','Ingresa tu "nombre" por favor','warning');
      return false;
    }else if($('#registro_paterno').val()==""){
      swal('Upps','Ingresa tu "apellido paterno" por favor','warning');
      return false;
    }else if($('#registro_materno').val()==""){
      swal('Upps','Ingresa tu "apellido materno" por favor','warning');
      return false;
    }else if($('#registro_estatura').val()==""){
      swal('Upps','Ingresa tu "registro estatura" por favor','warning');
      return false;
    }else if($('#registro_edad').val()==""){
      swal('Upps','Ingresa tu "registro edad" por favor','warning');
      return false;
    }else if($('#registro_peso').val()==""){
      swal('Upps','Ingresa tu "registro peso" por favor','warning');
      return false;
    }


  } 

  $('#btn_registrar_datos').click(function(){
    validar_vacio();

    let registro_nombre=$('#registro_nombre').val();
    let registro_paterno=$('#registro_paterno').val();
    let registro_materno=$('#registro_materno').val();
    let registro_estatura=$('#registro_estatura').val();
    let registro_edad=$('#registro_edad').val();
    let registro_peso=$('#registro_peso').val();
    
    recolector="bandera_nombre=" + registro_nombre + 
                "&bandera_paterno=" + registro_paterno +
                "&bandera_materno=" + registro_materno +
                "&bandera_estatura=" + registro_estatura +
                "&bandera_edad=" + registro_edad +
                "&bandera_peso=" + registro_peso;
  
    $.ajax({
      type: 'POST',
      data: recolector,
      url:'./control/control_datos.php',
      success: function(r){
        
        if(r==1){
          swal('Exito','Registro Exitoso','success');
          return false;
        }else{
          swal('Upps','Algo salio mal','warning');
          return false;
        }
        console.log(r);
      }
            
    });

  });

});