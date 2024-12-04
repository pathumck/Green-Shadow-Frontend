$(document).ready(function() {
  loadEquipmentIdToModal();
  loadStaffIdsToEquipmentModal();
  loadFieldIdsToEquipmentModal();
  loadEquipmentDetailsTable();
})

function loadEquipmentIdToModal() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/equipment/newid',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $("#equipmentId_modal").text(data.data);
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

$('#btn_save_equipment').click(function() {
  const equipment = {
    equipmentId: $('#equipmentId_modal').text(),
    name: $('#name_modal_equipment').val(),
    type: $('#type_modal_equipment').val(),
    status: $('#status_modal_equipment').val(),
    staffId: $('#staffId_modal_equipment').val(),
    fieldCode: $('#fieldCode_modal_equipment').val(),
  }

  $.ajax({
    url: 'http://localhost:8080/greenshadow/equipment',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(equipment),
    processData: false, 
    success: function(data) {
      loadEquipmentIdToModal();
      loadEquipmentDetailsTable();
      $('#modal_equipment').modal('hide');
      $('#name_modal_equipment').val('');
      $('#type_modal_equipment').val('');
      $('#status_modal_equipment').val('');
      $('#staffId_modal_equipment').val('');
      $('#fieldCode_modal_equipment').val('');
      alert("Equipment saved successfully!");
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
})

function loadStaffIdsToEquipmentModal() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/staff',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#staffId_modal_equipment');
      dropDown.empty();
      dropDown.append(`<option value="" selected disabled>Select Staff</option>`);
      data.data.forEach(data => {
        const option = `<option value="${data.staffId}">${data.staffId} ${data.firstName} ${data.lastName}</option>`;
        dropDown.append(option);
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

function loadFieldIdsToEquipmentModal() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/field',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#fieldCode_modal_equipment');
      dropDown.empty();
      dropDown.append(`<option value="" selected disabled>Select Field</option>`);
      data.data.forEach(data => {
        const option = `<option value="${data.fieldCode}">${data.fieldCode} ${data.name}</option>`;
        dropDown.append(option);
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

function loadEquipmentDetailsTable() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/equipment',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const tableBody = $('#equipment_details_table_body');
      tableBody.empty();
      data.data.forEach(data => {
        const row = `
          <tr>
            <td>${data.equipmentId}</td>
            <td>${data.name}</td>
            <td>${data.type}</td>
            <td>${data.status}</td>
            <td>${data.staffId}</td>
            <td>${data.fieldCode}</td>
            <td><button type="button" class="btn btn-primary btn-update-equipment" data-bs-toggle="modal" data-bs-target="#modal_equipment_update"
            data-equipment-id="${data.equipmentId}"
            data-name="${data.name}"
            data-type="${data.type}"
            data-status="${data.status}"
            data-staff-id="${data.staffId}"
            data-field-code="${data.fieldCode}"
            >Update</button></td>
            <td><button type="button" class="btn btn-danger btn-delete-equipment" data-equipment-id="${data.equipmentId}">Delete</button></td>
          </tr>
        `;
        tableBody.append(row);
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}