var BeerView = Backbone.View.extend({
  className: 'beer',
  
  events: {
    'click .remove-beer': 'removeBeer'
  },

  template: Handlebars.compile($('#beer-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove)
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  removeBeer: function () {
    this.model.destroy();
  }
    
});