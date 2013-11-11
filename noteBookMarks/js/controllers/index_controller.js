Notes.IndexController = Ember.ArrayController.extend ({
	search: '',
	titleFilter: null,

	actions:{
		query: function() {
	      // the current value of the text field
	      var query = this.get('search');
	      this.set('titleFilter', query); //match titleFilter with query
	    },

		addNote: function () {
			this.transitionToRoute('new');
		}
	},

	arrangedContent: function() {
		var search = this.get('search'); // prendo il value del field search
		if (!search) { return this.get('content'); } // se search è vuoto -> get content

		return this.get('content').filter(function(note){ // Se search non è vuoto prendo content e lo filtro
			return note.get('title').indexOf(search) != -1; //indexOf ritorna la posizione della prima lettera/simbolo dentro a search (serach = Hello World e io inserisco Hel, risultato 0 Perchè l'H di hello è al primo posto nella string) e -1 è perchè se indexOf è vuoto ritorna -1
		})		   //risultato: visualizza il titolo di note che corrispondente alla posizione della lettera scritta dentro a search 
	}.property('content', 'titleFilter') //adding a new item in the content the filter will be updated, and if it match with the titleFilter, it will appear in the filtered list.
});

