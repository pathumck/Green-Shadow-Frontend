$(document).ready(function() {
  loadLogIdToLabel();
  loadDateToLabel();
  setInterval(loadDateToLabel, 1000);
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
