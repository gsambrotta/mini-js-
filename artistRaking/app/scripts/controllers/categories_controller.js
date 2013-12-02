ArtRank.CategoriesController = Ember.ObjectController.extend({
	actions: {
		voteUp: function() {
			console.log('vote up');
		},
		voteDown: function() {
			console.log('vote down')
		}
	},
	arrangedContent: function() {
		 return this.get('model').content;
	}.property('model')
});