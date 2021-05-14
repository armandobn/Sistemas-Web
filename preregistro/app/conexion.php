<?php

  function conexion(){

    //                      server      user   pass  base
    $conexion = new mysqli('localhost','root','','preregistro');//token de conexion
    
    if($conexion->connect_errno){  //Proceso de la conexion                  -> manera de invocar, no soportan espacios y deben estar pegaditos
      echo 'Error en la conexion'.$conexion->connect_error; // da la informacion del error
    }

    $conexion->set_charset("utf8");

    return $conexion;

  }



?>