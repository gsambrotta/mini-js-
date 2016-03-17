define([
	'backbone',
	'models/UserModel',
	'collections/SearchersCollection',
	'views/UserListView',
	'views/SignupView',
], function (Backbone, UserModel, SearchersCollection, UserListView, SignupView) {

	var SignUp = Backbone.View.extend({
		el: '.container'
	});

	window.app = {

		// Helper function aim to switch between views
		// and keep clean removing backbone views
	  currentView : null,

	  switchViews : function(view) {
	      if (this.currentView !== null && this.currentView.cid != view.cid) {
	          this.currentView.remove();
	      }
	      this.currentView = view;
	      return view.render();
	  }
	}

	// Show first view
	var signupView = new SignupView();
	app.switchViews(signupView);

//return app;
});
