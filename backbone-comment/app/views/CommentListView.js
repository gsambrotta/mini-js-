	var CommentListView = Backbone.View.extend({
		template: Handlebars.compile($('#commentList').html()),

		events: {
			'click #send': 'submit',
			'click #cancel': 'cancel',
			'click #hide': 'hideComment',
			'click #undo': 'undoHiddenComment'
		},

		initialize: function() {
			var self = this;
			this.collection = new ListCommentCollection();
			this.collection.fetch().then(function(){ 
				self.render();
			});
		},

		submit: function(event){
			var name = $('#name').val();
			var nickname = $('#nickname').val();
			var message = $('textarea').val();
			var commentModel = new CommentModel({
				name: name,
				nickname: nickname, 
				body: message
			});
			this.collection.create(commentModel);
			this.render();
		}, 

		cancel: function() {
			$('#name').val("");
			$('#nickname').val("");
			$('textarea').val("");
		},

		hideComment: function() {
			var hideButton = $('#hide');
			var hiddenComm = $('#hiddenComment');
			hideButton.parent().parent().parent().hide();
			hideButton.parent().parent().parent().next(hiddenComm).show();
		},

		undoHiddenComment: function() {
			console.log('giorgia');
			var undoButton = $('#undo');
			var thisCommentSection = undoButton.parent();
			thisCommentSection.hide();
			thisCommentSection.prev('#comment').show();
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
