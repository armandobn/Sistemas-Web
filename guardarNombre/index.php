<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <?php require_once 'app/dependencias.php';?>
</head>
<body>
  
  
  <div class="container">

    <div class="row mt-3">
      <div class="col">
        <label for="nombre">Ingresa nombre</label>
        <input type="text" name="nombre" id="nombre">
      </div>
    </div>

    <div class="row">
      <div class="col">
        <span class="btn btn-success" id="btn_guardar">Guardar Nombre</span>
      </div>
    </div>
  
  </div>

  <script src="manager/funciones.js"></script>
</body>
</html>