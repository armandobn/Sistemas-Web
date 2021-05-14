<?php 
session_start();
require_once "../app/conexion.php";
$usuario_recibido = $_POST['sesion_aleatoria'];
$_SESSION['aleatorio']=$usuario_recibido;

echo $usuario_recibido;
?>