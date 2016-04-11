var AppModel = Backbone.Model.extend({
  defaults: {
    beers: new BeerCollection()
  }
});