<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <?php require_once 'app/dependencias.php'; ?>
</head>
<body>

  <!--ID Particles-js-->
  <div id="particles-js"></div>
  <!--<div id="wrap"></div>-->
  <!--<canvas id="c"></canvas>-->
  <div id="wrap"></div>
  <div class="container">

    <!---Sticky top-->
    <div class="row sticky-top text-center text-light" style="margin-top: 100px;">
      <div class="col">
        <h1 class="titulo">Rentas MA</h1>
      </div>
    </div>

    <div class="row text-light">
      <div class="col"></div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 seccion">
        Cansando de andar buscando y no te acepten por X razón
        <br>
        Encuentra el mejor lugar para ti
        <br>
        Para tu:
      </div>
    </div>

    <div class="row text-light">
      <div class="col"></div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 seccion">
        Familia y Mascota
      </div>
    </div>

    <div class="row text-light">
      <div class="col"></div>
      <div class="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 seccion">
        Estudiantes y Trabajadores
      </div>
    </div>

    <nav class="navbar fixed-bottom">
      <div id="seleccionado"></div>
      <div class="row text-light fixed-bottom">
        <div class="col">
        </div>
        <div class="col">
          <h3> Para mas Informacion</h3>
          <div class="row">
            <div class="col">
              <h3><a href="#">Rentas.com</a></h3>
            </div>
          </div>
        </div>
      </div>
    </nav>

  </div>

  <script src="raw/js/app.js"></script>
  <!--Carga  Particulas-->
  <script src="raw/js/mouse_balls.js"></script> <!-- Carga mouse_balls-->
  <!--<script src="raw/js/mouse_spirally.js"></script> Carga mouse_spirally-->

</body>

</html>