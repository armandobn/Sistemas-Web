<div class="container">

  <div class="row">
    <div class="col">
      <div class="display-4 text-center">
      Registro Datos Personales
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col"></div>
    <div class="col mt-4">
      <div class="display-4 text-center">
      
      <form id="formulario_registro_datos">

        <div cass="form-group">
          <label for="registro_nombre" class="lead">Nombre(s)</label>
          <input 
            type="text" 
            class="form-control form-control-sm"
            id="registro_nombre"
            name="registro_nombre">
        </div>

        <div cass="form-group">
          <label for="registro_paterno" class="lead">Apellido Paterno</label>
          <input 
            type="text" 
            class="form-control form-control-sm"
            id="registro_paterno"
            name="registro_paterno">
        </div>

        <div cass="form-group">
          <label for="registro_materno" class="lead">Apellido Materno</label>
          <input 
            type="text" 
            class="form-control form-control-sm"
            id="registro_materno"
            name="registro_materno">
        </div>

        <div cass="form-group">
          <label for="registro_estatura" class="lead">Estatura(M)</label>
          <input 
            type="number" 
            class="form-control form-control-sm"
            id="registro_estatura"
            name="registro_estatura">
        </div>
        
        <div cass="form-group">
          <label for="registro_edad" class="lead">Edad</label>
          <input 
            type="number" 
            class="form-control form-control-sm"
            id="registro_edad"
            name="registro_edad">
        </div>

        <div cass="form-group">
          <label for="registro_peso" class="lead">Peso(Kg)</label>
          <input 
            type="number" 
            class="form-control form-control-sm"
            id="registro_peso"
            name="registro_peso">
        </div>

        <div class="form-group mt-4">
          <span class="btn btn-primary btn-block" id="btn_registrar_datos">
            <span class="lead">Registrarse</span>
          </span>
        </div>

      </form>
     
      </div>
    </div>
    <div class="col"></div>
  </div>

</div>

<script src="manager/manager_registro.js"></script>