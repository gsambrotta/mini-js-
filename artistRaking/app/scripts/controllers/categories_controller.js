ArtRank.CategoriesController = Ember.ObjectController.extend({
	actions: {
		voteUp: function() {
			console.log('vote up');
		},
		voteDown: function() {
			console.log('vote down')
		},
		addParentCat: function() {
			this.set('isEditing', true);
		},
		saved: function() {
			this.set('isEditing', false);
		}

	},
	arrangedContent: function() {
		 return this.get('model').content;
	}.property('model')
});