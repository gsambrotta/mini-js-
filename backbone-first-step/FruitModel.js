var FruitModel = Backbone.Model.extend({
	fresh: true
});

var fruits = [
			{ name: 'Apple', weight: 1, price: 5.0 },
			{ name: 'Orange', weight: 1, price: 8.0 },
			{ name: 'Banana', weight: 1, price: 1.0 },
			{ name: 'Apricot', weight: 1, price: 4.0 },
			{ name: 'Mango', weight: 1, price: 3.0 },
			{ name: 'Pear', weight: 1, price: 6.0 }
		];
/*	var fruits = "{{ server_provided_initial_data }}"  In grandi aziende si usa quetso, 
meglio di ajax call. Ci mette meno tempo e fa meno chiamate*/
