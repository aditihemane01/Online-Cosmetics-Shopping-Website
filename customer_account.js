function register() {
	// alert('hi');

	var username = $('#username').val().trim(),
			password = $('#password').val().trim(),
			email_id = $('#email_id').val().trim(),
      mobile_no = $('#mobile_no').val().trim();


	if (username && password && email_id && mobile_no) {
		if (!(username.length > 4)) {
			alert('Enter username greater than 6 characters');
		}
		if (!(password.length > 4)) {
			alert('Enter password greater than 8 characters');
		}
		if (username.length > 4 && password.length > 4) {

			var formData = {
				'username': username,
				'password': password
			};


    var formdata = new FormData();

    formdata.append('username', username);
    formdata.append('password', password);
    formdata.append('email_id', email_id);
    formdata.append('mobile_no', mobile_no);
    console.log(formdata);

		$.ajax({

			type: "POST",
			url: 'http://localhost/Aditi/customer_account.php',
			data: formdata,
			success: function(data) {
				// console.log('done');
				alert('Registered');
				window.location.reload();
				// setData('user', JSON.stringify(data));
				// Nav.assign('home.html')
			},
		 error: function(error) {
			 console.log(error);
		 },
     dataType: 'json',
     processData: false,
     contentType: false
	  });
	 }
  } else {
		alert('Please enter all the fields');
	}

};
