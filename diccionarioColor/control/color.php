<?php 

  require_once "../app/conexion.php";

  $conexion=conexion();

  $color=$_POST['color'];

  $query_busqueda="SELECT * FROM colores WHERE color_es='$color'";
  $resultado=mysqli_query($conexion,$query_busqueda);

  if(!$resultado){
    echo 0;
    exit;
  }
  
  
  $color_en="";
  $color_es="";
  $color_hexadecimal="";
  while($fila = mysqli_fetch_array($resultado)){
    $color_en= $fila['color_en'];
    $color_es= $fila['color_es'];
    $color_hexadecimal= $fila['hexadecimal'];
  }
 
  $ola=array(); 
  $ola=$color_en.",".$color_es.",".$color_hexadecimal;
  
  echo json_encode($ola);
  //json_encode

?>