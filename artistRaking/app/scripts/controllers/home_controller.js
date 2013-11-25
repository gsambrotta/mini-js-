ArtRank.HomeController = Ember.ObjectController.extend({
	photoIndex: 0,

    actions: {
        nextPhoto: function() {
            this.nextPhoto();
        },
        prevPhoto: function() {
            var curPhotoIndex = this.get('photoIndex') - 1;
            if (curPhotoIndex == -1 ) {
                curPhotoIndex = this.get('photos').length - 1;
            }
            this.set('photoIndex', curPhotoIndex);
        }
    },

    nextPhoto: function() {
            var curPhotoIndex = this.get('photoIndex') + 1;
            if (curPhotoIndex == this.get('photos').length) {
                curPhotoIndex = 0;
            }
            this.set('photoIndex', curPhotoIndex);
             
    },

    init: function() {
        var controller = this;
        this.set('photoTimer', setInterval(function(){
            Ember.run(function() {
                controller.nextPhoto();
            });
        }, 3000));
    },

    photos: function() {
        console.log(this.get('model').content);
        return this.get('model').content;
    }.property(),

    arrangedContent: function() {
        return this.get('model').content[this.get("photoIndex")];
    }.property("photoIndex")

});