$(document).ready(function(){

  $('#btn_sesion').click(function(){

    $.ajax({
      type: 'POST',
      data: {
        "mombre":$('#nombre').val(),
        "password":$('#password').val()
      },
      url:'control/control_login.php',
      success: r=>{
        console.log(r);
      }

    });

  });

});
