var ListView = Backbone.View.extend({

  el: '#list',
  listItemTemplate: _.template('<li><input type="checkbox" data-price="<%= priceEuro %>"/> <%= weight %>kg <%= name %> <%= priceEuro %>€ </li>'),
  // this a compile template. that mean that this underscore.js make the attribute (listItemTemplate) become a function.
  // So i can just call the function attributes and show just them. (see inside render function)
  events: {
      "click input": "inputClicked",
  },

  initialize: function() {
  },

  inputClicked: function(event){
      var price = $(event.target).attr("data-price");
      if ($(event.target).is(':checked')){
          cartView.trigger('itemAdded', price);
      } else {
        cartView.trigger('itemRemoved', price);
      }
  },

  render: function() {
    var me = this;    // refers to the instance of the Backbone class (listView). Appen when you have function inside function. 
    this.collection.each( // each(for loop of underscore). Per ogni elemento della collezione mostrami fruit (invented name) 
                          // How it know where fruits(array) coming from? In html file I specify that fruits stay in the FruitCollection
                          // and than tha the fruitCollection stay in the fruitView (and than call render fruitCollection that show Fruits)            
        function(fruit) {
          //console.log( fruit.get('name'), fruit.get('weight') );

          me.$el.append(
            me.listItemTemplate({ 
              weight: fruit.get('weight'), 
              name: fruit.get('name'), 
              priceEuro: fruit.get('price') 
            })
          );
        }
    );
  }

});