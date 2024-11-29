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

$(document).ready(function() {
  loadFieldCodeToModel();
});

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

