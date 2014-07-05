(function() {
  var app = angular.module('drinkStore', []);

  app.controller('StoreController', function(){
    this.products = drinks;
  });

  var drinks = [
    { name: 'Reyka Vodka', price: 25 },
    { name: 'Gentleman Jack', price: 40 },
    { name: 'Johnny Walker Blue', price: 200 },
  ];
})();