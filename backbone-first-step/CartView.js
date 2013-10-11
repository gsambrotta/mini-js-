var CartView = Backbone.View.extend({

  total: 0.0,

  events: {
      
  },

  initialize: function() {
      this.render();
      this.on("itemAdded", this.increasePrice);
      this.on("itemRemoved", this.decreasePrice);
  },

  increasePrice: function(pricenumber){
      this.total += parseFloat(pricenumber);
      this.render();
  },

  decreasePrice: function(price){
      this.total -= parseFloat(price);
      this.render();
  },

  render: function() {
      $("#price").html(this.total);
  }

});