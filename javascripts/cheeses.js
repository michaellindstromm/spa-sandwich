var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrice = 0;
  var cheeses = {"No cheese":0.00, "American": 1.50, "Provalone": 1.50, "Pepperjack": 2.00, "Havarti":2.00};

  // Augment the original object with another method
  maker.addCheese = function(selectedCheese) {
    for (var type in cheeses) {
      if (selectedCheese === "no cheese") {
        maker.resetCheese();
        break;
      } else if(selectedCheese === type) {
        cheesePrice = cheeses[type];
        
      }
    }
    return cheesePrice
  };

  maker.getCheese = function(){
    return cheeses
  }

  maker.getCheesePrice = function() {
    return cheesePrice
  }

  maker.resetCheese = function() {
    cheesePrice = 0;
    return cheesePrice
  }

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);
