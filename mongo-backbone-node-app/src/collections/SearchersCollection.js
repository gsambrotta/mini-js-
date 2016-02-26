var Searchers = Backbone.Collection.extend({
	model: User,
	url: 'http://localhost:8000/users'
});

