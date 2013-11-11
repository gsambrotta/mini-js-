Notes.EditInputNoteView = Ember.TextField.extend({
  didInsertElement: function () {
    $(this).focus();
  }
});
Ember.Handlebars.helper('edit-input-note', Notes.EditInputNoteView);



Notes.EditAreaNoteView = Ember.TextArea.extend ({
	didInsertElement: function () {		
		$(this).focus();
	}
})
Ember.Handlebars.helper('edit-area-note', Notes.EditAreaNoteView);

