window.myForm = { };

$( document ).ready(function() {
	myForm.form = $("#mailform");
	myForm.name = $("#name");
	myForm.email = $("#email");
	myForm.text = $("#textarea");
	myForm.nameEmpty = $("#nameEmpty");
	myForm.emailEmpty = $("#emailEmpty");
	myForm.textEmpty = $("#textEmpty");
	myForm.emailInvalid = $("#emailInvalid");
	myForm.submit = $(".submit");
	myForm.submit.click(myForm.validateForm);

	myForm.succMess = $("#succMessage");
	myForm.errorMess = $("#errorMessage");

});

myForm.validateForm = function(event){
	event.preventDefault();

	var allValid = true;

	myForm.nameEmpty.hide();
	if(myForm.name.val().length === 0){
		myForm.nameEmpty.show();
		myForm.name.focus();
		allValid = false;
	}

	myForm.emailEmpty.hide();
	myForm.emailInvalid.hide();
	if (myForm.email.val().length === 0 ){
		myForm.emailEmpty.show();
		allValid = false;
	} else if (!myForm.isValidEmail( myForm.email.val() )){
		myForm.emailInvalid.show();
		myForm.email.focus();
		allValid = false;
	}

	myForm.textEmpty.hide();
	if(myForm.text.val().length === 0){
		myForm.textEmpty.show();
		myForm.text.focus();
		allValid = false;
	}

	if(allValid){
		myForm.submitForm();
	}
};

myForm.isValidEmail = function(email) {
	var validCharacters = /^[\w\.]+@\w+\.\w+$/;
	return validCharacters.test(email);
};

myForm.submitForm = function(){
	var formData = {
		name: myForm.name.val(),
		email: myForm.email.val(),
		text: myForm.text.val(),
	};

	$.ajax({
		url: 'contact.php',
		type: 'POST',
		//dataType: 'json';
		data: formData,
		success: myForm.submitSuccess,
		error: myForm.submitError
	})
};

myForm.submitSuccess = function(data, textStatus, jqXHR){
	//console.log('email sent!');
	console.log(data, textStatus, jqXHR);
	myForm.succMess.html(data.message);
	myForm.errorMess.hide();
	myForm.succMess.show();
};

myForm.submitError = function(jqXHR, textStatus, errorThrown){
	//console.log('error!');
	console.log(jqXHR, textStatus, errorThrown);
	myForm.errorMess.html(jqXHR.Message);
	myForm.succMess.hide();
	myForm.errorMess.show();
};






