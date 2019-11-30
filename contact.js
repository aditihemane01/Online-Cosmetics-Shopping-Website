function contact() {
	// alert('hi');

	var username = $('#username').val().trim(),
			email_id = $('#email_id').val().trim(),
			subject = $('#subject').val().trim(),
      message = $('#message').val().trim();


	if (username && email_id && subject && message) {

    var formdata = new FormData();

    formdata.append('username', username);
    formdata.append('email_id', email_id);
    formdata.append('subject', subject);
    formdata.append('message', message);
    console.log(formdata);

		$.ajax({

			type: "POST",
			url: 'http://localhost/Aditi/contact.php',
			data: formdata,
			success: function(data) {
				// console.log('done');
				alert('Message sent successfully');
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

  } else {
		alert('Please enter all the fields');
	}

};
