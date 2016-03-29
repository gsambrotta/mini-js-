define([
	'backbone',
	'router',
	'models/UserModel',
	'collections/SearchersCollection',
	'views/UserListView',
	'views/SignupView',
], function (Backbone, Router, UserModel, SearchersCollection, UserListView, SignupView) {

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

	appRouter = new Router();
	Backbone.history.start();

});
