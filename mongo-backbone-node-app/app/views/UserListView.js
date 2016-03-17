define([
	'backbone',
	'mustache',
	'collections/SearchersCollection',
	'models/UserModel',
	'text!templates/user-list.html',
], function (Backbone, Mustache, SearchersCollection, UserModel, UserTmp) {

var UserListView = Backbone.View.extend({
	template: _.template(UserTmp),
	el: '#secondView',
	collection: SearchersCollection,
	model: UserModel,

	initialize: function() {
		_.bindAll(this, 'render');
		this.collection = new SearchersCollection();
		//this.model = new UserModel();
		this.collection.bind('reset', this.render, this);
		this.collection.fetch({ success: function () { console.log("collection fetched"); } });

	},

	render: function(){
		var that = this;
    console.log(that.collection);
    console.log(that.collection.models);

		var html = that.template({collection: that.collection});
		that.$el.html(html);

		$('#target').hide();
		$('#user-list-template').show();



		return that;
	},
});

return UserListView;
});
