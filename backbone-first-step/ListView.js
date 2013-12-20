var ListView = Backbone.View.extend({

  listItemTemplate: _.template('<li><input type="checkbox" data-fruit-id="<%= fruit_id %>"/> <%= weight %>kg <%= name %> <%= price %>€ </li>'),
  events: {
      "click input": "inputClicked"
  },

  initialize: function(options) {
    this.collection = options.collection;
    this.cartCollection = options.cartCollection;
  },

  inputClicked: function(event) {
      var input = $(event.target);
      var fruit_id = input.attr('data-fruit-id');
      var fruit_model = this.collection.get(fruit_id);
      if (input.is(':checked')){
        var clone_fruit_model = fruit_model.clone();
        clone_fruit_model.cid = fruit_id + '-clone';
        cartCollection.add(clone_fruit_model);
      } else {
        cartCollection.remove(fruit_id + '-clone');
      }
  },


  render: function() {
    var self = this; 

    this.collection.each(
        function(fruit) {
          var fruitNode = self.listItemTemplate({
              weight: fruit.get('weight'), 
              name: fruit.get('name'),
              price: fruit.get('price'),
              fruit_id: fruit.cid 
          });
          self.$el.append(fruitNode);
        }
    );
  }

});