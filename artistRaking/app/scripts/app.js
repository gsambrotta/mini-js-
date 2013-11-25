window.ArtRank = Ember.Application.create();

/*ArtRank.store = DS.Store.create({
    adapter:  "DS.RESTAdapter"
});*/

ArtRank.ApplicationAdapter = DS.FixtureAdapter.extend();