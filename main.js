var appModel = new AppModel();
var appView = new AppView({model: appModel});


appView.model.get('beerCollection').add({
  name: 'Midnight',
  style: 'Porter',
  abv: 5,
  image_url: 'http://www.beerometer.co.il/product_images/x/85_350.jpg'
});