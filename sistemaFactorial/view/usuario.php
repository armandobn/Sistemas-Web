<?php 

 session_start();
              
 ?>
<div class="container">

  <div class="row mt-3">
    <div class="col">
      <h1>Sistema de Factorial</h1>
    </div>
  </div>

  <a href="control/logout.php" class="btn btn-success">cerrar sesion</a>


  <div class="row">
    <div class="col">
      <h4>Bienvenido, <?php echo htmlspecialchars($_SESSION["usuario"]); ?></h4>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p>
      Deves incluir el <b>!</b> para poder resolver el factorial <br>
      Ejemplo:<br>
       <div class="text-primary">!4 Correcto </div>
       <div class="text-danger">4 Incorrecto</div>
      </p>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <label for="factorial">Ingresa el factorial a resolver: </label>
      <input type="text" id="factorial" name="factorial">
      <span class="btn btn-primary" id="btn_calcular">Calcular</span>
    </div>
  </div>

  <div class="row">
    <div class="col">
      Resultado:<div id="resultado"></div>
    </div>
  </div>

  <div class="row mt-3">
    <div class="col">
      <h2>Historial</h2>
      <div class="row">
        <div class="col">
          <h5>Con un maximo de 10 Resultados se aguardar</h5>
        </div>
      </div>
      <div id="historial"></div>
    </div>
  </div>

</div>