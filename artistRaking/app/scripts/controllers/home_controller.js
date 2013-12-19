ArtRank.HomeController = Ember.ObjectController.extend({
	photoIndex: 0,
    photoTimer: null,

    actions: {
        nextPhoto: function() {
                var curPhotoIndex = this.get('photoIndex') + 1;
                if (curPhotoIndex == this.get('photos').length) {
                    curPhotoIndex = 0;
                }
                this.set('photoIndex', curPhotoIndex);
                 
        },
        prevPhoto: function() {
            var curPhotoIndex = this.get('photoIndex') - 1;
            if (curPhotoIndex == -1 ) {
                curPhotoIndex = this.get('photos').length - 1;
            }
            this.set('photoIndex', curPhotoIndex);
        }
    },

    photos: function() {
        return this.get('model').content;
    }.property(),

    arrangedContent: function() {
        return this.get('model').content[this.get("photoIndex")];
    }.property("photoIndex")

});