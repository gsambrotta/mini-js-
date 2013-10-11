window.filterApp = {};

$(document).ready(function(){

	filterApp.package = $('.package');

	filterApp.package.on('click', 'button', function(){
		var packageTrip = $(this).closest('.package');
		var amount = packageTrip.data('price');
		var price = $('<button class="price">' + amount + '€</button>');
		packageTrip.append(price);
		$(this).remove();
	})

	$('.filters').on('click', '.africa', function(){
		filterApp.package.fadeIn('normal').show();
		filterApp.package.not('.africa').fadeOut('normal').hide();
	});

	$('.filters').on('click', '.europa', function(){
		filterApp.package.fadeIn('normal').show();
		filterApp.package.not('.europa').fadeOut('normal').hide();
	});

	$('.filters').on('click', '.asian', function(){
		filterApp.package.fadeIn('normal').show();
		filterApp.package.not('.asian').fadeOut('normal').hide();
	});

	$('.filters').on('click', '.all', function(){
		filterApp.package.fadeIn('normal').show();
	});

});

/* filterApp.filtering = function (event) {
	filterApp.package.show();
	// if click .filter.africa, hide .package.not(.africa)
	// else if click .filter.europa, hide .package.not(.europa)
	// else if click .filter.asien, hide .package.not(.asien)
	// else click .filter.all show('package');

} 
$(document).ready(function(){
	filterApp.filterAfrica = $(".filters").find(".africa");
	filterApp.filterAsien = $(".filters").find(".asien");
	filterApp.filterEuropa = $(".filters").find(".europa");
	filterApp.filterAll = $(".filters").find(".all");
	
	filterApp.filterAfrica.click(filterApp.filtering);
	filterApp.filterAsien.click(filterApp.filtering);
	filterApp.filterEuropa.click(filterApp.filtering);
	filterApp.filterAll.click(filterApp.filtering);
 )}
*/