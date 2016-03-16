var User = Backbone.Model.extend({
	defaults: {
		rememberMe: false
	},
	url: 'http://localhost:8000/users'

});

/////////////////////////// 
/*
var Signup = Backbone.Model.extend({
	users: []
});


Signup.prototype.addUser = function(user) {
	this.users.push(user);
};

Signup.prototype.getUser = function(index) {
	return this.users[index];
};

Signup.prototype.deleteUser = function(index) {
	this.users.splice(index, 1);
};

Signup.prototype.updateUser = function(user) {
	//return this.users.updateUsers = this.users[user];
};

*/
/////////////////////////// 
/////////////////////////// 
var Searchers = Backbone.Collection.extend({
	model: User,
	url: 'http://localhost:8000/users'
});

/////////////////////////// 

var SignupView = Backbone.View.extend({
	el: $(".form-signin"),
	model: userModel,

	events: {
		'click #btn-submit': 'postInputs'
	},

	render: function() {
		var that = this;

		// Make sure functions are called in the right scope
		_.bindAll(that, 'postInputs');

		// Listen to model changes
		// this.model.bind('change', this.edit)
	},

	postInputs: function( evt ) {
		var that = this;
		evt.preventDefault();

		var options = {};
		this.$el.find('input').each(function() {
			var key = this.id;
			var value = this.value;
			options[key] = value;
		});

		var remeberMe = $('.checkbox input[type="checkbox"]');
		if (remeberMe.is(':checked')) {
			this.model.set("rememberMe", true);
		}

		//this.model.set(options);
		//this.model.save();

		var user = new User();
		user.set(options);
		user.save(options, {
			success: function(){
				that.trigger('postInputs');
			}
		});

		// clean up inputs
		this.$el.find('input').each(function() {
			this.value = "";
		});

		// switch view
		window.app.switchFromSignupToUsersList();

	},

	// shouldn't stay here
	getUser: function( cid ) {
		return this.model.cid;
	}

});

/////////////////////////// 

var UserListView = Backbone.View.extend({

	initialize: function() {
		/*
		$.get('app/templates/user-list.html', function(template) {
	    var render = Mustache.to_html(template, this.collection);
	  	$(that.el).html(rendered);
	  });
		*/
	},


	render: function(){
		var that = this;
		var modelsAttr = [];

		TemplateManager.get(this.template, function(template){
      var tmp = $(template).tmpl();
      var rendered = Mustache.to_html(that.tmp, that.collection);
      //that.$el.html(tmp);
      $(that.el).html(rendered);
    });

		var users = new Searchers();
		users.fetch({
			success: function(users){
				//that.renderTemplate();

				jQuery.each( users.models, function(index, value){
					console.log(value.attributes);
					modelsAttr.push(value.attributes);
				});
			}
		});
	},

	renderTemplate: function() {
		var that = this;


		/*
		rendered = Mustache.to_html(that.template, that.collection);
		$(that.el).html(rendered);
		return that;
		*/
	}
});

/////////////////////////// 

var PageController = Backbone.Router.extend({
	routers: {
		"": "index"
	}

})
/////////////////////////// 

var userModel = new User();
var searchersCollection = new Searchers();

var SignUp = Backbone.View.extend({
	el: '.container'
});
var signupView = new SignupView();
signupView.render();


var userListView = new UserListView({
	el: $("#secondView"),
	collection: searchersCollection
});

var signup = new SignUp;


window.app = {
	switchViews: function(viewName){

	},

	switchFromSignupToUsersList: function(){
		signupView.remove();
		userListView.render();
	}
}
