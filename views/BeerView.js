var BeerView = Backbone.View.extend({
   tagName: 'li',

   template: Handlebars.compile($('#beer-template').html()),

   events: {
      'click .rate-btn': 'rating'
   },

   rating: function (e) {
      var avg = $('input[name="avg-rate"]:checked').val();
      var rate = this.model.get('rating');
      if(!isNaN(avg) && rate === 0) {
         this.model.set('rating', Number(avg));
      } else if (!isNaN(avg)) {
         this.model.set('rating', (Number(avg)+rate)/2);
      }

      this.render();
   },

   removeBeer: function () {

   },

   editBeer: function () {

   },

   render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
   }
});
