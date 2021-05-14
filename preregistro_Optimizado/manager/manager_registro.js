$(document).ready(function(){
  
  function validar_texto(cadena){
    expresion=/[^A-Za-z]/g;
    valor=cadena.match(expresion);
    console.log(valor);
    return valor;
  }

  function validar_fecha(fecha_nacimiento){
    const fecha = new Date();
    fecha_actual= fecha.getFullYear();
    fecha_arreglo=fecha_nacimiento.split("-");
    valor=fecha_actual-fecha_arreglo[0];
    // console.log(fecha_nacimiento);
    // console.log(fecha_actual);
    // console.log(fecha_arreglo[0]);
    // console.log(valor);
    return valor;
  }
  
  function validar_mobil(telefono){
    //telefono = parseInt(telefono);
    expresion=/^[5][5|6]{1}[\d]{8}$/;
    valor=telefono.match(expresion);
    //console.log(valor);
    return valor;
  }

  function validar_campos(){
    capturado=validar_texto($('#registro_nombre').val());
    if(capturado != null){
      swal('Alerta en el nombre...','Los siguientes caracteres no son validos:\n\n'
      +capturado, 'warning'); 
      return false;
    }
    capturado=validar_texto($('#registro_paterno').val());
    if(capturado != null){
      swal('Alerta en el apellido...','Los siguientes caracteres no son validos:\n\n'
      +capturado, 'warning'); 
      return false;
    }
    capturado=validar_texto($('#registro_materno').val());
    if(capturado != null){
      swal('Alerta en el materno...','Los siguientes caracteres no son validos:\n\n'
      +capturado, 'warning'); 
      return false;
    }
    capturado=validar_fecha($('#registro_fecha_nacimiento').val());
    if(capturado<16){
      swal('Alera en fecha de nacimiento','la fecha no es valida: Eres muy joven','warning');
      return false;
    }else if(capturado > 99){
      swal('Alera en fecha de nacimiento','la fecha no es valida: Eres muy viejo','warning');
        return false;
    }    
    capturado=validar_mobil($('#registro_telefono').val());
    if(capturado == null){
      swal('alerta en el telefono',
      'No debes tener menos de 10 digitos\n'+
      'Recuerda que en la zona metropolitana los numeros inician con 55 o 56\n'+
      'Ejemplo: 5511509700', 
      'warning');
      return false;
    }
    console.log("afuera: "+capturado);
    if(capturado != null){
      
      registro_nombre=$('#registro_nombre').val();
      registro_nombre=registro_nombre.trim();
      registro_nombre=registro_nombre.toUpperCase();
      
      registro_apellido=$('#registro_paterno').val();
      registro_apellido=registro_apellido.trim();
      registro_apellido=registro_apellido.toUpperCase();

      registro_materno=$('#registro_materno').val();
      registro_materno=registro_materno.trim();
      registro_materno=registro_materno.toUpperCase();

      registro_fecha_nacimiento=$('#registro_fecha_nacimiento').val();
      
      registro_telefono=$('#registro_telefono').val();
      
      //console.log(capturado);
      //alert("Agrego informacion");
    }

  }

  function valida_vacios(){
    if($('#registro_nombre').val()==""){
      swal('Upps','Ingresa tu "nombre" por favor','warning');
      return false;
    }else if($('#registro_paterno').val()==""){
      swal('Upps','Ingresa tu "apellido paterno" por favor','warning');
      return false;
    }else if($('#registro_materno').val()==""){
      swal('Upps','Ingresa tu "apellido materno" por favor','warning');
      return false;
    }else if($('#registro_fecha_nacimiento').val()==""){
      swal('Upps','Ingresa tu "fecha de nacimiento" por favor','warning');
      return false;
    }else if($('#registro_telefono').val()==""){
      swal('Upps','Ingresa tu "telefono" por favor','warning');
      return false;
    }else if($('#registro_carrera').val()==""){
      swal('Upps','Selecciona tu carrera por favor','warning');
      return false;
    }else if($('#registro_mail').val()==""){
      swal('Upps','Ingresa tu "mail" por favor','warning');
      return false;
    }else if($('#registro_password').val()==""){
      swal('Upps','Ingresa tu "password" por favor','warning');
      return false;
    }else if($('#registro_password_confirmacion').val()==""){
      swal('Upps','Ingresa tu "Confirmacion de Password" por favor','warning');
      return false;
    }else{
      //swal('Yeah', 'Todos los campos tienen algun valor', 'success');
      validar_campos();
    }
  }

  $('#btn_registro_usuario').click(function(){
    valida_vacios();
    
  });

});