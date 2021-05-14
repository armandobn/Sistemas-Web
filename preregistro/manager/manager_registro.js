$(document).ready(function(){ //se dispara ready hasta que mi documento haya cargado
  /*gousting que es?*/

function valida_confirmacion_password(){
  if($('#registro_password').val() != $('#registro_password_confirmacion').val()){
    swal('Upps', 'Las contraseñas no coincidden, favor de verificar', 'warning'); 
    $('#registro_password_confirmacion').val("");
    return false;
  }else{
    registro_password = $('#registro_password').val();
    //A partir de aqui usen la nombreclatura para su ajax q mas les agrade

    //Recoleccion de datos validados
    recolector_de_informacion="registro_nombre" + registro_nombre +
                              "&registro_paterno" + registro_paterno +
                              "&registro_materno" + registro_materno +
                              "&registro_fecha_nacimiento" + registro_fecha_nacimiento +
                              "&registro_telefono" + registro_telefono +
                              "&registro_carrera" + registro_carrera +
                              "&registro_mail" + registro_mail +
                              "&registro_password" + registro_password;

    $.ajax({
      type:'POST',
      data: recolector_de_informacion,
      url: 'control/control_registro.php',
      success: resultado=>{
        //Dejare pendiente aqui para  trabajar en el control 1 min para copiar
      }

    });

  }

}

  function valida_confirmacion_email(){
    //Garantizamos que el mail y su confirmacion sean iguales
    //La funcon pasada a nos esta diciendo que o estas bien o esta bien asi que esta validacion
    //es mas corta
    if($('#registro_mail').val() != $('#registro_mail_confirmacion'.val())){
      //De no ser iguales, avisamos y limpiamos el campo para obligar al usuario a reingresar
      swal('Upps', 'Los emails no coinciden, favor de verificar', 'warning'); 
      $('#registro_mail_confirmacion').val("");//Limpiamos el control
      return false; //Paramos el flujo
    }else{
      //al ser iguales
      registro_mail= $('#registro_mail').val();//Guardo el valor del primer mail
      valida_confirmacion_password();//invoco siguiente validaion
    }

  }

  function valida_construccion_email(){
    cadena = $('registro_mail').val();// lecturaa del control HTML
    //RegExp para validar construccion de email (no es mia, la encontre pero aplica muy bien)
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.text(cadena)){
      //De ser positiva nos lanzamos a la siguiente validacion
      valida_confirmacion_email();
    }else{
      //De ser negativa avisamos
      swal('Upps', 'Ingresa un email valido por favor', 'warning');
      return false;
    }

  }

  function valida_seleccion_carrera(){
    carrera=$('registro_carrera').val();
    carrera=carrera.toUpperCase();
    if(carrera == 'SIS' || carrera == 'IND' || carrera == 'GES'){
      registro_carrera=carrera;
      valida_construccion_email();
    }
  }

  function valida_telefono(){
    telefono = $('#registro_telefono').val();
    telefono = parseInt(telefono);
    if(telefono < 0){
      swal('alerta en el telefono', 'No existen numeros de telefono Negativos', 'warning');
      return false;
    }else{
      telefono = telefono.toString();
      if(telefono.length > 10 ){
        swal('alerta en el telefono',
         'No debes tener mas de 10 digitos\n'+
         'Recuerda que en la zona metropolitana los numeros inician con 55 o 56\n'+
         'Ejemplo: 5511509700', 
         'warning');
        return false;
      }else if(telefono.length < 10){
        swal('alerta en el telefono',
         'No debes tener menos de 10 digitos\n'+
         'Recuerda que en la zona metropolitana los numeros inician con 55 o 56\n'+
         'Ejemplo: 5511509700', 
         'warning');
        return false;
      }else{
        registro_telefono= $('#registro_telefono').val();
        valida_seleccion_carrera();
      }

    }

  }

  function valida_fecha_nacimiento(){
    if($('#registro_fecha_nacimiento').val() !=""){
      // alert($('#registro_fecha_nacimiento').val());
      fecha_ingresada = $('#registro_fecha_nacimiento').val().split("-");
      // alert(fecha_ingresada[0]);
      // alert(fecha_ingresada[1]);
      // alert(fecha_ingresada[2]);
      edad = 2021 - fecha_ingresada[0];
      if(edad<16){
        swal('Alera en fecha de nacimiento','la fecha no es valida: Eres muy joven','warning');
        return false;
      }else if(edad > 99){
        swal('Alera en fecha de nacimiento','la fecha no es valida: Eres muy viejo','warning');
        return false;
      }else{
        registro_fecha_nacimiento = $('#registro_fecha_nacimiento').val();
        valida_telefono();
      }

    }
  }

  function valida_construccion_alfabetica(){
    cadena = $('#registro_nombre').val();

    regexpl = /[^\w\s]/gi;//te permite solo letras
    regexp2 = /[^A-Z\s]/gi;

    resultado1=cadena.match(regexpl);
    resultado2=cadena.match(regexp2);

    if(resultado1 != null || resultado2 != null){
      if(resultado1 == null){
        resultado1 = "";
      }
      if(resultado2 == null){
        resultado2 = "";
      }

      swal('Alerta en el nombre...','Los siguientes caracteres no son validos:\n\n'+
        resultado2+resultado1, 'warning'); 
      return false;
    }else{

      registro_nombre=$('#registro_nombre').val();
      registro_nombre=registro_nombre.trim();
      registro_nombre=registro_nombre.toUpperCase();

      cadena = $('#registro_paterno').val();
      resultado1=cadena.match(regexpl);
      resultado1=cadena.match(regexp2);

      if(resultado1 != null || resultado2 != null){
        if(resultado1 == null){
          resultado1 = "";
        }
        if(resultado2 == null){
          resultado2 = "";
        }
  
        swal('Alerta en el apellido paterno...','Los siguientes caracteres no son validos:\n\n'+
          resultado2+resultado1, 'warning'); 
        return false;
      }else{
        registro_paterno=$('#registro_paterno').val();
        registro_paterno=registro_nombre.trim();
        registro_paterno=registro_nombre.toUpperCase();

        cadena = $('#registro_materno').val();
        resultado1=cadena.match(regexpl);
        resultado1=cadena.match(regexp2);

        if(resultado1 != null || resultado2 != null){
          if(resultado1 == null){
            resultado1 = "";
          }
          if(resultado2 == null){
            resultado2 = "";
          }
    
          swal('Alerta en el apellido materno...','Los siguientes caracteres no son validos:\n\n'+
            resultado2+resultado1, 'warning'); 
          return false;
        }else{
          registro_materno=$('#registro_materno').val();
          registro_materno=registro_nombre.trim();
          registro_materno=registro_nombre.toUpperCase();
          
          //alert("Textos Listos");
          valida_fecha_nacimiento();

        }

      }

    }
    
  }

  function valida_vacios(){
    if($('#registro_nombre').val()==""){
      swal('Upps','Ingresa tu "nombre" por favor','warning');
      return false;//para el flujo de informacion
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
      valida_construccion_alfabetica();
    }
  }

  $('#btn_registro_usuario').click(function(){
    valida_vacios();
  });

});