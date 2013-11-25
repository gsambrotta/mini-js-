ArtRank.Photo = DS.Model.extend({
    imageTitle: DS.attr('string'),
    imageUrl: DS.attr('string')
});

ArtRank.Photo.FIXTURES = [
	 {
	   id: 1,
	   imageTitle: 'Learn Ember.js',
	   imageUrl: 'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-01.jpg'
	 },
	 {
	   id: 2,
	   imageTitle: '...',
	   imageUrl: 'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-02.jpg'
	 },
	 {
	   id: 3,
	   imageTtitle: 'Profit!',
	   imageUrl: 'http://getbootstrap.com/2.3.2/assets/img/bootstrap-mdo-sfmoma-03.jpg'
	 }
];
