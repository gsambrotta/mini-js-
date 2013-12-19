Notes.NoteController = Ember.ObjectController.extend({
	actions:{
		editNote: function(){
			this.set('isEditing', true);
		},

		modified: function(){
			this.set('isEditing', false);
			console.log(this.get('model'));
			this.get('model').save();
		},

		removeNote: function(){
			var note = this.get('model');
			note.deleteRecord();
			note.transitionToRoute('new');
			note.save();
		},
	},
	isEditing: false

});