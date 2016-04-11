var BeerView = Backbone.View.extend({
   tagName: 'li',

   className: 'clearfix',

   template: Handlebars.compile($('#beer-template').html()),

   events: {
      'click .rate-btn': 'rating',
      'click .close': 'removeBeer',
      'click .edit-beer': 'editBeer',
      'keypress .value': 'changeProp'
   },

   rating: function (e) {
      e.preventDefault();
      var avg = $('input[name="avg-rate"]:checked').val();
      var rate = this.model.get('rating');
      if(!isNaN(avg) && rate === 0) {
         this.model.set('rating', Number(avg));
      } else if (!isNaN(avg)) {
         this.model.set('rating', (Number(avg)+rate)/2);
      }

      this.render();
   },

   removeBeer: function (e) {
      var idx = $(e.target).closest('li').index();
      this.$el.remove();
      // this.model.collection.remove(this.model);
      this.model.collection.at(idx).destroy();
   },

   editBeer: function (e) {
      var input = '<input type="text" class=\'value\'>';
      var idx = $(e.target).closest('li').index();

      if($(e.target).closest('p').has('input').length === 0 ) {
         $(e.target).append(input);
      }
   },

   changeProp: function (e) {
      var attr = $(e.target).closest('.edit-beer').data().info;
      var idx = $(e.target).closest('li').index();

      if (e.which === 13 && $('.value').val() !== '') {
         this.model.collection.at(idx).set(attr, $('.value').val());
         console.log(this.model.toJSON());
         $('.edit-beer').eq(idx).find('span').append($('.value').val());
         $('.value').remove();
      }
   },

   render: function () {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
   }
});
