
// Event related to single cart item
// ---------------------------------

function cartItem() {
	addition();
	detract();
	removeItem();

	$(".quantity i").bind("click", cartTotal);
	$(".fa-trash").bind("click", cartTotal);
}


function sumRow(input, operation) {
	var quatity = $(input).val();
	var itemPrice = Number(input.closest('tr').find('.one-piece-price').text());
	var itemTot = input.closest('tr').find('.row-tot');

	$(itemTot).text( function(i, oldprice){

		if(operation == 'add'){
			var tot = Number(oldprice) + itemPrice;
			return Math.round(tot * 100) / 100;
		} else {
			if(oldprice !== "0") {
				var tot = Number(oldprice) - itemPrice;
				return Math.round(tot * 100) / 100;
			}
		}
	})

}


function addition() {
	var addBtn = $('.fa-plus-square');

	$(addBtn).on('click', function(evt){
		var target = $(evt.target);

		var input = target.parent().parent().find('input');

		$(input).val( function(i, oldval) {
		  return ++oldval;
		});

		sumRow(input, 'add');
	});
}


function detract() {
	var dectractBtn = $('.fa-minus-square');

	$(dectractBtn).on('click', function(evt){
		var target = $(evt.target);

		var input = target.parent().parent().find('input');

		$(input).val( function(i, oldval) {
			if(oldval !== "0"){
		    return --oldval;
		  } else {
		  	return 0;
		  }

		});

		sumRow(input, 'detract');
	});
}


function removeItem() {
	var deleteBtn = $('.fa-trash');

	$(deleteBtn).on('click', function(evt){
		var target = $(evt.target);

		var row = target.closest('tr');

		row.remove();
	});
}


