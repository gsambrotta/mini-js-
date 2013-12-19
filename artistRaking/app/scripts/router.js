ArtRank.Router.map(function (){
	this.resource('index', {path: '/'}, function() {
		this.resource("home", {path: '/'}, function() {
			this.resource("photo", {path: ':photo_id'});
		});
		this.resource('categories', { path: "/categories" });
		this.resource('artists', { path: "/artists" });
	});
});

ArtRank.IndexRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('photo');
	}
});

ArtRank.HomeRoute = Ember.Route.extend({
	model: function() {
		 return this.store.find('photo');
	}
});

ArtRank.ArtistsRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('artists');		
	}
});

ArtRank.CategoriesRoute = Ember.Route.extend({
	model: function() {
		 return this.store.find('categories');
	}
});