<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Ingresar</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="usuario">Usuario</label>
            <input  class="form-control" id="usuario" aria-describedby="emailHelp">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" class="form-control" id="password">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        
        <span type="button" 
          class="btn btn-primary" 
          data-toggle="modal" 
          data-target="#registro" 
          data-dismiss="modal">
          Registrar
        </span>

        <span type="button" class="btn btn-primary" id="btn_login" >Ingresar</span>
      </div>
    </div>
  </div>
</div>