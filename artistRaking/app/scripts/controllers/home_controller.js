ArtRank.HomeController = Ember.ObjectController.extend({
	photoIndex: 0,
    photoTimer: null,

    actions: {
        nextPhoto: function() {    
            this.set('photoIndex', this.get('photoIndex') + 1);
            var items;

        },
        prevPhoto: function() {
            this.set('photoIndex', this.get('photoIndex') - 1);
        }
    },

    nextPhoto: function() {    
            this.set('photoIndex', this.get('photoIndex') + 1);
            var items;

    },

    init: function() {
        var controller = this;
        this.set('photoTimer', setInterval(function(){
            Ember.run(function() {
                controller.nextPhoto();
            });
        }, 3000));
    },

    arrangedContent: function() {
        //console.log(this.get('model').content);
        return this.get('model').content[this.get("photoIndex")];
    }.property("photoIndex")

});