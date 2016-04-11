var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click .add-beer': 'addBeer',
  },

  initialize: function () {
    this.listenTo(this.model.get('beers'), 'add', this.renderBeer);

    this.$beers = this.$('.beersList'); 
  },

  addBeer: function (e) {
    e.preventDefault();

    // Create a new beer model:
    var beer = new BeerModel ( {
      name: $('#beer-name').val(),
      abv: $('#beer-abv').val(),
      style: $('#beer-style').val(),
      image: $('#beer-image').val()
    });
    // Add the new beer model to the appModel's 'beer' collection
    this.model.get('beers').add(beer);
  },

  renderBeer: function (beer) {
    var view = new BeerView ({ model: beer});

    this.$beers.append(view.render().el);
  }
});