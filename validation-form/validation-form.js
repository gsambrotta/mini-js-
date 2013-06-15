function validateForm(){
	var email = document.getElementById("emailinput").value;
	var psw = document.getElementById("pswinput").value;
	var pswrep = document.getElementById("pswrepeatinput").value;
	var check = document.getElementById("policy");
		if (isValidEmail(email)){
			if(isValidPsw(psw,4,8)){
				if(isValidPswRep(pswrep)){
					if(isValidCheckbox(check)){
						return true;
					}
				}
			}
		}
	return false;
}


function isValidEmail(email) {
	var validCharacters = /^\w+@\w+\.\w+$/;
	 if(email == ""){
		var emailErr = document.getElementById("emptyEmail");
		emailErr.className = "error";
		var emailErr2 = document.getElementById("invalidEmail");
		emailErr2.className = "hidden";
		return false;
		email.focus();
	} else if(!validCharacters.test(email)) {
		var emailErr = document.getElementById("emptyEmail");
		emailErr.className = "hidden";
		var emailErr2 = document.getElementById("invalidEmail");
		emailErr2.className = "error";
		return false;
		email.focus();
	} else {
		var emailErr = document.getElementById("emptyEmail");
		emailErr.className = "hidden";
		var emailErr2 = document.getElementById("invalidEmail");
		emailErr2.className = "hidden";
		return true;
	}
}

function isValidPsw(psw, minLen, maxLen) {
	var lengthPsw = psw.length;
	var lettNum = /^[0-9a-zA-Z]+$/;
	if(lengthPsw == 0 || lengthPsw <= minLen || lengthPsw > maxLen){
		var pswErr = document.getElementById("pswMinMax");
		pswErr.className = "error";
		var pswErr2 = document.getElementById("pswLettNum");
		pswErr2.className = "hidden";
		return false;
		psw.focus();
	} else if(!lettNum.test(psw)){
		var pswErr2 = document.getElementById("pswLettNum");
		pswErr2.className = "error";
		var pswErr = document.getElementById("pswMinMax");
		pswErr.className = "hidden";		
		return false;
		psw.focus();
	} else {
		var pswErr = document.getElementById("pswMinMax");
		pswErr.className = "hidden";
		var pswErr2 = document.getElementById("pswLettNum");
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
		return false;
		pswrep.focus();
	} 
	var pswRepErr = document.getElementById("pswR");
	pswRepErr.className = "hidden";
	return true;
}

function isValidCheckbox(check){
	if (!check.checked){
		var checkErr = document.getElementById("checkN");
		checkErr.className = "error";	
		return false;
		check.focus();
	}
	var checkErr = document.getElementById("checkN");
	checkErr.className = "hidden";
	return true;
}

