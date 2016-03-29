define([
	'backbone',
	'collections/SearchersCollection',
	'models/UserModel',
	'text!templates/user-list.html',
], function (Backbone, SearchersCollection, UserModel, UserTmp) {

var UserListView = Backbone.View.extend({
	template: _.template(UserTmp),
	id: '#secondView',
	collection: SearchersCollection,
	model: UserModel,

	initialize: function() {
		_.bindAll(this, 'render');
		this.collection = new SearchersCollection();
		this.collection.bind('reset', this.render, this);
		this.collection.fetch();
		this.listenTo(this.collection, 'add', this.renderUpdate); //listen to collection changes
	},

	render: function(){
		var that = this;

		var tmp = that.template({ users: that.collection.toJSON()});
		var html = that.$el.html(tmp);
		html.appendTo('.container');

		$('#target').hide();
		$('#user-list-template').show();

		return that;
	},

	// re-render if collection changed
	renderUpdate: function() {
		this.render();
	}

});

return UserListView;
});


