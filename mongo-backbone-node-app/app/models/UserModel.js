
define([
	'backbone',
], function (Backbone) {

var UserModel = Backbone.Model.extend({
	defaults: {
		rememberMe: false
	},
	url: 'http://localhost:8000/users'

});

	return UserModel;
});
