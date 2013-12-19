ArtRank.HomeView = Ember.View.extend({   
	animate: function(direction) {
		var element = this.$('.photoItem');
		if (element === undefined)
			return;
		element.addClass('animate-' + direction);
		setTimeout(function() {
			element.removeClass('animate-' + direction);
		}.bind(this), 500);
	},

    startTimer: function() {
    	var self = this;
        setInterval(function(){
            Ember.run(function() {
            	self.nextPhoto();
            });
        }, 5000);
    }.on('init'),

	prevPhoto: function() {
		this.get('controller').send('prevPhoto');
		this.animate('right');
	},
	nextPhoto: function() {
		this.get('controller').send('nextPhoto');
		this.animate('left');
	}
});


