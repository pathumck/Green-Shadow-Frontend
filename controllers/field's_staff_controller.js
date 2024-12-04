$(document).ready(function() {
  selectFieldCodeForStaff();
  selectStaffId();
});

function selectFieldCodeForStaff() {
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

function selectStaffId() {
  $.ajax({  
    url: 'http://localhost:8080/greenshadow/staff',
    type: 'GET',
    dataType: 'json',

    success: function(data) {
      const dropDown = $('#sel_fs_staffId');
      dropDown.empty();
      dropDown.append(`<option value="" selected disabled>Select Staff</option>`);
      data.data.forEach(data => {
          const option = `<option
          data-staffId="${data.staffId}"
          data-firstName="${data.firstName}"
          data-lastName="${data.lastName}"
          data-designation="${data.designation}"
          data-role="${data.role}"
          value="${data.staffId}">${data.staffId} ${data.firstName} ${data.lastName}</option>`;
          dropDown.append(option);
        });
      $('#sel_fs_staffId').on('change', function() {
        const selectedOption = $(this).find(':selected');
        const firstName = selectedOption.attr('data-firstName');
        const lastName = selectedOption.attr('data-lastName');
        const designation = selectedOption.attr('data-designation');
        const role = selectedOption.attr('data-role');
        $('#lbl_fs_staffId').text(selectedOption.val());
        $('#lbl_fs_firstName').text(firstName);
        $('#lbl_fs_lastName').text(lastName);
        $('#lbl_fs_designation').text(designation);
        $('#lbl_fs_role').text(role);
      });
    },
    error: function(error) {
      alert(error.responseText);
    }
  });
}

$('#btn_fs_add').on('click', function() {
  const confirmation = confirm('Are you sure you want to add this staff to this field?');
  if (confirmation) {
    const fieldCode = $('#sel_fs_fieldCode').val();
  const staffId = $('#sel_fs_staffId').val();
  $.ajax({
    url: 'http://localhost:8080/greenshadow/staff/fieldstaff',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ fieldCode: fieldCode, staffId: staffId }),
    success: function(data) {
      alert('Staff ' + staffId + ' added to ' +  fieldCode + ' field successfully');
    },  
    error: function(error) {
      alert(error.responseText);
    }
  });
  }
});

