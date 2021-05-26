<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <?php require_once "app/dependencias.php"; ?>
</head>
<body id="fondo">
  
  <div class="container">

    <div class="row">
      <div class="col">
        <h1>Traductor de colores</h1>
      </div>
    </div>  

    <div class="row mt-3">
      <div class="col">
        <label for="obtener">Introduce color:</label>
        <input type="text" id="obtener" name="color">
      </div>
      <div class="col">
        <span class="btn btn-success" id="traducir">Traducir a Ingles</span>
      </div>
    </div>


    <div class="row mt-3">
      <div class="col">
        Traduccion al Ingles: 
        <div class="row">
          <div class="col">
            <b><div id="resultado"></div></b>
          </div>
        </div>
      </div>
      
    </div>
  
  </div>

  <script src="manager/funciones.js"></script>

</body>
</html>