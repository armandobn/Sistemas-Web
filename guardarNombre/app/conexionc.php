<?php 

function conexion(){
  $conexion = new mysqli('localhost','root','','datosc');
  
  if($conexion->connect_errno){ 
    echo 'Error en la conexion'.$conexion->connect_error; 
  }

  $conexion->set_charset("utf8");

  return $conexion;

}

?>