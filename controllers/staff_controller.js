$(document).ready(function() {
  loadStaffIdToModel();
  loadStaffDetailsTable();
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

function loadStaffDetailsTable() {
  $.ajax({
    url: 'http://localhost:8080/greenshadow/staff',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
      const tableBody = $('#staff_details_table_body');
      tableBody.empty();
      data.data.forEach(data => {
        const row = `
          <tr>
            <td>${data.staffId}</td>
            <td>${data.firstName}</td>
            <td>${data.lastName}</td>
            <td>${data.joinDate}</td>
            <td>${data.birthDate}</td>
            <td>${data.gender}</td>
            <td>${data.phone}</td>
            <td>${data.email}</td>
            <td>${data.designation}</td>
            <td>${data.role}</td>
            <td>${data.addressLine1}</td>
            <td>${data.addressLine2}</td>
            <td>${data.addressLine3}</td>
            <td>${data.addressLine4}</td>
            <td>${data.addressLine5}</td>
            <td><button type="button" class="btn btn-primary btn-update-staff" data-bs-toggle="modal" data-bs-target="#modal_staff_update"
            data-staff-id="${data.staffId}"
            data-first-name="${data.firstName}"
            data-last-name="${data.lastName}"
            data-joined-date="${data.joinDate}"
            data-birth-date="${data.birthDate}"
            data-gender="${data.gender}"
            data-phone="${data.phone}"
            data-email="${data.email}"
            data-designation="${data.designation}"            
            data-role="${data.role}"
            data-address1="${data.addressLine1}"
            data-address2="${data.addressLine2}"
            data-address3="${data.addressLine3}"
            data-address4="${data.addressLine4}"
            data-address5="${data.addressLine5}"
            >Update</button></td>
            <td><button type="button" class="btn btn-danger btn-delete-staff" data-staff-id="${data.staffId}">Delete</button></td>            
          </tr>
        `;
        tableBody.append(row);
      });
    },
    error: function (error) { 
      alert(error.responseText);
    }  
  });
}