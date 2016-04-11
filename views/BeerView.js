var BeerView = Backbone.View.extend({
  template: $('#beer-template'),

  className: 'beer',

  events: {
  'click .remove-beer': 'removeBeer'
  },

  render: function() {
    var template = Handlebars.compile(this.template.html());
    this.$el.append(template(this.model.toJSON()));

    return this;
  },

  removeBeer: function () {
    console.log(this.model.get('beers'));
    //this.model.get('beers').remove();
    this.remove();
  }
    

})