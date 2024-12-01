$(document).ready(function() {
  loadVehicleIdToModel();
});

function loadVehicleIdToModel() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/vehicle/newcode',
    type: 'GET',
    success: function (data) {
      $('#code_modal_vehicle').text(data.data);
    }
  });
}

