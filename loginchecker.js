function login() {
	// alert('hi');

	var username = $('#username').val().trim();
	var password = $('#password').val().trim();

	if (username && password) {
		if (!(username.length > 4)) {
			alert('Enter username greater than 6 characters');
		}
		if (!(password.length > 4)) {
			alert('Enter password greater than 8 characters');
		}
		if (username.length > 4 && password.length > 4) {
			// alert('Success!')
			var formData = {
				'username': username,
				'password': password
			};


			$.ajax({
						type: "POST",
						url: 'http://localhost/Aditi/loginchecker.php',
						data: formData,
						success: function(data) {
							// alert('Done');
							console.log(data);
							if (data[0].login) {
								window.localStorage.setItem('username', data[0].username);
								alert('Login successful');
								window.location.assign('home.html');
							} else {
								alert('Login failed');
							}
							// window.location.reload();
						},
					 error: function(error) {
						 // console.log(error);
					 },
					 dataType: 'json'
					});
				}
			} else {
				alert('Please enter all the fields')
			}

};






//
