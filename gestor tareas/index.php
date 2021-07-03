<?php require_once 'app/config.php'; ?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  
  <?php require_once 'app/dependencias.php'?>
</head>

<body>

  <?php 
  
    if(isset($_GET['vista'])){
      switch($_GET['vista']){
        case "registro":
          require_once 'view/registro.php';
        break;
        case "inicio_sesion":
          require_once 'view/inicio_sesion.php';
        break;
        default:
          echo "Error 404";
        break;
      }
    }else{
      echo 'estas en el index';
    }
  
  ?>


</body>

</html>