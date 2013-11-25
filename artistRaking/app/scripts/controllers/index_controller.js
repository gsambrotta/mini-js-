ArtRank.IndexController = Ember.ArrayController.extend({
	photos: function() {
        return this.get('content');
    }.property("content")
});