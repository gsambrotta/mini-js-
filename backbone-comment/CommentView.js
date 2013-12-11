	var CommentView = Backbone.View.extend({
		template: Handlebars.compile($('#indexView').html()),

		events: {
			'click button': 'submit'
		},

		submit: function(event){
			console.log('ciao');
			var message = $('textarea').val();
			var commentModel = new CommentModel({body: message});
			listCommentCollection.create(commentModel);


		}, 

		render: function(){
			var that = this;

			that.$el.html(
				this.template({
					comments: this.collection.toJSON()
					})
				); // take my model and render in my html template
				this.$el.html(this.comment);
		}


	});
