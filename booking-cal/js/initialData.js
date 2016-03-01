
function loadTempInitData() {
	$.get('partials/initialData.php', function(template) {
    var rendered = Mustache.render(template);
    $(app.section).html(rendered);

    // vars
    var inputsVal = [];
		app.price = $('#price');
    app.currency = $('#priceCurrency');
    app.priceCat = $('#priceCat');

    // Functions
    isDigit();
    validateInsertDataBox();

  });
}


function validateInsertDataBox() {
	inputsVal = [app.price, app.currency, app.priceCat];

	// Show Messages
	$.each(inputsVal, function(index, value){
		$(value).on('focusout', function(e){
			e.stopPropagation();
			showMessages([value]);
		})
	});

	$('#initialDataBtn').on('click', function(e){
  	if (e.stopPropagation) e.stopPropagation();
  	// Next Button Validation
		verifyNextBtn(inputsVal, loadTempCal);
		for(var i = 0; i < inputsVal.length; i++){
			inputsVal[i].focusout(function(e) {
				verifyNextBtn(inputsVal, loadTempCal);
			});
		}
	})
}

