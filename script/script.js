$('#sec_vehicle').hide();
$('#sec_equipment').hide();
$('#sec_crop').hide();
$('#sec_staff').hide();
$('#sec_field_crops').hide();
$('#sec_field_staff').hide();
$('#sec_log').hide();
$('#sec_field').hide();
$('#sec_previe();
$('#sec_dashboard').show();

$('#nav_field_details').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_previous_logs').hide();
  $('#sec_field').show();
  $('#sec_dashboard').hide();
});

$('#nav_field_crops').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').show();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_field_staff').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').show();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_crops').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').show();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_staff').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').show();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_log').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').show();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_vehicle').on('click', function() {
  $('#sec_vehicle').show();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_equipment').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').show();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').hide();
});

$('#nav_previous_logs').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').show();
  $('#sec_dashboard').hide();
});

$('#nav_dashboard').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').hide();
  $('#sec_previous_logs').hide();
  $('#sec_dashboard').show();
});

$(".nav-link").on("click",function() {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");
});
