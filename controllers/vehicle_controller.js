$(document).ready(function() {
  loadVehicleIdToModel();
  loadStaffIdsToVehicleModel();
  loadVehicleDetailsTable();
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

$('#btn_save_vehicle').click(function () {
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
      loadVehicleIdToModel();
      $('#vehicleNumber_modal_vehicle').val('');
      $('#category_modal_vehicle').val('');
      $('#fuelType_modal_vehicle').val('');
      $('#status_modal_vehicle').val('');
      $('#remarks_modal_vehicle').val('');
      $('#staffId_modal_vehicle').val('');
      alert("Vehicle added successfully!");
      $('#vehicle_modal').modal('hide');
      loadVehicleDetailsTable();
    },
    error: function (error) {
      alert(error.responseText);
    }
  })
});

function loadVehicleDetailsTable() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/vehicle',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      const tableBody = $('#vehicle_details_table_body');
      tableBody.empty();
      data.data.forEach(data => {
        const row = `<tr>
          <td>${data.vehicleCode}</td>
          <td>${data.vehicleNumber}</td>
          <td>${data.vehicleCategory}</td>
          <td>${data.fuelType}</td>
          <td>${data.status}</td>
          <td>${data.remarks}</td>
          <td>${data.staffId}</td>
          <td><button class="btn btn-primary btn-update-vehicle" onclick="loadUpdateVehicleModal('${data.vehicleCode}')">Update</button></td>
          <td><button type="button" class="btn btn-danger btn-delete-vehicle" data-vehicle-code="${data.vehicleCode}">Delete</button></td>   
        </tr>`;
        tableBody.append(row);
      });

      $('.btn-delete-vehicle').click(function () {
        const vehicleCode = $(this).data('vehicle-code');
        deleteVehicle(vehicleCode);
      });
    }
  });
}

function deleteVehicle(vehicleCode) {
  const confirmation = confirm("Are you sure you want to delete this vehicle?");
  if (confirmation) {
    $.ajax({
      url: 'http://localhost:8080/greenshadow/vehicle/' + vehicleCode,
      type: 'DELETE',
      success: function (data) {
        loadVehicleDetailsTable();
        loadVehicleIdToModel();
        alert(vehicleCode + " : Vehicle deleted successfully!");
      },
      error: function (error) {
        alert(error.responseText);
      }
    });
  }
}