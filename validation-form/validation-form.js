window.gioApp = {};

$( document ).ready(function() {
    gioApp.form = $("#login-form");
    gioApp.submit = $("#submit-button");
    gioApp.email = $("#emailinput");
	gioApp.psw = $("#pswinput");
	gioApp.pswrep = $("pswrepeatinput");
	gioApp.check = $("policy");
	gioApp.succMess = $("#succ-message"); 
    gioApp.submit.click(validateForm);
});


function validateForm(event){
	event.preventDefault();
	// TODO: validate form here
	/*
	
		if (isValidEmail(email) || isValidPsw(psw,4,8) || isValidCheckbox(check)){
				if(isValidPswRep(pswrep)){
						return true;
				}
		}
	return false;
	*/
	submitForm();
}

function submitForm() {
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

function submitSuccess(data, textStatus, jqXHR){
	console.log(data, textStatus, jqXHR);
	// data contains the response from the server
	// Now we can show the user that their signup was successful. Display a status message or something..
	gioApp.succMess.show();
};

function submitError(jqXHR, textStatus, errorThrown){
	console.log(jqXHR, textStatus, errorThrown);
	// The request failed. Let the user know that something went wrong and display an error message.
};


function isValidEmail(email) {
	var validCharacters = /^\w+@\w+\.\w+$/;
	 if(email == ""){
	 	var email = document.getElementById("emailinput");
		var emailErr = document.getElementById("emptyEmail");
		var emailErr2 = document.getElementById("invalidEmail");
		emailErr.className = "error";
		emailErr2.className = "hidden";
		email.focus();
		return false;
	} else if(!validCharacters.test(email)) {
		var email = document.getElementById("emailinput");
		var emailErr = document.getElementById("emptyEmail");
		var emailErr2 = document.getElementById("invalidEmail");
		emailErr.className = "hidden";
		emailErr2.className = "error";
		email.focus();
		return false;
	} else {
		var emailErr = document.getElementById("emptyEmail");
		var emailErr2 = document.getElementById("invalidEmail");
		emailErr.className = "hidden";
		emailErr2.className = "hidden";
		return true;
	}
}

function isValidPsw(psw, minLen, maxLen) {
	var lengthPsw = psw.length;
	var lettNum = /^[0-9a-zA-Z]+$/;
	if(lengthPsw == 0 || lengthPsw <= minLen || lengthPsw > maxLen){
		var psw = document.getElementById("pswinput");
		var pswErr = document.getElementById("pswMinMax");
		var pswErr2 = document.getElementById("pswLettNum");
		pswErr.className = "error";
		pswErr2.className = "hidden";
		psw.focus();
		return false;
	} else if(!lettNum.test(psw)){
		var psw = document.getElementById("pswinput");
		var pswErr2 = document.getElementById("pswLettNum");
		var pswErr = document.getElementById("pswMinMax");
		pswErr2.className = "error";
		pswErr.className = "hidden";	
		psw.focus();	
		return false;
	} else {
		var pswErr = document.getElementById("pswMinMax");
		var pswErr2 = document.getElementById("pswLettNum");
		pswErr.className = "hidden";
		pswErr2.className = "hidden";
		return true;
	}
}

function isValidPswRep(pswrep){
	var psw = document.getElementById("pswinput").value;
	var pswrep = document.getElementById("pswrepeatinput").value;
	if(pswrep != psw){
		var pswRepErr = document.getElementById("pswR");
		pswRepErr.className = "error";
		pswrepinput.focus();
		return false;
	} else { 
		var pswRepErr = document.getElementById("pswR");
		pswRepErr.className = "hidden";
		return true;
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
