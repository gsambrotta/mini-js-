var User = Backbone.Model.extend({
	defaults: {
		rememberMe: false
	},
	url: 'http://localhost:8000/users'

});

