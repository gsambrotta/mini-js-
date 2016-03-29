define([
	'backbone',
	'models/UserModel',
	'views/UserListView',
	'text!templates/signup.html',
], function (Backbone, UserModel, UserListView, Signup) {

var SignupView = Backbone.View.extend({
	template: _.template(Signup),
	id: '#signup',
	model: UserModel,

	events: {
		'click #btn-submit': 'postInputs'
	},

	initialize: function() {
		// Make sure functions are called in the right scope
		_.bindAll(this, 'render', 'postInputs');
	},

	render: function() {
		// render template
		var html = this.$el.html(this.template);
		html.appendTo('.container');
	},

	postInputs: function( evt ) {
		var that = this;
		evt.preventDefault();

		var options = [];
		this.$el.find('input').each(function() {
			var key = this.id;
			var value = this.value;
			options[key] = value;
		});

		var remeberMe = $('.checkbox input[type="checkbox"]');
		if (remeberMe.is(':checked')) {
			this.model.set("rememberMe", true);
		}


		var user = new UserModel();
		user.set(options);
		user.save(options, {
			success: function(){
				that.trigger('postInputs');
			}
		});

		// clean up inputs
		this.$el.find('input').each(function() {
			this.value = "";
		});

		// Navigate to users/
		// and switch view
  	appRouter.navigate("#/users");

	},

	// shouldn't stay here
	getUser: function( cid ) {
		return this.model.cid;
	}

});

return SignupView;
});


