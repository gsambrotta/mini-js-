
function getMessage(key) {
	var value = $.session.get(key);

	if (empty(value)) {

		value = $.ajax({
			url: "/backend/text/key/" + key,
			async: false
		}).responseJSON.text.value;
	 }

	return value;
}

function stopIt(e) {
  e.preventDefault();
  e.stopPropagation();
}


// Check if all values return true
Array.prototype.allTrueValues = function() {
  for(var i = 1; i < this.length; i++) {

    if(this[i] !== this[0]) {
      return false;

    } else if (this[i] !== "true") {
      return false;
    }
  }
  return true;
}

// "next" button verification
function verifyNextBtn(arrayInputs, newSection, backendUpdate) {
	var results = [];
	for(var i = 0; i < arrayInputs.length; i++){
		results += formValidate(arrayInputs[i]) + ",";
	}

	var arrayResults = new Array();
	arrayResults = results.split(",").slice(0,-1);

	if (arrayResults.allTrueValues()) {
		// enable
		showCurrentSectionMessages();
		app.nextBtn.unbind("click", stopIt);
		nextSection(newSection, backendUpdate);
	} else {
		// disable
		showCurrentSectionMessages();
		app.nextBtn.bind("click", stopIt);
		return false;
	}
};

function nextSection(newSection, backendUpdate) {
	newSection();
	if(backendUpdate){backendUpdate()};
	app.nextBtn.off();
}


function formValidate(input) {
	if (input.val() == "") {
		return false;

	} else {
		// Check email
		if(input.attr("type") == "email") {
			var email = input.val();
			if(!validateEmail(email)) return false;

		}

		return true;
	}
}

function showMessages(inputs) {
	var errMsg = $('.err-msg');
	var invalidErrMsg = $('.invalid-msg');
	var successMsg = $('.success-msg');
	errMsg.hide();
	invalidErrMsg.hide();
	successMsg.hide();

	for(var i = 0; i < inputs.length; i++){
		var input = inputs[i];
		if (input.val() == "" ) {
			input.parent().parent().find(errMsg).show();
			$('html,body').animate({
				scrollTop: $(input).offset().top },
				'slow');

		} else {
			if(input.attr("type") == "email") {
				var email = input.val();
				if(!validateEmail(email)) {
					input.parent().parent().find(invalidErrMsg).show();
				}
			}

			input.parent().parent().find(successMsg).show();
		}
	}
}


function showCurrentSectionMessages() {
	showMessages(inputsVal);
}


function isDigit(){
	var errMsg = $('.err-msg');
	var invalidErrMsg = $('.invalid-msg');

	$('.js-digit').on('keypress', function(e){
		if( e.which!= 8 && e.which!== 0 && (e.which < 48 || e.which > 57) ) {
	  	return false;
		}
	});

	$('.js-digit.js-max-price').on('keypress', function(){
		errMsg.hide();
		var input = $(this);

		if( input.val().length >= 4 ){
			input.parent().parent().find(invalidErrMsg).show();
			return false;
		}
	});

	$('.js-digit.js-max-price').on('focusout', function(){
		invalidErrMsg.hide();
	});
}


function showTab() {
	$('.tab-wrap').on('click', '.tab-base', function(){
		var tabIndex = $(this).index();
		var sections = $(this).parent().parent().find($('section'));
		var section =  sections.eq(tabIndex);
		sections.hide();
		section.show();

		$('.tab-base').removeClass('tab-base--active');
		$(this).addClass('tab-base--active');

	});
}

