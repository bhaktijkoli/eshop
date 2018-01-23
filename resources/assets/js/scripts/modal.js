// Modal JS
window.modal = {
  showModalDefault: function(title, message, button, callback="") {
    $('body').append(`<div class="modal fade" id="dynamicDefaultModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">${title}</h4>
          <hr>
          </div>
          <div class="modal-body">
            ${message}
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">${button}</button>
          </div>
        </div>
      </div>
    </div>`);
    $('#dynamicDefaultModal').modal();
    $("#dynamicDefaultModal").on('hidden.bs.modal', function () {
      $('#dynamicDefaultModal').remove();
      if(typeof callback == "function")
      callback();
    });
  },
  showModelYesNo: function(title, message, callback="") {
    $("body").append(`  <div class="modal fade" id="dynamicDefaultModal" role="dialog">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">${title}</h4>
        </div>
        <div class="modal-body">
          ${message}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" id="modalYes">Yes</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
        </div>
      </div>
    </div>
  </div>`);
  $('#dynamicDefaultModal').modal();
  $('#dynamicDefaultModal #modalYes').click(function(event) {
    $('#dynamicDefaultModal').modal("hide")
    if(typeof callback == "function")
    callback();
  });
  $("#dynamicDefaultModal").on('hidden.bs.modal', function () {
    $('#dynamicDefaultModal').remove();
  });
},
showPasswordModal: function(callback="") {
  $('body').append(`<div class="modal fade" id="dynamicPasswordModal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <form id="dynamicPasswordForm">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Enter your password</h4>
          <hr>
          </div>
          <div class="modal-body">
            <div class="form-group has-feedback">
              <input type="password" class="form-control input-lg" id="dynamicPassword" placeholder="Password"/>
              <i class="fa fa-lock form-control-feedback"></i>
              <p class="help-block"></p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="submit" class="btn btn-primary">Ok</button>
          </div>
        </div>
      </form>
    </div>
  </div>`);
  $('#dynamicPasswordModal').modal();
  $('#dynamicPasswordForm').submit(function(event) {
    event.preventDefault();
    fh.hide_button();
    var password = $('#dynamicPassword').val();
    axios.post('/api/user/confirm',{password:password})
    .then(function (response) {
      var data = response.data;
      fh.show_button();
      if(fh.is_success(data)) {
        $('#dynamicPasswordModal').modal("hide");
        if(typeof callback == "function")
        callback();
      }
      else fh.set_error("#dynamicPassword", data.messages);
    })
    .catch(function (error) {
      fh.show_errorpage(error);
    });
  });
  $("#dynamicPasswordModal").on('hidden.bs.modal', function () {
    $('#dynamicPasswordModal').remove();
  });
},
}
