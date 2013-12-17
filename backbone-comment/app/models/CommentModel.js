var CommentModel = Backbone.Model.extend({

	isMine: function(){
		return this.get("name") === "designbygio";
	},

	toJSON: function(){
    // get the standard json for the object
    var json = Backbone.Model.prototype.toJSON.apply(this, arguments);

    // get the calculated value
    json.isMine = this.isMine();

    // send it all back
    return json;
  }
});

