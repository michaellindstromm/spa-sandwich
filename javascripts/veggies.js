var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrice = 0;
  var veggies = {"No veggie":0.00, "Lettuce": 1.50, "Tomato": 1.50, "Onion": 2.00, "Jalapeño":2.00};

  // Augment the original object with another method
  maker.addVeggie = function(selectedVeggie) {
    for (var type in veggies) {
      if (selectedVeggie === "no veggie") {
        maker.resetVeggie();
        break;
      } else if(selectedVeggie === type) {
        veggiePrice = veggies[type];
        
      }
    }
    return veggiePrice
  };

  maker.getVeggie = function(){
    return veggies
  }

  maker.getVeggiePrice = function() {
    return veggiePrice
  }

  maker.resetVeggie = function() {
    veggiePrice = 0;
    return veggiePrice
  }

  // Return the new, augmented object with the new method on it
  return maker;

})(SandwichMaker);
