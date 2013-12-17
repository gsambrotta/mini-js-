var NewCommentView = Backbone.View.extend({
	template: Handlebars.compile($('#newComment').html()),

	events: {
		'click #join': 'showLogin',
		'click #login': 'loggedIn',
		'click #cancel': 'cancel',
		'click #send': 'submit'
	},

	initialize: function(){
		this.loggedin = false;
		this.render();
    },

    showLogin: function() {
    	var join = $('#join-section');
   		var login = $('#login-section');
    	join.hide();
    	login.show();
    },

    loggedIn: function(event) {
    	var id = $('#ID');
    	var psw = $('#psw');
		if (id.val()=="designbygio") { 
			if (psw.val()=="javascript"){              
				this.loggedin = true;
				this.render();
			} else {
				alert("Invalid Password");
			}
		} else {  
			alert("Invalid UserID");
		}
    },

    submit: function(evt){
		console.log('ciao');
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

	render: function(){
        this.$el.html(this.template({
        	loggedin: this.loggedin, 
        	comments: this.collection.toJSON()
        }));
    }
});