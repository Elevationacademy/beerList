var BeerView = Backbone.View.extend({
   tagName: 'li',

   template: Handlebars.compile($('#beer-template').html()),

   render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      console.log(this.model.toJSON());
      return this;
   }
});
