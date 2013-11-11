Notes.NewController = Ember.ObjectController.extend ({
	actions:{
		createNote: function () {
			var error = $('#error');
			error.hide();
			var title = this.get('newTitle');
			if (!title ) { return error.show(); }
			var body = this.get('newBody');
			var url = this.get('newUrl');

			var note = this.store.createRecord('note', {
				title: title,
				body: body,
				url: url
			});

			this.set('newTitle', '');
			this.set('newBody', '');
			this.set('newUrl', '');

			note.save();
		}
	}
});