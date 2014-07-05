(function() {
  var app = angular.module('drinkStore', []);

  app.controller('StoreController', function(){
    this.products = drinks;
  });

  var drinks = [{ 
      name: 'Reyka Vodka',
      price: 25,
      description: 'Distilled and bottled in Iceland, the makers of Reyka have created their ideal vodka using the country\'s pristine resources.',
      images: [
        "images/reyka1.gif",
        "images/reyka2.gif",
        "images/reyka2.gif"
      ],
      reviews: [{
        stars: 5,
        body: "Better than goose",
        author: "monkey@aol.com"
      },{
        stars: 3,
        body: "It's ok...",
        author: "swedishfish@msn.com"
      }]
    },
    { 
      name: 'Gentleman Jack',
      price: 40,
      description: 'The only whiskey in the world to be charcoal mellowed twice, giving it a unique smoothness.',
      images: [
        "images/jack1.gif",
        "images/jack2.gif",
        "images/jack3.gif"
      ],
      reviews: [{
        stars: 4,
        body: "Solid choice with coke",
        author: "monkey@aol.com"
      },{
        stars: 4,
        body: "Drink it neat",
        author: "junior@msn.com"
      }] 
    },
    { 
      name: 'Johnnie Walker Blue',
      price: 200,
      description: 'Delivers what every super-premium Scotch whisky should, complexity and elegance intertwined.',
      images: [
        "images/blue1.gif",
        "images/blue2.gif",
        "images/blue3.gif"
      ],
      reviews: [{
        stars: 2,
        body: "The only blue I can afford is Labatt Blue",
        author: "monkey@aol.com"
      },{
        stars: 5,
        body: "Ship it!",
        author: "junior@msn.com"
      }] 
    }
  ];
})();