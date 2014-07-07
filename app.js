(function() {
  var app = angular.module('drinkStore', []);

  app.controller('StoreController', function(){
    this.products = drinks;
  });

  app.controller('TabController', function(){
    this.tab = 1;
    this.setTab = function(value){
      this.tab = value;
    };
    this.isSet = function(value){
      return this.tab == value;
    };
  });

  app.controller('ReviewController', function(){
    this.review = {};
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });

  var drinks = [{ 
      name: 'Reyka Vodka',
      price: 25,
      description: 'Distilled and bottled in Iceland, the makers of Reyka have created their ideal vodka using the country\'s pristine resources.',
      images: [
        "images/reyka1.jpeg",
        "images/reyka2.jpeg",
        "images/reyka3.jpeg"
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
        "images/jack1.jpeg",
        "images/jack2.jpeg",
        "images/jack3.jpeg"
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
        "images/blue1.jpeg",
        "images/blue2.jpeg",
        "images/blue3.jpeg"
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