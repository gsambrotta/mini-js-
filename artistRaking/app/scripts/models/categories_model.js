ArtRank.Categories = DS.Model.extend({
	catTitle:  DS.attr('string')
});

ArtRank.Categories.FIXTURES = [
	 {
	   id: 1,
	   catTitle: 'Music'
	 },
	 {
	   id: 2,
	   catTitle: 'Art'
	 },
	 {
	   id: 3,
	   catTitle: 'Video'
	 },
	 {
	   id: 4,
	   catTitle: 'Other'
	 }
];

