<?php 

  require_once '../app/conexion.php';
  $conexion=conexion();

  $nombre=$_POST['nombre'];

  $query_insert="INSERT INTO usuarios(nombres) values ('$nombre')";
  
  echo $resultado_query= mysqli_query($conexion, $query_insert);

?>