Notes.Note = DS.Model.extend ({
    title: DS.attr('string'),
    body: DS.attr('string'),
    url: DS.attr('string')
});

Notes.Note.FIXTURES = [
	{
	    id: 1,
	    title: 'hello world',
	    body: 'ciao ciao ciao ciao',
	    url: ''
	},
	{   
	    id: 2,
	    title: 'javascript frameworks',
	    body: 'Backbone.js, Ember.js, Knockout.js',
	    url: '...'

	},
	{
	    id: 3,
	    title: 'Find a job in Berlin',
	    body: 'Monster, beralinstartupjobs.com',
	    url: '...'
	}
];

