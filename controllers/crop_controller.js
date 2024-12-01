$(document).ready(function() {
  loadCropCodeToModel();
})

function loadCropCodeToModel() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/crop/nextcode',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $("#code_modal_crop").text(data.data);
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
} 