<?php 

  require_once '../app/conexionc.php';
  $conexion=conexion();

  $nombre=$_POST['nombre'];

  $query_insert="INSERT INTO usuariosc(nombres) values ('$nombre')";
  
  echo $resultado_query= mysqli_query($conexion, $query_insert);

?>