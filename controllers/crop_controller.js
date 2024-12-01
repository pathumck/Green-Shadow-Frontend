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

$("#btn_save_crop").click(function() {
 const formData = new FormData();
 formData.append('cropCode', $('#code_modal_crop').text());
 formData.append('commonName', $('#commonName_modal_crop').val());
 formData.append('scientificName', $('#scientificName_modal_crop').val());
 formData.append('category', $('#category_modal_crop').val());
 formData.append('season', $('#season_modal_crop').val());
 formData.append('image', $('#image_modal_crop')[0].files[0]);

 $.ajax({
   url: 'http://localhost:8080/greenshadow/crop',
   type: 'POST',
   data: formData,
   contentType: false,
   processData: false,
   success: function(data) {
     alert("Crop added successfully");
     $('#commonName_modal_crop').val('');
     $('#scientificName_modal_crop').val('');
     $('#category_modal_crop').val('');
     $('#season_modal_crop').val('');
     $('#image_modal_crop').val('');
     $('#image_preview_modal_crop').attr('src', '').hide();
     $('#modal_crop').modal('hide');
     loadCropCodeToModel();
   },
   error: function(error) {
     alert(error.responseText);
   }
 });
 
})
