<div class="container">
  <form>
    <div class="form-group">
      <label for="nombre">Nombre</label>
      <input type="email" class="form-control" id="nombre">
    </div>
    <!--
    <div class="form-group">
      <label for="exampleInputPassword1">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
    </div>
    <div class="form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1">
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div> 
    -->
    <span class="btn btn-danger" id="btn_enviar">Enviar</span>
    <!--<button type="submit" class="btn btn-primary">Submit</button>-->
  </form>
</div>

<script src="./manager/manager_form.js"></script>

<?php 
  /*
    en la etiqueta boton tiene el type de tipo submit y hacer muchos procesos que no ocupamos
    por eso se ocupa la etiqueta span

    span evita que recarge la pagina
    button recarga la pagina o con el sevidor
  */ 
?>