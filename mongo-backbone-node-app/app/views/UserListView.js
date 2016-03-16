define([
	'backbone',
	'mustache',
	'collections/SearchersCollection',
	'text!templates/user-list.html',
], function (Backbone, Mustache, SearchersCollection, UserTmp) {

var UserListView = Backbone.View.extend({
	template: UserTmp,
	el: '#secondView',
	collection: SearchersCollection,

	initialize: function() {
		_.bindAll(this, 'render');
		this.collection = new SearchersCollection();
		this.collection.bind('all', this.render, this);
		this.collection.fetch();
	},

	render: function(){
		var that = this;

		console.log(that.collection.toJSON());
		var html = that.template({collection: that.collection});
		that.$el.html(html);

		$('#target').hide();
		$('#user-list-template').show();

		//var modelsAttr = [];
		/*
		this.collection.fetch({
			success: function(users){
				jQuery.each( users.models, function(index, value){
					//console.log(value.attributes);
					modelsAttr.push(value.attributes);
				});
			}
		});
		*/

		return that;
	},
});

return UserListView;
});
