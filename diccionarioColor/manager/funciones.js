$(document).ready(function(){

  $("#traducir").click(function(){

    color = $("#obtener").val();

    console.log(color);
    $.ajax({
      type: "POST",
      data: "color="+color,
      url: "control/color.php",
      success: function(r){
        console.log(r)
        if(r==0){
          alert("aun no esta su tradduccion");
        }else{
          //alert(r);
          
          colores=r.split(",");
          console.log(colores);

          const titulo = document.querySelector("#resultado");
          console.log(colores[2].replace('"', ''));
          titulo.style.color="#"+colores[2].replace('"', '');          
          $('#resultado').html(colores[0].replace('"', ''));
          
        }
      }

    });


  });

});