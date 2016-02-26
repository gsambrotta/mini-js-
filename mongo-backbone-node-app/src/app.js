
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
