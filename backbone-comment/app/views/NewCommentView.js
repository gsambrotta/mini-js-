var NewCommentView = Backbone.View.extend({
	template: Handlebars.compile($('#newComment').html()),

	events: {
		'click #join': 'showLogin',
		'click #login': 'loggedIn'
	},

	initialize: function(){
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
		if (id.val()=="@designbygio") { 
			if (psw.val()=="javascript"){              
				//location="page2.html"; 
				var commentModel = new CommentModel();
				commentModel.set({loggedin: true});
				this.render();
			} else {
				alert("Invalid Password");
			}
		} else {  
			alert("Invalid UserID");
		}
    },

	render: function(){
        this.$el.html(this.template());
    }
});