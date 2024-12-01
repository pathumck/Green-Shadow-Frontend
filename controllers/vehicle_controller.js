$(document).ready(function() {
  loadVehicleIdToModel();
  loadStaffIdsToVehicleModel();
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

$('#btn-save-vehicle').click(function () {
  const vehicle = {
    vehicleCode: $('#code_modal_vehicle').text(),
    vehicleNumber: $('#vehicleNumber_modal_vehicle').val(),
    vehicleCategory: $('#category_modal_vehicle').val(),
    fuelType: $('#fuelType_modal_vehicle').val(),
    status: $('#status_modal_vehicle').val(),
    remarks: $('#remarks_modal_vehicle').val(),
    staffId: $('#staffId_modal_vehicle').val(),
  }

  $.ajax({
    url: 'http://localhost:8080/greenshadow/vehicle',
    type: 'POST',
    data: JSON.stringify(vehicle),
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      $('#modal_vehicle').modal('hide');
      loadVehicleIdToModel();
      alert("Vehicle added successfully!");
    },
    error: function (error) {
      alert(error.responseText);
    }
  });
});

function loadStaffIdsToVehicleModel() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/staff',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      const dropDown = $('#staffId_modal_vehicle');
      dropDown.empty();
      dropDown.append(`<option value="" selected disabled>Select Staff</option>`);
      data.data.forEach(data => {
        const option = `<option value="${data.staffId}">${data.staffId} ${data.firstName} ${data.lastName}</option>`;
        dropDown.append(option);
      });
    }
  });
}

