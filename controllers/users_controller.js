$(document).ready(function () {
  loadUsersTable();
})

$('#btn_save_user').click(function () {
    const formData = new FormData();
    formData.append('email', $('#email_modal_user').val());
    formData.append('password', $('#password_modal_user').val());
    formData.append('role', $('#role_modal_user').val());

    $.ajax({
        url: 'http://localhost:8080/greenshadow/auth/signup',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
            alert("User saved successfully!");
            $('#modal_add_user').modal('hide');
            $('#email_modal_user').val('');
            $('#password_modal_user').val('');
            $('#confirmPassword_modal_user').val('');
            $('#role_modal_user').val('');
            console.log(data.token);
        },
        error: function (error) {
            console.log(error);
        }
    });
});

function loadUsersTable() {
    $.ajax({
        url: 'http://localhost:8080/greenshadow/users',
        type: 'GET',
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        },
        success: function (data) {
            console.log(data);
            const tableBody = $('#tbody_users');
            tableBody.empty();
            data.data.forEach(data => {
                const row = `<tr>
                                <td>${data.email}</td>
                                <td>${data.role}</td>
                                <td><button type="button" class="btn btn-danger btn-delete" data-id="${data.id}">Delete</button></td>
                            </tr>`;
                tableBody.append(row);
            });
        },
        error: function (error) { 
            console.log(error);
        }
    });
}

        