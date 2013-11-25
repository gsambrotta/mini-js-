ArtRank.Router.map(function (){
	this.resource('index', {path: '/'}, function() {
		this.resource("home", {path: '/'}, function() {
			this.resource("photo", {path: ':photo_id'});
		});
		this.resource('categories', { path: "/categories" });
		this.resource('profile', { path: "/profile" });
	});
});

ArtRank.IndexRoute = Ember.Route.extend({
	model: function() {
	}
});

ArtRank.HomeRoute = Ember.Route.extend({
	model: function() {
		 return this.store.find('photo');
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