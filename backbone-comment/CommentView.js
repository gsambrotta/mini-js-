	var CommentView = Backbone.View.extend({
		template: Handlebars.compile($('#indexView').html()),

		events: {
			'click button': 'submit'
		},

		initialize: function() {
			var self = this;
			this.collection = new ListCommentCollection();
			this.collection.fetch().then(function(){ 
				self.render();
			});
			this.listenTo(this.collection, 'add', this.addOne);
		},

		submit: function(event){
			console.log('ciao');
			var message = $('textarea').val();
			var commentModel = new CommentModel({body: message});
			this.collection.create(commentModel);
		}, 

		addOne: function(comment) {

		},

		render: function(){
			var that = this;

			that.$el.html(
				this.template({
					comments: this.collection.toJSON()
					})
				); // take my model and render in my html template
		}
	});
