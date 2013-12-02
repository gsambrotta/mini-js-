ArtRank.ArtistsController = Ember.ObjectController.extend({
	arrangedContent: function(){
		return this.get('model').content;
	}.property('model')
});