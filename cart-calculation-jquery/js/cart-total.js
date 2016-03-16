
// Different Totals of the cart
// ------------------------------

function cartTotal() {
	subtotal();
	vatCalc();
	grandTot();
}


function detractRemovedTot(tot) {
	$(".fa-trash").bind("click", function(){
		var removedTot = Number($(this).closest('td').find('row-tot').text());

		return tot - removedTot;
	});
}


function subtotal() {
	var tot = 0;

	$.each($('.row-tot'), function( index, value ) {
	  tot = tot + Number($(value).text());
	});

	tot = Math.round(tot * 100) / 100;
	$('#subtot').text(tot);

	detractRemovedTot(tot);
}

function vatCalc() {
	var subtot = Number($('#subtot').text());

	var vat = (subtot * 20) / 100;
	vat = Math.round(vat * 100) / 100;
	$('#vatCalc').text(vat);

	detractRemovedTot(vat);
}

function grandTot() {

	var subtot = Number($('#subtot').text());
	var vat = Number($('#vatCalc').text());

	var grandTot = subtot + vat;
	grandTot = Math.round(grandTot * 100) / 100;
	$('#vatCalc').text(vat);

	detractRemovedTot(grandTot);
}



// Possible implementation of "buy now" button
// items would be the result of an array with all the items saved

function submitCart(){
	$.post( "/backend/products", {

		items: [{
			itemName: itemName,
			itemPrice: itemPrice,
			itemQuantity: itemQuantity,
			itemTotPrice: itemTotPrice
		},
		{
			itemName: itemName,
			itemPrice: itemPrice,
			itemQuantity: itemQuantity,
			itemTotPrice: itemTotPrice

		},{
			itemName: itemName,
			itemPrice: itemPrice,
			itemQuantity: itemQuantity,
			itemTotPrice: itemTotPrice
		}],

		subtot: $('#subtot').text(),
		vat: $('#vatCalc').text(),
		grandTot: $('#vatCalc').text()

	}).done(function( result ) {
			alert(result);
		});

}
