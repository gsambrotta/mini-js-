var inventory = new InventoryCollection();
/* 
in this case add() and reset() are equivalent: 
reset would delete the existing items first (which there aren't) 
and then would add the new fruits
*/
inventory.add(fruits);

var cartCollection = new CartCollection();
var cartView = new CartView({
	collection: cartCollection,
	el: '#price' 
});
cartView.render();


var listView = new ListView({
	el: "#list",
	collection: inventory,
	cartCollection: cartCollection
});

listView.render();

/* Cosa fa la funzione add() ?? Basically questo:
function add(models) {
	for (var i = 0; i < models.length; i++) {
		var model = models[i];
		if (!is_model(model))
			model = new this.model(model);
		// aggiungi
	}
}
*/