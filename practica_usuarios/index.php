<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <?php require_once 'app/config.php'; ?>
  <?php require_once 'app/dependencias.php'; ?>

</head>
<body>
  
  <?php 
  
    if(isset($_GET['vista_solicitada'])){
      switch($_GET['vista_solicitada']){
        case 'registro':{
          require_once 'view/registro.php';
          break;
        }

        default:{
          require_once 'view/registro.php';
          break;
        }
      } 
    }else{
      require_once 'view/registro.php'; 
    }

  ?>

</body>
</html>