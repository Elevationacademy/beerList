var BeerModel = Backbone.Model.extend({
  defaults: {
    name: '',
    style: '',
    image_url: '',
    abv: null,
    edit_mode: false
  }
});