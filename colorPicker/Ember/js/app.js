// Application
ColorApp = Ember.Application.create({}); 

// Route: Here is where i should render my templates in the right url (in this case index)
ColorApp.IndexRoute = Ember.Route.extend({
  renderTemplate: function() {
    this.render();
  } 
  model function(){ // Here i render my view (but maybe isn't necessary since they are 
  					//already linked to the template and i render the template just above here?)
  	return ColorApp.AddItemView();
  	return ColorApp.DisplayItemView();
  }
});


// Model: my datas. I probably don't need save in var all of them thanks to the naming convention in Ember
ColorApp.Item = Ember.Object.extend();  
ColorApp.Item.name = $('#name');
ColorApp.Item.red = $('#red');
ColorApp.Item.green = $('#green');
ColorApp.Item.blue = $('#blue');
ColorApp.Item.alpha = $('#alpha');
ColorApp.list = $('#listColors');
ColorApp.input = $('input');
ColorApp.save = $('#save');

// Still i save this here since is my main data
ColorApp.Item.newRgbColor = "rgba("+ColorApp.Item.red+", "+ColorApp.Item.green+", "+ColorApp.Item.blue+", "+ColorApp.Item.alpha+")";  


// Controller: Here i manage my action and what should happen everytime i use one of this
ColorApp.ApplicationController = Ember.Controller.extend({ 
	actions: {
		save: function(){
			this.get('model').save();
		}

		select: function(){
			this.set('select', true);
		}
	}
});


// AddItem.View: Define matched template and function for save newItem
ColorApp.AddItemView = Ember.view.extend({ 
	templateName: "index"

	save: function(){
		$(colorApp.list).append('<option>' + colorApp.name.val() + colorApp.newRgbColor + '</option>');
		$(form).trigger("reset");
		$(name).focus();
		$("p").html('Rgba(0,0,0,0)');
	}
});

// DisplayItem.ViewDefine matched template and function for save displaySlectedItem
ColorApp.DisplayItemView = Ember.view.extend({ 
	templateName: "select"
	select: function(){
		colorApp.listSelected = $("#listColors option:selected");
		colorApp.selectedColorName = $(colorApp.listSelected).text();
		$('span').html('<span style="color:'+ colorApp.newRgbColor + '">'+ colorApp.selectedColorName + '</span>');
	}
});



