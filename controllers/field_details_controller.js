$(document).ready(function() {
  loadFieldCodeToModel();
});

function previewImage(input, previewId) {
  if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
          const preview = document.querySelector(previewId);
          preview.src = e.target.result; 
          preview.style.display = 'block';
      };
      reader.readAsDataURL(input.files[0]);
  }
}

function loadFieldCodeToModel() {
  $.ajax({
      url: 'http://localhost:8080/greenshadow/field/nextcode',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
          $('#code_model_field').text(data.data);
      },
      error: function (error) {
          alert(error.responseText);
      }
  });
}

$('#btn_save_field').click(function() {
  console.log("save");
  const formData = new FormData();
  formData.append('fieldCode', $('#code_model_field').text());
  formData.append('name', $('#name_model_field').val());
  formData.append('location', $('#location_model_field').val());
  formData.append('size', $('#size_model_field').val());
  const imageOneFile = $('#imageOne_model_field')[0].files[0];
  if (imageOneFile) {
      formData.append('imageOne', imageOneFile);
  }
  const imageTwoFile = $('#imageTwo_model_field')[0].files[0];
  if (imageTwoFile) {
      formData.append('imageTwo', imageTwoFile);
  }

    $.ajax({
      url: 'http://localhost:8080/greenshadow/field',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(data) {
          alert("Field saved successfully!");
          loadFieldCodeToModel();
          $('#model_field').modal('hide');
          $('#name_model_field').val('');
          $('#location_model_field').val('');
          $('#size_model_field').val('');
          $('#imageOne_model_field').val('');
          $('#imageTwo_model_field').val('');
          $('#imageOnePreview_model_field').attr('src', '');
          $('#imageTwoPreview_model_field').attr('src', '');
          $('#imageOnePreview_model_field').hide();
          $('#imageTwoPreview_model_field').hide();          
      },
      error: function(error) {
          alert(error.responseText);
      }
  });
});
