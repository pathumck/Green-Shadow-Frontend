$(document).ready(function() {
  loadStaffIdToModel();
});

function loadStaffIdToModel() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/staff/newid',
    type: 'GET',
    success: function (data) {
      $('#id_modal_staff').text(data.data);
    },
    error: function (error) {
      alert(error.responseText);
    }
  });
}