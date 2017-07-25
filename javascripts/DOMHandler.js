let body = document.getElementById("body");

// *****************************************
// ************ Meat Selector **************

let meatSelector = document.createElement("select");
meatSelector.id = "meat-chooser";
let disabledOption = document.createElement("option");
for (var meat in SandwichMaker.getMeat()) {
  let option = document.createElement("option");
  option.innerHTML = meat;
  option.value = meat;
  meatSelector.appendChild(option);
}
body.appendChild(meatSelector)

// *****************************************
// ************ Meat Selector **************


// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;
var toppingPrice = 0;
// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = this.value;

  // Determine the price of the topping chosen
  for (var type in SandwichMaker.getMeat()) {
    if (type === selectedTopping) {
      toppingPrice = SandwichMaker.getMeat()[type];
    }
  }

  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice = SandwichMaker.addTopping(toppingPrice);
  console.log(finalSandwichPrice);
});
