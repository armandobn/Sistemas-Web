<?php 

  require_once '../app/conexion.php';

  $conexion = conexion();
  $nombre = $_POST['bandera_nombre'];
  $paterno= $_POST['bandera_paterno'];
  $materno= $_POST['bandera_materno'];
  $estatura= $_POST['bandera_estatura'];
  $edad= $_POST['bandera_edad'];
  $peso= $_POST['bandera_peso'];
  

  $query_insert= "INSERT INTO usuario(nombre_usuario,paterno_usuario,materno_usuario,estatura_usuario,edad_usuario, peso_usuario) 
                  values(?,?,?,?,?,?)";

  $insert_preparado = $conexion->prepare($query_insert);
  
  $insert_preparado->bind_param('ssssss', $nombre,$paterno,$materno,$estatura,$edad,$peso); 

  $resultado_insert = $insert_preparado->execute();

  if($resultado_insert){
    echo 1;
  }else{
    echo 0;
  }

  $conexion->close(); 

?>