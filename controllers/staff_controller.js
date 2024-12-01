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

$('#btn_save_staff').click(function() {
  const staff = {
    staffId: $('#id_modal_staff').text(),
    firstName: $('#firstName_modal_staff').val(),
    lastName: $('#lastName_modal_staff').val(),
    joinDate: $('#joinedDate_modal_staff').val(),
    birthDate: $('#birthDate_modal_staff').val(),
    gender: $('#gender_modal_staff').val(),
    phone: $('#phone_modal_staff').val(),
    email: $('#email_modal_staff').val(),
    designation: $('#designation_modal_staff').val(),
    role: $('#role_modal_staff').val(),
    addressLine1: $('#address1_modal_staff').val(),
    addressLine2: $('#address2_modal_staff').val(),
    addressLine3: $('#address3_modal_staff').val(),
    addressLine4: $('#address4_modal_staff').val(),
    addressLine5: $('#address5_modal_staff').val(),
  }

  $.ajax({
    url: 'http://localhost:8080/greenshadow/staff',
    type: 'POST',
    data: JSON.stringify(staff),
    contentType: 'application/json',
    processData: false,
    success: function (data) {
      alert("Staff saved successfully!");
      $('#firstName_modal_staff').val('');
      $('#lastName_modal_staff').val('');
      $('#joinedDate_modal_staff').val('');
      $('#birthDate_modal_staff').val('');
      $('#gender_modal_staff').val('');
      $('#phone_modal_staff').val('');
      $('#email_modal_staff').val('');
      $('#designation_modal_staff').val('');
      $('#role_modal_staff').val('');
      $('#address1_modal_staff').val('');
      $('#address2_modal_staff').val('');
      $('#address3_modal_staff').val('');
      $('#address4_modal_staff').val('');
      $('#address5_modal_staff').val('');
      $('#modal_staff').modal('hide');
      loadStaffIdToModel();
    },
    error: function (error) {
      alert(error.responseText);
    }  
  });
});
