var CartView = Backbone.View.extend({

  total: 0.0,

  initialize: function(options){ 
    this.collection = options.collection;
    this.collection.on('add', this.changed, this);
    this.collection.on('remove', this.changed, this);

  },

  changed: function() {
    var total = 0;
    this.collection.each(function(clone_fruit_model){
      total += clone_fruit_model.get('price');
    });
    this.total = total;
    this.render();
  },


  render: function() {
    this.$el.html(this.total);
  }

});