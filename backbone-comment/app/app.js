var listCommentCollection = new ListCommentCollection();

var newCommentView = new NewCommentView({
	model: CommentModel,
	collection: listCommentCollection,
	el: $('#wrap-login')
});

var commentListView = new CommentListView({
	model: CommentModel,
	collection: listCommentCollection,
	el: $('#wrap-list')
});

listCommentCollection.fetch().then(function() {
	commentListView.render();
});
