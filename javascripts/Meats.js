// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices;
  var meats = {"turkey": 1.50, "ham": 1.50, "bacon": 2.00};

  // Augment the original object with another method
  maker.addMeat = function(selectedMeat) {
    for (var type in meats) {
      if(selectedMeat === type) {

      }
    }
  };

  maker.getMeat = function(){
    return meats;
  }

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);
