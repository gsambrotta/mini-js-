var SignupView = Backbone.View.extend({
	el: $(".form-signin"),
	model: userModel,

	events: {
		'click #btn-submit': 'postInputs'
	},

	render: function() {
		var that = this;

		// Make sure functions are called in the right scope
		_.bindAll(that, 'postInputs');

		// Listen to model changes
		// this.model.bind('change', this.edit)
	},

	postInputs: function( evt ) {
		var that = this;
		evt.preventDefault();

		var options = {};
		this.$el.find('input').each(function() {
			var key = this.id;
			var value = this.value;
			options[key] = value;
		});

		var remeberMe = $('.checkbox input[type="checkbox"]');
		if (remeberMe.is(':checked')) {
			this.model.set("rememberMe", true);
		}

		//this.model.set(options);
		//this.model.save();

		var user = new User();
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

		// switch view
		window.app.switchFromSignupToUsersList();

	},

	// shouldn't stay here
	getUser: function( cid ) {
		return this.model.cid;
	}

});

