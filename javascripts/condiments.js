var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrice = 0;
  var condiments = {"No condiment":0.00, "Ketchup": 1.50, "Mustard": 1.50, "Mayonnaise": 2.00};

  // Augment the original object with another method
  maker.addCondiment = function(selectedCondiment) {
    for (var type in condiments) {
      if (selectedCondiment === "no condiment") {
        maker.resetCondiment();
        break;
      } else if(selectedCondiment === type) {
        condimentPrice = condiments[type];
        
      }
    }
    return condimentPrice
  };

  maker.getCondiment = function(){
    return condiments
  }

  maker.getCondimentPrice = function() {
    return condimentPrice
  }

  maker.resetCondiment = function() {
    condimentPrice = 0;
    return condimentPrice
  }

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);
