window.gioApp = {}; // same of write var gioApp {};

$( document ).ready(function() {
    gioApp.form = $("#login-form");
    gioApp.submit = $("#submit-button");
    gioApp.email = $("#emailinput");
	gioApp.psw = $("#pswinput");
	gioApp.pswrep = $("#pswrepeatinput");
	gioApp.check = $("#policy");
	gioApp.succMess = $("#succ-message"); 
    gioApp.submit.click(gioApp.validateForm);
    gioApp.emailEmpty = $("#emailEmpty");
    gioApp.pswEmpty = $("#pswEmpty");
    gioApp.pswrepEmpty = $("#pswrepEmpty");
    gioApp.invalidEmail = $('#invalidEmail');
	gioApp.invalidPsw = $("#invalidPsw");    
    gioApp.invalidPswRep = $("#invalidPswRep");
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
	} else if (!gioApp.isValidPsw(gioApp.psw.val()) ){
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


	if(allValid){
		gioApp.submitForm();
	}
}

gioApp.submitForm = function() {
	var formData = {
		email: gioApp.email.val(),
		pwd: gioApp.psw.val()
	};

	$.ajax({
		url: 'http://localhost:8888/validation-form/signup.php',
		method: 'post',
		data: formData,
		dataType: 'json',
		success: submitSuccess,
		error: submitError
	});
}

gioApp.submitSuccess = function(data, textStatus, jqXHR){
	console.log(data, textStatus, jqXHR);
	// data contains the response from the server
	// Now we can show the user that their signup was successful. Display a status message or something..
	gioApp.succMess.show();
};

gioApp.submitError = function(jqXHR, textStatus, errorThrown){
	console.log(jqXHR, textStatus, errorThrown);
	// The request failed. Let the user know that something went wrong and display an error message.
};


gioApp.isValidEmail = function(email) {
	var validCharacters = /^\w+@\w+\.\w+$/;
	return validCharacters.test(email);
}

gioApp.isValidPsw = function(psw, minLen, maxLen) {
	var lengthPsw = gioApp.psw.length;
	var lettNum = /^[0-9a-zA-Z]+$/;
	if (lengthPsw == 0 || lengthPsw <= minLen || lengthPsw > maxLen || lettNum.test(psw)){
		return false;
	}

}

gioApp.isValidPswRep = function(pswrep){
	if (gioApp.psw != gioApp.pswrep){
		return false;
	}
}	

function isValidCheckbox(check){
	if (!check.checked){
		var check = document.getElementById("policy");
		var checkErr = document.getElementById("checkN");
		checkErr.className = "error";	
		check.focus();
		return false;
	} else {
		var checkErr = document.getElementById("checkN");
		checkErr.className = "hidden";
		return true;
	}
}


