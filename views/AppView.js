var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click #beer-submit': 'addBeer'
  },

  initialize: function(){
    this.listenTo(this.model.get('beerCollection'), 'add', this.renderBeer);
    this.$beerContainer = this.$('#beer-container');
  },

  renderBeer: function(beer){
    var view = new BeerView({model: beer});

    this.$beerContainer.append(view.render().el);
  },

  addBeer: function(e){
    var $form = $(e.target).parent();
    var name = $form.find('#beer-name').val();
    var style = $form.find('#beer-style').val();
    var ABV = $form.find('#beer-abv').val();
    var img = $form.find('#beer-img').val();
    if(name !== '' && style !== '' && ABV !== '' && img !== ''){
      var beer = {
        name: name,
        style: style,
        abv: ABV,
        image_url: img
      };

      this.model.get('beerCollection').add(beer);
    }
  }

});