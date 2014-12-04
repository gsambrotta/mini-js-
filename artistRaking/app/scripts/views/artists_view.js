ArtRank.EditInputView = Ember.TextField.extend({
  didInsertElement: function () {
    $(this).focus();
  }
});

Ember.Handlebars.helper('edit-input', ArtRank.EditInputView);