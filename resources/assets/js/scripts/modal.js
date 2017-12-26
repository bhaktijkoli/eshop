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
  showSendModal: function() {

  }
}
