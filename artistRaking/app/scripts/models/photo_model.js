ArtRank.Photo = DS.Model.extend({
    imageTitle: DS.attr('string'),
    imageUrl: DS.attr('string')
});

ArtRank.Photo.FIXTURES = [
	 {
	   id: 2,
	   imageTitle: 'Learn Ember.js',
	   imageUrl: 'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-02.jpg'
	 },
	 {
	   id: 3,
	   imageTitle: '...',
	   imageUrl: 'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-03.jpg'
	 },
	 {
	   id: 4,
	   imageTitle: 'Profit!',
	   imageUrl: 'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-02.jpg'
	 }
];
