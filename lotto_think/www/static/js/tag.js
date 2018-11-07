
$(document).ready(function() {
  $('#formLogin').on('submit', function(e) {
    e.preventDefault();
    $.ajax({url: '/user/login',
      data: {
        'login_name': $('#inputLoginEmail').val(),
        'password': $('#inputLoginPassword').val()
      },
      function(data) {
        console(data);
      }
    });
  });
});
