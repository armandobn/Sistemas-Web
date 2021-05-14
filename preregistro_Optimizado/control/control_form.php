<?php 
  //print_r($_POST['bandera_nombre']); //Esta respuesta la da el servidor ---- es un testing
  //echo 1; //bandera logica nada se imprime desde el servidor
  
  require_once '../app/conexion.php';

  $conexion = conexion();

  $nombre= $_POST['bandera_nombre'];

  $query_insert= "INSERT INTO persona(nombre) values(?)"; // ? pasar parametros limpios

  $insert_preparado = $conexion->prepare($query_insert); //inyecion por dns
  
  $insert_preparado->bind_param('s', $nombre); 
  /* s -string i -int 
    sea del tipo esacto de caracteres o tipo de dato, verifica que el dato es correcto,
  */

  $resultado_insert = $insert_preparado->execute();//control_form.php

  if($resultado_insert){
    echo 1;
  }else{
    echo 0;
  }

  $conexion->close(); //cierra la conexion

?>