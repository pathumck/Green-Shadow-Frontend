$(document).ready(function() {
  loadCropCodeToModel();
  loadCropDetailsTable();
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
     loadCropDetailsTable();
   },
   error: function(error) {
     alert(error.responseText);
   }
 });
 
})

function loadCropDetailsTable() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/crop',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const tableBody = $('#crop_details_table_body');
      tableBody.empty();
      data.data.forEach(data => {
        const row = `
          <tr>
            <td>${data.cropCode}</td>
            <td>${data.commonName}</td>
            <td>${data.scientificName}</td>
            <td>${data.category}</td>
            <td>${data.season}</td>
            <td><img src="data:image/jpeg;base64,${data.image}" alt="Image" class="image-container"></td>
            <td><button type="button" class="btn btn-primary btn-update" data-bs-toggle="modal" data-bs-target="#modal_crop"
            data-crop-code="${data.cropCode}"
            data-common-name="${data.commonName}"
            data-scientific-name="${data.scientificName}"
            data-category="${data.category}"
            data-season="${data.season}"
            data-image="data:image/jpeg;base64,${data.image}"
            >Update</button></td>
            <td><button type="button" class="btn btn-danger btn-delete" data-crop-code="${data.cropCode}">Delete</button></td>
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
