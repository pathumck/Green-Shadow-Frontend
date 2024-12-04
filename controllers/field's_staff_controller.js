$(document).ready(function() {
  selectFieldCodeForStaff();
});

function selectFieldCodeForStaff() {
  console.log('selectFieldCodeForStaff');
  $.ajax({
    url: 'http://localhost:8080/greenshadow/field',
    type: 'GET',
    dataType: 'json',
    success: function(data) {
      const dropDown = $('#sel_fs_fieldCode');
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

      $('#sel_fs_fieldCode').on('change', function() {
        console.log('Changed');
        const selectedOption = $(this).find(':selected');
        const name = selectedOption.data('name');
        const location = selectedOption.data('location');
        const imageOneBase64 = selectedOption.attr('data-imageOne');
        const imageTwoBase64 = selectedOption.attr('data-imageTwo');

        const imageOneSrc = `data:image/jpeg;base64,${imageOneBase64}`;
        const imageTwoSrc = `data:image/jpeg;base64,${imageTwoBase64}`;
        console.log(imageOneSrc);

        $('#lbl_fs_name').text(name);
        $('#lbl_fs_location').text(location);

        $('#img_fs_imageOne').attr('src', imageOneSrc).show();
        $('#img_fs_imageTwo').attr('src', imageTwoSrc).show();
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}
