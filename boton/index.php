<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php require_once 'app/dependencias.php' ?>
  <title>Document</title>
</head>
<body>

<div class="container">

  <div class="row mt-3">
    <div class="col">
      <span type="button" class="btn btn-primary" onclick="nombre()">Mandar Hola Mundo</span> <br>
      <div id="hola"></div>
    </div>
  </div>


  <div class="row mt-3">
    <div class="col">
      <span type="button" class="btn btn-primary" onclick="mensaje()">Mandar mensajes Ubi Diferente</span>
      <br>
      <div id="mensajeA"></div>
      <div id="mensajeB"></div>
      <div id="mensajeC"></div>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col">
      <span type="button" class="btn btn-primary" onclick="coleccion()">Coleccion Mensaje</span>
      <div id="coleccion"></div>
    </div>
  </div>


</div>

<script src="manager/funciones.js"></script>

</body>
</html>
