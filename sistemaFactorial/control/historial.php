<?php

session_start();
require_once '../app/conexion.php';
$conexion=conexion();
              
$historial=$_POST['historial_fac'];

$usuario=$_SESSION["usuario"];

$query_insert="INSERT INTO usuarios(historial)
values ('$historial') where usuario='$usuario' ";
echo $resultado_query= mysqli_query($conexion, $query_insert);


//echo json_encode($historial);

?>