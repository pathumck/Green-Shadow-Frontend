$('#nav_field_details').on('click', function() {
  $('#sec_vehicle').hide();
  $('#sec_equipment').hide();
  $('#sec_crop').hide();
  $('#sec_staff').hide();
  $('#sec_field_crops').hide();
  $('#sec_field_staff').hide();
  $('#sec_log').hide();
  $('#sec_field').show();
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
});


