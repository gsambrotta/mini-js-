
var UserListView = Backbone.View.extend({
	template: 'user-list',

	render: function(){
		var that = this;
		var modelsAttr = [];

		var users = new Searchers();
		users.fetch({
			success: function(users){
				$("#target").hide();
				$('#user-list-template').show();

				jQuery.each( users.models, function(index, value){
					console.log(value.attributes);
					modelsAttr.push(value.attributes);
				});
			}
		});

		// not good practice, but ok for small local app
		TemplateManager.get(this.template, function(template){
      var html = $(template);
      that.$el.html(html);
      that.$el.html(template(modelsAttr));
    });

		return that;
	}
});

