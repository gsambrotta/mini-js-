var ListCommentCollection = Backbone.Collection.extend({
	localStorage: new Backbone.LocalStorage("comments"),
	model: CommentModel,
	//url: 'comments.json',
});

