var FruitModel = Backbone.Model.extend({

	// When you have 2.000 elements you keep them in a database. 
	// Model, here in this file, you are gonna write an ajax request(talk with api) to communicate with the server and ask him
	// to ask to the database to take the data.
	initialize: function(options){
		console.log(this);
	}
});

