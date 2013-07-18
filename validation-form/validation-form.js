window.gioApp = { 	// same of write var gioApp {};
	isPasswordRevealed: false
}; 

$( document ).ready(function() {
    gioApp.form = $("#login-form");
    gioApp.submit = $("#submit-button");
    gioApp.email = $("#emailinput");
	gioApp.psw = $("#pswinput");
	gioApp.pswrep = $("#pswrepeatinput");
	gioApp.check = $("#agree");
	gioApp.succMess = $("#succ-message"); 
    gioApp.submit.click(gioApp.validateForm);
    gioApp.emailEmpty = $("#emailEmpty");
    gioApp.pswEmpty = $("#pswEmpty");
    gioApp.pswrepEmpty = $("#pswrepEmpty");
    gioApp.checkEmpty = $("#checkEmpty");
    gioApp.invalidEmail = $('#invalidEmail');
	gioApp.invalidPsw = $("#invalidPsw");    
    gioApp.invalidPswRep = $("#invalidPswRep");

    gioApp.pswRevealed = $("#pswRevealed");
    gioApp.pswRepRevealed = $("#pswRepRevealed");
    gioApp.showPswButton = $("#showPswButton");

});


gioApp.validateForm = function(event){
	event.preventDefault();	

	var allValid = true; // Set this to false if any field is invalid

	// Make sure email field is not empty and is valid
	gioApp.emailEmpty.hide();
	gioApp.invalidEmail.hide();
	if (gioApp.email.val().length === 0 ){
		gioApp.emailEmpty.show();
		allValid = false;
	} else if (!gioApp.isValidEmail(gioApp.email.val()) ){
		gioApp.invalidEmail.show();
		gioApp.email.focus();
		allValid = false;
	}

	// Make sure psw and pswrep are not empty, that they are the same and both valid.
	gioApp.pswEmpty.hide();
	gioApp.invalidPsw.hide();
	if (gioApp.psw.val().length === 0){ 
		gioApp.pswEmpty.show();
		allValid = false;
	} else if (!gioApp.isValidPsw(gioApp.psw.val(), 4, 8) ){
		gioApp.invalidPsw.show();
		gioApp.psw.focus();
		allValid = false;
	}

	gioApp.pswrepEmpty.hide();
	gioApp.invalidPswRep.hide();
	if (gioApp.pswrep.val().length === 0 ){
		gioApp.pswrepEmpty.show();
		allValid = false;
	} else if (!gioApp.isValidPswRep(gioApp.pswrep.val()) ){
		gioApp.invalidPswRep.show();
		gioApp.pswrep.focus();
		allValid = false;
	}

	gioApp.checkEmpty.hide();
	if (gioApp.check.is(':checked') === false ){
		gioApp.checkEmpty.show();
		allValid = false;
	}


	if(allValid){
		gioApp.submitForm();
	}
};

gioApp.submitForm = function() {
	var formData = {
		email: gioApp.email.val(),
		pwd: gioApp.psw.val()
	};

	$.ajax({
		url: 'http://localhost:8888/validation-form/sendemail.php',
		method: 'post',
		//data: formData,
		dataType: 'html',
		success: gioApp.submitSuccess,
		error: gioApp.submitError
	});
};

gioApp.submitSuccess = function(data, textStatus, jqXHR){
	console.log(data, textStatus, jqXHR);
	// data contains the response from the server
	// Now we can show the user that their signup was successful. Display a status message or something..
	gioApp.succMess.html(data.message);
	gioApp.succMess.show();
};

gioApp.submitError = function(jqXHR, textStatus, errorThrown){
	console.log(jqXHR, textStatus, errorThrown);
	alert( jqXHR.responseText);
	// The request failed. Let the user know that something went wrong and display an error message.
	gioApp.succMess.html(textStatus);
	gioApp.succMess.show();
};


gioApp.isValidEmail = function(email) {
	var validCharacters = /^\w+@\w+\.\w+$/;
	return validCharacters.test(email);
};

gioApp.isValidPsw = function(psw, minLen, maxLen) {
	var lengthPsw = gioApp.psw.val().length;
	var lettNum = /^[0-9a-zA-Z]+$/;
	return lengthPsw >= minLen && lengthPsw <= maxLen && lettNum.test(psw);

};

gioApp.isValidPswRep = function(pswrep){
	return gioApp.psw.val() === gioApp.pswrep.val();
};	

gioApp.toggleShowPassword = function(evt){
	event.preventDefault();
	$("#showPswButton span").toggle();

	if (gioApp.isPasswordRevealed) {
		gioApp.psw.removeClass("hidden");
		gioApp.pswRevealed.addClass("hidden");
		gioApp.isPasswordRevealed = false;

		gioApp.pswrep.removeClass("hidden");
		gioApp.pswRepRevealed.addClass("hidden");
		gioApp.isPasswordRevealed = false;

	} else {
		gioApp.psw.addClass("hidden");
		gioApp.pswRevealed.removeClass("hidden");
		gioApp.pswRevealed.val(gioApp.psw.val());
		gioApp.isPasswordRevealed = true;

		gioApp.pswrep.addClass("hidden");
		gioApp.pswRepRevealed.removeClass("hidden");
		gioApp.pswRepRevealed.val(gioApp.pswrep.val());
		gioApp.isPasswordRevealed = true;
	}
}


$(document).ready(function() {
	event.preventDefault();
	gioApp.showPswButton.click(gioApp.toggleShowPassword);

});










