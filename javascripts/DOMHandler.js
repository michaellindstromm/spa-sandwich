let body = document.getElementById("body");
let outputArea = document.getElementById("finalPrice");


// ******************************************
// ************ Bread Selector **************

let breadSelector = document.createElement("select");
breadSelector.id = "bread-chooser";
let disabledBreadOption = document.createElement("option");
disabledBreadOption.setAttribute("disabled", true);
disabledBreadOption.setAttribute("selected", true);
disabledBreadOption.innerHTML = "Select a Bread";
breadSelector.appendChild(disabledBreadOption);
let breadObj = SandwichMaker.getBread();
for (var bread in breadObj) {
  let option = document.createElement("option");
  option.innerHTML = bread;
  option.value = bread;
  breadSelector.appendChild(option);
}
body.appendChild(breadSelector)

// *****************************************
// ************ Meat Selector **************

let meatSelector = document.createElement("select");
meatSelector.id = "meat-chooser";
let disabledMeatOption = document.createElement("option");
disabledMeatOption.setAttribute("disabled", true);
disabledMeatOption.setAttribute("selected", true);
disabledMeatOption.innerHTML = "Select a Meat";
meatSelector.appendChild(disabledMeatOption);
let meatObj = SandwichMaker.getMeat();
for (var meat in meatObj) {
  let option = document.createElement("option");
  option.innerHTML = meat;
  option.value = meat;
  meatSelector.appendChild(option);
}
body.appendChild(meatSelector)

// *******************************************
// ************ Cheese Selector **************

let cheeseSelector = document.createElement("select");
cheeseSelector.id = "cheese-chooser";
let disabledCheeseOption = document.createElement("option");
disabledCheeseOption.setAttribute("disabled", true);
disabledCheeseOption.setAttribute("selected", true);
disabledCheeseOption.innerHTML = "Select a Cheese";
cheeseSelector.appendChild(disabledCheeseOption);
let cheeseObj = SandwichMaker.getCheese();
for (var cheese in cheeseObj) {
  let option = document.createElement("option");
  option.innerHTML = cheese;
  option.value = cheese;
  cheeseSelector.appendChild(option);
}
body.appendChild(cheeseSelector)

// *******************************************
// ************ Veggie Selector **************

let veggieSelector = document.createElement("select");
veggieSelector.id = "veggie-chooser";
let disabledVeggieOption = document.createElement("option");
disabledVeggieOption.setAttribute("disabled", true);
disabledVeggieOption.setAttribute("selected", true);
disabledVeggieOption.innerHTML = "Select a Veggie";
veggieSelector.appendChild(disabledVeggieOption);
let veggieObj = SandwichMaker.getVeggie();
for (var veggie in veggieObj) {
  let option = document.createElement("option");
  option.innerHTML = veggie;
  option.value = veggie;
  veggieSelector.appendChild(option);
}
body.appendChild(veggieSelector)

// *******************************************
// ************ Veggie Selector **************

let condimentSelector = document.createElement("select");
condimentSelector.id = "condiment-chooser";
let disabledCondimentOption = document.createElement("option");
disabledCondimentOption.setAttribute("disabled", true);
disabledCondimentOption.setAttribute("selected", true);
disabledCondimentOption.innerHTML = "Select a Condiment";
condimentSelector.appendChild(disabledCondimentOption);
let condimentObj = SandwichMaker.getCondiment();
for (var condiment in condimentObj) {
  let option = document.createElement("option");
  option.innerHTML = condiment;
  option.value = condiment;
  condimentSelector.appendChild(option);
}
body.appendChild(condimentSelector)

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
let selectedBread = 0;
let selectedMeat = 0;
let selectedCheese = 0;
let selectedVeggie = 0;
let selectdeCondiment = 0;

meatChooser.addEventListener("change", function(event) {


  selectedTopping = this.value;
  toppingPrice = SandwichMaker.addMeat(selectedTopping);

  if (selectedTopping !== "No meat") {
    selectedMeat += toppingPrice;
    console.log(selectedMeat);

  } else {
    toppingPrice = -(selectedMeat)
    selectedMeat = 0;
    console.log(toppingPrice);
  }



  // Add the topping to the SandwichMaker to increase the total price
  finalSandwichPrice = SandwichMaker.addTopping(toppingPrice);
  console.log(finalSandwichPrice);
  outputArea.innerHTML = `$${finalSandwichPrice}`;
});

var breadChooser = document.getElementById("bread-chooser");
breadChooser.addEventListener("change", function(event){
  selectedTopping = this.value;

  toppingPrice = SandwichMaker.addBread(selectedTopping);

  if (selectedTopping !== "No bread") {
    selectedBread += toppingPrice;
    console.log(selectedBread);

  } else {
    toppingPrice = -(selectedBread)
    selectedBread = 0;
    console.log(toppingPrice);
  }

  finalSandwichPrice = SandwichMaker.addTopping(toppingPrice);
  console.log(finalSandwichPrice);
  outputArea.innerHTML = `$${finalSandwichPrice}`;
})

var cheeseChooser = document.getElementById("cheese-chooser");
cheeseChooser.addEventListener("change", function(event){
  selectedTopping = this.value;

  toppingPrice = SandwichMaker.addCheese(selectedTopping);

  if (selectedTopping !== "No cheese") {
    selectedCheese += toppingPrice;
    console.log(selectedCheese);

  } else {
    toppingPrice = -(selectedCheese)
    selectedCheese = 0;
    console.log(toppingPrice);
  }

  finalSandwichPrice = SandwichMaker.addTopping(toppingPrice);
  console.log(finalSandwichPrice);
  outputArea.innerHTML = `$${finalSandwichPrice}`;
})

var veggieChooser = document.getElementById("veggie-chooser");
veggieChooser.addEventListener("change", function(event){
  selectedTopping = this.value;

  toppingPrice = SandwichMaker.addVeggie(selectedTopping);

  if (selectedTopping !== "No veggie") {
    selectedVeggie += toppingPrice;
    console.log(selectedVeggie);

  } else {
    toppingPrice = -(selectedVeggie)
    selectedVeggie = 0;
    console.log(toppingPrice);
  }

  finalSandwichPrice = SandwichMaker.addTopping(toppingPrice);
  console.log(finalSandwichPrice);
  outputArea.innerHTML = `$${finalSandwichPrice}`;
})

var condimentChooser = document.getElementById("condiment-chooser");
condimentChooser.addEventListener("change", function(event){
  selectedTopping = this.value;

  toppingPrice = SandwichMaker.addCondiment(selectedTopping);

  if (selectedTopping !== "No condiment") {
    selectdeCondiment += toppingPrice;
    console.log(selectdeCondiment);

  } else {
    toppingPrice = -(selectdeCondiment)
    selectdeCondiment = 0;
    console.log(toppingPrice);
  }

  finalSandwichPrice = SandwichMaker.addTopping(toppingPrice);
  console.log(finalSandwichPrice);
  outputArea.innerHTML = `$${finalSandwichPrice}`;
})
