$(document).ready(function() {
  loadLogIdToLabel();
  loadDateToLabel();
  setInterval(loadDateToLabel, 1000);
  selectFieldCodeForCreateLog();
  selectCropCodeForCreateLog();
});

function loadLogIdToLabel() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/log/nextcode',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      $('#lbl_cl_logCode').text(data.data);
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

function loadDateToLabel() {
  var now = new Date();
  var date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
  $('#lbl_cl_date').text(date);
  console.log(date);
}

function selectFieldCodeForCreateLog() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/field',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#sel_cl_fieldCode');
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

      $('#sel_cl_fieldCode').on('change', function() {
        const selectedOption = $(this).find(':selected');
        const name = selectedOption.data('name');
        const location = selectedOption.data('location');
        const imageOneBase64 = selectedOption.attr('data-imageOne');
        const imageTwoBase64 = selectedOption.attr('data-imageTwo');

        const imageOneSrc = `data:image/jpeg;base64,${imageOneBase64}`;
        const imageTwoSrc = `data:image/jpeg;base64,${imageTwoBase64}`;

        $('#lbl_cl_name').text(name);
        $('#lbl_cl_location').text(location);

        $('#img_cl_imageOne').attr('src', imageOneSrc).show();
        $('#img_cl_imageTwo').attr('src', imageTwoSrc).show();
      });

      $('#btn_cl_field_add').on('click', function() {
        const selectedOption = $('#sel_cl_fieldCode').find(':selected');
        if (!selectedOption.val()) {
          alert('Please select a field.');
          return;
        }

        const fieldCode = selectedOption.attr('data-fieldCode');
        const name = selectedOption.data('name');
        const location = selectedOption.data('location');
        const imageOneBase64 = selectedOption.attr('data-imageOne');
        const imageTwoBase64 = selectedOption.attr('data-imageTwo');

        const imageOneSrc = `data:image/jpeg;base64,${imageOneBase64}`;
        const imageTwoSrc = `data:image/jpeg;base64,${imageTwoBase64}`;

        const isDuplicate = $('#tbody_cl_fields tr').filter(function() {
          return $(this).find('td').eq(0).text() === fieldCode;
        }).length > 0;

        if (isDuplicate) {
          alert('This field ' + fieldCode + ' is already added.');
          return;
        }
        const tableRow = `
          <tr>
            <td>${fieldCode}</td>
            <td>${name}</td>
            <td>${location}</td>
            <td><img src="${imageOneSrc}" alt="Image One" width="70"></td>
            <td><img src="${imageTwoSrc}" alt="Image Two" width="70"></td>
          </tr>
        `;

        $('#tbody_cl_fields').append(tableRow);
      });        
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

function selectCropCodeForCreateLog() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/crop',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#sel_cl_cropCode');
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

      $('#sel_cl_cropCode').on('change', function() {
        const selectedOption = $(this).find(':selected');
        const commonName = selectedOption.attr('data-commonName');
        const scientificName = selectedOption.attr('data-scientificName');
        const category = selectedOption.data('category');
        const season = selectedOption.data('season');
        const imageBase64 = selectedOption.attr('data-image');

        const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

        $('#lbl_cl_commonName').text(commonName);
        $('#lbl_cl_scientificName').text(scientificName);
        $('#lbl_cl_category').text(category);
        $('#lbl_cl_season').text(season);

        $('#img_cl_image').attr('src', imageSrc).show();
      });

      $('#btn_cl_add_crop').on('click', function() {
        const selectedOption = $('#sel_cl_cropCode').find(':selected');
        if (!selectedOption.val()) {
          alert('Please select a crop.');
          return;
        }

        const cropCode = selectedOption.attr('data-cropCode');
        const commonName = selectedOption.attr('data-commonName');
        const scientificName = selectedOption.attr('data-scientificName');
        const category = selectedOption.data('category');
        const season = selectedOption.data('season');
        const imageBase64 = selectedOption.attr('data-image');

        const imageSrc = `data:image/jpeg;base64,${imageBase64}`;

        const isDuplicate = $('#tbody_cl_crops tr').filter(function() {
          return $(this).find('td').eq(0).text() === cropCode;
        }).length > 0;

        if (isDuplicate) {
          alert('This crop ' + cropCode + ' is already added.');
          return;
        }
        const tableRow = `
          <tr>
            <td>${cropCode}</td>
            <td>${commonName}</td>
            <td>${scientificName}</td>
            <td>${category}</td>
            <td>${season}</td>
            <td><img src="${imageSrc}" alt="Image" width="70"></td>
          </tr>
        `;

        $('#tbody_cl_crops').append(tableRow);
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}