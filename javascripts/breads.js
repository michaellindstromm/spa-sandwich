var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrice = 0;
  var breads = {"No bread":0.00, "White": 1.50, "Wheat": 1.50, "Pumperknickle": 2.00, "Rye":2.00};

  // Augment the original object with another method
  maker.addBread = function(selectedBread) {
    for (var type in breads) {
      if (selectedBread === "no bread") {
        maker.resetBread();
        break;
      } else if(selectedBread === type) {
        breadPrice = breads[type];
        
      }
    }
    return breadPrice
  };

  maker.getBread = function(){
    return breads
  }

  maker.getBreadPrice = function() {
    return breadPrice
  }

  maker.resetBread = function() {
    breadPrice = 0;
    return breadPrice
  }

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);
