ArtRank.Artists = DS.Model.extend({
	name: DS.attr('sting'),
	nickname: DS.attr('sting'),
	field: DS.attr('sting'),
	city: DS.attr('sting'),
	bio: DS.attr('sting'),
	image: DS.attr('sting'),

	isEditing: DS.attr('boolean')
});

ArtRank.Artists.FIXTURES = [
	{
		id: 1,
		name: "Eros Ramazzotti",
		nickname: "Rama",
		field: "Pop",
		city: "Saronno",
		bio: "bla ba bla bla bla bla" 
	},
	{
		id: 2,
		name: "Tiziano Ferro",
		nickname: "Tizi",
		field: "Pop",
		city: "Latina",
		bio: "bla2 ba2 bla2 bla bla2 bla" 
	}
];