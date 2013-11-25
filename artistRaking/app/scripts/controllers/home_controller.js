ArtRank.HomeController = Ember.ObjectController.extend({
	photoIndex: 0,

    actions: {
        nextPhoto: function() {
            console.log(this);
            this.set('photoIndex', this.get('photoIndex') + 1);

        },
        prevPhoto: function() {
            //console.log('prevPhoto');
        }
    },

    arrangedContent: function() {
        //console.log(this.get('model').content);
        return this.get('model').content[this.get("photoIndex")];
    }.property("photoIndex")

});