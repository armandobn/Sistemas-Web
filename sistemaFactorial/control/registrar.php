<?php

require_once '../app/conexion.php';
$conexion=conexion();

$usuario=$_POST['usuario'];
$password=$_POST['password'];


$query_insert="INSERT INTO usuarios(usuario, password)
values ('$usuario', '$password')";
echo $resultado_query= mysqli_query($conexion, $query_insert);

?>