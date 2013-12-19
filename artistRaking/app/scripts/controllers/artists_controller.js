ArtRank.ArtistsController = Ember.ObjectController.extend({
	actions: {
		addCategory: function() {
			var category = this.get('newCategory');
			var newCategory = this.store.createRecord('categories', {
				catTitle: category
			});
			this.set('newCategory', '');

			newCategory.save();
		},

		editProfile: function(){
			this.set('isEditing', true);
		},

		modified: function() {
			this.set('isEditing', false);
			this.get('model').save();
		}
	},
	
	arrangedContent: function(){
		return this.get('model').content;
	}.property('model'),

	isEditing: false
});