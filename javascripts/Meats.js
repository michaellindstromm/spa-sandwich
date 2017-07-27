// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrice = 0;
  var meats = {"No meat":0.00,"Turkey": 1.50, "Ham": 1.50, "Bacon": 2.00};

  // Augment the original object with another method
  maker.addMeat = function(selectedMeat) {
    for (var type in meats) {
      if (selectedMeat === "no meat") {
        maker.resetMeat();
        break;
      } else if(selectedMeat === type) {
        meatPrice = meats[type];
      }
    }
    return meatPrice
  };

  maker.getMeat = function(){
    return meats
  }

  maker.getMeatPrice = function() {
    return meatPrice
  }

  maker.resetMeat = function() {
    meatPrice = 0;
    return meatPrice
  }

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);
