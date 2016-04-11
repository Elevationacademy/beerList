var BeerView = Backbone.View.extend({

  template: $('#beer-template'),

  events: {
    'click .remove-beer': 'delete',
    'dblclick .name': 'toggleEditName',
    'click .name-edit-submit' : 'editName'
  },

  initialize: function(){
    this.listenTo(this.model, 'change:name', this.reName);
  },

  render: function(){
    var template = Handlebars.compile(this.template.html());

    this.$el.html(template(this.model.toJSON()));

    return this;
  },

  delete: function(){
    this.model.collection.remove(this.model);
    this.remove();
  },

  toggleEditName: function(){
    this.$el.find('.name-li').toggleClass('editing');
    this.$el.find('.name-edit').find('input').focus();
    this.$el.find('.name-edit').find('input').val('');
  },

  editName: function(e){
    var newName = $(e.target).siblings('input').val();
    this.model.set('name', newName);
  },

  reName: function(){
    this.$el.find('.name').html(this.model.get('name'));
    this.toggleEditName();
  }
});