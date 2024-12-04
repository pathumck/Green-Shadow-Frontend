$(document).ready(function() {
  selectFieldCode();
  selectCropCode();
});

function selectFieldCode() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/field',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#sel_fc_fieldCode');
      dropDown.empty();
      dropDown.append(`<option value="" selected disabled>Select Field</option>`);
      data.data.forEach(data => {
        const option = `<option 
                        data-fieldCode="${data.fieldCode}"
                        data-name="${data.name}"
                        data-location="${data.location}"
                        data-imageOne="${data.imageOne}" 
                        data-imageTwo="${data.imageTwo}"
                        value="${data.fieldCode}">${data.fieldCode} ${data.name}</option>`;
        dropDown.append(option);
      });

      $('#sel_fc_fieldCode').on('change', function() {
        const selectedOption = $(this).find(':selected');
        const fieldCode = selectedOption.attr('data-fieldCode');
        const name = selectedOption.data('name');
        const location = selectedOption.data('location');
        const imageOneBase64 = selectedOption.attr('data-imageOne');
        const imageTwoBase64 = selectedOption.attr('data-imageTwo');

        const imageOneSrc = `data:image/jpeg;base64,${imageOneBase64}`;
        const imageTwoSrc = `data:image/jpeg;base64,${imageTwoBase64}`;

        $('#lbl_fc_fieldCode').text(fieldCode);
        $('#lbl_fc_name').text(name);
        $('#lbl_fc_location').text(location);

        $('#img_fc_imageOne').attr('src', imageOneSrc).show();
        $('#img_fc_imageTwo').attr('src', imageTwoSrc).show();
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

function selectCropCode() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/crop',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#sel_fc_cropCode');
      dropDown.empty();
      dropDown.append(`<option value="" selected disabled>Select Crop</option>`);
      data.data.forEach(data => {
        const option = `<option
        data-cropCode="${data.cropCode}"
        data-commonName="${data.commonName}"
        data-scientificName="${data.scientificName}"
        data-category="${data.category}"
        data-season="${data.season}"
        data-image="${data.image}"
        value="${data.cropCode}">${data.cropCode} ${data.commonName} ${data.scientificName}</option>`;
        dropDown.append(option);
      });

      $('#sel_fc_cropCode').on('change', function() {
        const selectedOption = $(this).find(':selected');
        const cropCode = selectedOption.attr('data-cropCode');
        const commonName = selectedOption.attr('data-commonName');
        const scientificName = selectedOption.attr('data-scientificName');
        const category = selectedOption.attr('data-category');
        const season = selectedOption.attr('data-season');
        const imageBase64 = selectedOption.attr('data-image');
        const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

        $('#lbl_fc_cropCode').text(cropCode);
        $('#lbl_fc_commonName').text(commonName);
        $('#lbl_fc_scientificName').text(scientificName);
        $('#lbl_fc_category').text(category);
        $('#lbl_fc_season').text(season);

        $('#img_fc_image').attr('src', imageSrc).show();
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

$('#btn_fc_add').on('click', function() {
  const fieldCode = $('#sel_fc_fieldCode').val();
  const cropCode = $('#sel_fc_cropCode').val();
  confirm('Are you sure you want to add this crop ' + cropCode + ' to ' + 'field ' + fieldCode + '?');
  if (confirm) {
    $.ajax({
      url: 'http://localhost:8080/greenshadow/field/fieldcrops',
      type: 'POST', 
      contentType: 'application/json',
      data: JSON.stringify({
        fieldCode: fieldCode,
        cropCode: cropCode
      }),
      processData: false,
      success: function(data) {
        alert(cropCode + ' crop added to ' + fieldCode + ' field successfully');
      },
      error: function(error) {
        alert(error.responseText);
      }
    });
  }
});




