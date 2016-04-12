AppView = Backbone.View.extend({
el: 'body',

events: {
  'click .submit': 'addData'
},

  initialize: function(){
    this.listenTo(beerCollection, 'add',this.addOne);
  },

  addOne: function (beerModel) {
    var view = new BeerView({model: beerModel});
    view.render();
    this.$('.displayBeer').append(view.el);
  },

  addData:function(){
    var name = $('#name').val();
    var style = $('#style').val();
    var abv = $('#abv').val();
    var url = $('#image').val();
    var rating = $('#rating').val();

    if (url){
      url = url
    } else {
      url = undefined; 
    };

    beerCollection.add({
    name:name,
    style:style,
    abv:abv,
    url: url,
    rating:rating
    });
  }




});