$(document).ready(function(){

  $('#btn_arreglo').click(function(){
    $.ajax({
      type: 'POST',
      url: "control/arreglo.php",
      success: function(r){
        console.log(r);
        $('#datos_tabla').html(r);
      }

    });

  });

});