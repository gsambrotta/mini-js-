	var CommentListView = Backbone.View.extend({
		template: Handlebars.compile($('#commentList').html()),

		events: {
			'click .hide': 'hideComment',
			'click #undo': 'undoHiddenComment',
			'click .delete': 'deleteComment',
			'click .edit': 'editComment',
			'keypress textarea': 'saveOnEnter',
			'blur textarea': 'saveEdit'
		},

		initialize: function() {
			this.edit = false;
			var self = this;
			this.collection.bind('change', function(){ 
				self.render();
			});
		},

		hideComment: function(evt) {
			var hideButton = $(evt.target);
			var hiddenComm = $('.hiddenComment');
			hideButton.parent().parent().parent().hide();
			hideButton.parent().parent().parent().next(hiddenComm).show();
		},

		undoHiddenComment: function(evt) {
			var undoButton = $(evt.target);
			var thisCommentSection = undoButton.parent();
			thisCommentSection.hide();
			thisCommentSection.prev('#comment').show();
		},

		deleteComment: function(evt) {
			var deleteComm = $(evt.target);
			var cid = deleteComm.data("cid");
			var model = this.collection.get(cid);
			model.destroy();
			deleteComm.parent().parent().parent().remove();
		},

		editComment: function(evt) {
			editCommTextarea = $(evt.target);
			editCommTextarea.focus();
			//var editCommVal = editCommTextarea.val();
			var cid = editCommTextarea.data('cid');
			var model = this.collection.get(cid);
			model.set({edit: true});
			//var textarea = editCommTextarea.parent().parent().find('textarea');
		},

		saveEdit: function(evt) {
			var textarea = $(evt.target).val();
			this.model.save({body: textarea});
			this.edit = false; 
		},

		saveOnEnter: function(evt) {
			if (evt.keyCode == 13) this.saveEdit();
		},

		render: function(){
			var that = this,
			    comments = this.collection.toJSON(); //copy of a array model

			comments.reverse(); // revers just the copy so the real array stay the same

			that.$el.html(
				this.template({
					comments: comments
				})
			); // take my model and render in my html template

		}
	});
