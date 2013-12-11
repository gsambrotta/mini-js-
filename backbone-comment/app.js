var listCommentCollection = new ListCommentCollection();
listCommentCollection.fetch();

var commentView = new CommentView({
	collection: listCommentCollection,
	el: $('#app')
});
commentView.render();