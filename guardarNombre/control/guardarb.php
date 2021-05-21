<?php 

  require_once '../app/conexionb.php';
  $conexion=conexion();

  $nombre=$_POST['nombre'];

  $query_insert="INSERT INTO usuariosb(nombres) values ('$nombre')";
  
  echo $resultado_query= mysqli_query($conexion, $query_insert);

?>