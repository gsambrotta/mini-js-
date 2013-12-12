var ListCommentCollection = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("comments"),
	model: CommentModel,
	//urlRoot: 'comments.json'
});
