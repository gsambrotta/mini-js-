var NewCommentModel = Backbone.Model.extend({
	defaults: function() {
		return {
			loggedin: false,
			edit: false,
		};
	}
});
