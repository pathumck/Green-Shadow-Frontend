$(document).ready(function() {
  loadEquipmentIdToModal();
  loadStaffIdsToEquipmentModal();
  loadFieldIdsToEquipmentModal();
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