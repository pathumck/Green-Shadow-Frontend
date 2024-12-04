$(document).ready(function() {
  loadEquipmentIdToModel();
})

function loadEquipmentIdToModel() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/equipment/newid',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $("#equipmentId_model").text(data.data);
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}