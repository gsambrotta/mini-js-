// Application
window.Colorapp = Ember.Application.create();

Colorapp.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'Colorapp'
});

//Route: 
Colorapp.IndexRoute = Ember.Route.extend();

//View
Ember.TextField.reopen({
  attributeBindings: ['size', 'maxlength', 'minlength', 'min', 'max', 'step']
})


Ember.Handlebars.helper('display-color', Colorapp.DisplayNewcolorView);


// Model: 
Colorapp.Color = DS.Model.extend({
	name: DS.attr('string'),
	value: DS.attr('string')
});


//Controller:
Colorapp.IndexController = Ember.Controller.extend({ 
	actions: {
		save: function(){
			//Create new item in model
			var color = this.store.createRecord('color', {
				name: this.get('colorNameValue'),
				value: "rgba(" + this.get('redValue')+ "," +this.get('greenValue')+", " +this.get('blueValue')+ ","+this.get('alphaValue') + ")"
			});

			// save new item
			color.save();

			color.save().then(function() {
			  // SUCCESS
			  console.log('success');
			}, function() {
			  // FAILURE
			  console.log('failed');
			});
		}
	},

	model: function() {
		return this.store.find('color');
	}.property('model'),

	selectedStyle: function() {
		var selectedColor = this.get("selectedColor");
		return selectedColor ? "color: " + selectedColor.get("value") : "";
	}.property("selectedColor")
});



