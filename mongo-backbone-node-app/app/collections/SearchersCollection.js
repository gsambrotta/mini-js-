define([
	'backbone',
	'models/UserModel',
], function (Backbone, UserModel) {

var SearchersCollection = Backbone.Collection.extend({
	model: UserModel,
	url: 'http://localhost:8000/users'
});


return SearchersCollection;
});
