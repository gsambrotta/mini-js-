var newCommentView = new NewCommentView({
	el: $('#wrap-login')
});

var commentListView = new CommentListView({
	model: CommentModel,
	el: $('#wrap-list')
});