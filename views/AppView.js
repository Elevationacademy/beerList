var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .add-beer': 'addBeer'
  },

  initialize: function () {
    // this.listenTo(this.model.get('beers'), 'add', this.renderBeer);
    this.$beers = this.$('.beersList'); 

    this.listenTo(beers, 'add', this.renderBeer)
  },

  addBeer: function () {
    beers.add({
      name: $('#beer-name').val(),
      abv: $('#beer-abv').val(),
      style: $('#beer-style').val(),
      image: $('#beer-image').val()
    });
   
    this.$('#beer-name').val('');
    this.$('#beer-abv').val('');
    this.$('#beer-style').val('');
    this.$('#beer-image').val('');
  },

  renderBeer: function (beerModel) {
    var view = new BeerView ({ model: beerModel});

    this.$beers.append(view.render().el);
  }
});