var NewCommentCollection = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("comments"),
	model: NewCommentModel
});