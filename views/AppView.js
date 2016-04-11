var AppView = Backbone.View.extend({
   el: '.container',

   events: {
      'click #submit-beer': 'createBeer'
   },

   initialize: function () {
      this.$list = this.$('.beers-list');
      console.log(this.model.get('beers'));
      // debugger;
      this.listenTo(this.model.get('beers'), 'add', this.render);
   },

   createBeer: function (e) {
      e.preventDefault();
      var beer = {
         errors: []
      };

      var name = $('#beer-name').val(),
          style = $('#beer-style').val(),
          abv = $('#beer-abv').val(),
          imgUrl = $('#beer-img-url').val();

      // validating url
      var r = /^(ftp|http|https):\/\/[^ "]+$/;
      var valid = r.test(imgUrl);

      if (name !== '') {
         beer.name = name;
      } else {
         beer.errors.push('Your name is invalid');
      }

      if (style !== '') {
         beer.style = style;
      } else {
         beer.errors.push('You style is invalid');
      }

      // if numeric
      if ($.isNumeric(abv)) {
         beer.abv = abv;
      } else {
         beer.errors.push('Not a number');
      }

      // console.log(valid);
      //validating an url
      if (valid) {
         beer.imgUrl = imgUrl;
      } else {
         beer.errors.push('Not valid url');
      }

      this.addBeer(beer);
   },

   addBeer: function (beer) {
      this.model.get('beers').add(beer);
   },

   render: function (beer) {
      var view = new BeerView({model: beer});
      this.$list.append(view.render().el);
   }
});
