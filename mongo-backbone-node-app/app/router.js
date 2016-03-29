define([
	'backbone',
	'views/UserListView',
	'views/SignupView',
], function (Backbone, UserListView, SignupView) {

return Backbone.Router.extend({
	routes: {
		"": "index",
		"users" : "usersList"
	},

	index: function() {
		console.log('index');
		var signupView = new SignupView();
		app.switchViews(signupView);
	},

	usersList: function() {
		console.log('users');
		var userListView = new UserListView();
		app.switchViews(userListView)
	}

});

});
