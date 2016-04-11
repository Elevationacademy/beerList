var appModel = new AppModel();

appModel.get('beers').add([
  {name: '512 IPA', style: 'IPA', image_url: 'http://www.512brewing.com/wp-content/uploads/freshizer/df8c6a63fbcacbc4ae26a4d96269c620_Beers_Core4_IPA-220.png', abv: 10},
  {name: '120 Minute IPA', style: 'IPA', image_url: 'http://48tk9j3a74jb133e1k2fzz2s.wpengine.netdna-cdn.com/wp-content/uploads/2014/11/Dogfish-Head-120-Minute-IPA-2011-Bottle.jpg', abv: 10}
]);

var appView = new AppView({ model: appModel });