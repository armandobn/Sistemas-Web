<?php 

 session_start();
              
 ?>

<div class="container">


  <div class="row mt-3">
    <div class="col">
      <h4>Bienvenido, <?php echo htmlspecialchars($_SESSION["usuario"]); ?></h4>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <a href="control/logout.php" class="btn btn-success">cerrar sesion</a>
    </div>
  </div>


  <div class="row mt-3">
    <div class="col">
      <span class="btn bg-primary text-light" onclick="sesion()">Crear sesion</span>
    </div>
    <div class="col">
      <div id="texto">Aleatorio, 
      
      <?php 
      
      if(!isset($_SESSION["aleatorio"]) || $_SESSION["aleatorio"] !== true){
       
        echo "sin sesion";
       
      }else{
        echo htmlspecialchars($_SESSION["aleatorio"]); 
      
      }
    
      
      ?> 
      
      </div>
    </div>
    <div class="col">
      <a href="control/logout_aleatorio.php" class="btn btn-success">cerrar sesion aleatoria</a>
    </div>
  </div>