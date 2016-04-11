var BeerModel = Backbone.Model.extend({
  defaults: function () {
    return {
      name: "",
      abv: 5,
      style: "",
      image: "http://www.menshealth.com/sites/menshealth.com/files/styles/slideshow-desktop/public/images/slideshow2/beer-intro.jpg"
    }
  }
});