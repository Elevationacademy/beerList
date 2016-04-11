var BeerView = Backbone.View.extend({
  className: 'beer',
  
  events: {
    'click .remove-beer': 'removeBeer',
    'dblclick .view': 'editBeer',
    // 'blur .edit': 'saveBeer',
    'keypress .editName': 'updateOnEnter'
  },

  template: Handlebars.compile($('#beer-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'destroy', this.remove),
    this.listenTo(this.model, 'change', this.render)
  },

  render: function() {
    this.$input = this.$('.edit');
    this.$nameInput = this.$('.editName');
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  removeBeer: function () {
    this.model.destroy();
  },

  editBeer: function() {
    $('.view').addClass('hidden');
    $('.edit').addClass('editing');
    this.$input.focus();
  },

  updateOnEnter: function(e) { // Updates the item when we hit enter
    if (e.which === 13) { // && this.$nameInput.val() just to verify it's not empty
      this.model.set({name: this.$('.editName').val()});
      $('.view').removeClass('hidden');
      $('.edit').removeClass('editing');
    }
    
    this.$nameInput.val('');
  }

// Doesn't work as it should, save for later
  // saveBeer: function() {
  //   var newName = this.$('.editName').val();
  //   var trimmedValue = newName.trim(); // We use the jQuery trim() method here to trim away whitespace
    
  //   if (!this.$el.hasClass('editing')) {
  //     return;
  //   } else {
  //     this.clear();
  //   }
  //   this.$el.addClass('hidden');
  // },


    
});