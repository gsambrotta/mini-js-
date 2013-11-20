ArtRank.Router.map(function (){
	this.resource('index', {path: '/'}, function() {
		this.resource("home", {path: '/'}, function() {
			this.route("carousel", {path: ':carousel_id'})
		});
		this.resource('categories', { path: "/categories" });
		this.resource('profile', { path: "/profile" });
	});
});

ArtRank.IndexRoute = Ember.Route.extend({
	model: function() {
		// this.get ('store');
	}
});

ArtRank.HomeRoute = Ember.Route.extend({
	model: function() {
		// this.get ('store');
	}
});

ArtRank.CarouselRoute = Ember.Route.extend({
	model: function() {
//		return ArtRank.Carousel.find();
	}
});

ArtRank.ProfileRoute = Ember.Route.extend({
	model: function() {
		// this.get ('store');
	}
});

ArtRank.CategoriesRoute = Ember.Route.extend({
	model: function() {
		// this.get ('store');
	}
});