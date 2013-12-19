ArtRank.Artists = DS.Model.extend({
	name: DS.attr('string'),
	nickname: DS.attr('string'),
	field: DS.attr('string'),
	city: DS.attr('string'),
	bio: DS.attr('string'),
	image: DS.attr('string'),

	isEditing: DS.attr('boolean')
});

ArtRank.Artists.FIXTURES = [
	{
		id: 2,
		name: "Madonna Louise Veronica Ciccone",
		nickname: "Madonna",
		field: "Pop",
		city: "America",
		bio: "bla2 ba2 bla2 bla bla2 bla" 
	}
];