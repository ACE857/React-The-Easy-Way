// Destructuring Assignment
var sandwich = {
  bread: "dutch crunch",
  meat: "tuna",
  cheese: "swiss",
  toppings: ["lettuce", "tomato", "mustard"]
};
var { bread, meat } = sandwich;
console.log(bread, meat); // dutch crunch tuna

bread = "garlic";
meat = "turkey";
console.log(bread); // garlic
console.log(meat); // turkey
console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna

// Usage with functions
var lordify = regularPerson => {
  console.log(`${regularPerson.firstname} of Canterbury`);
};
var regularPerson = {
  firstname: "Bill",
  lastname: "Wilson"
};
lordify(regularPerson); // Bill of Canterbury

var lordify2 = ({ firstname }) => {
  console.log(`${firstname} of Canterbury`);
};
lordify2(regularPerson); // Bill of Canterbury

// Usage with arrays
var [firstResort] = ["Kirkwood", "Squaw", "Alpine"];
console.log(firstResort); // Kirkwood

var [, , thirdResort] = ["Kirkwood", "Squaw", "Alpine"];
console.log(thirdResort); // Alpine

// Object Literal Enhancement
var name = "Tallac";
var elevation = 9738;
var funHike = { name, elevation };
console.log(funHike); // {name: "Tallac", elevation: 9738}

var name = "Tallac";
var elevation = 9738;

var print = function() {
  console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
};
var funHike = { name, elevation, print };
funHike.print(); // Mt. Tallac is 9738 feet tall

//The Spread Operator
var peaks = ["Tallac", "Ralston", "Rose"];
var canyons = ["Ward", "Blackwood"];
var tahoe = [...peaks, ...canyons];

var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"];
var [first, ...rest] = lakes;
console.log(rest.join(", "));

function directions(...args) {
  console.log(args);
}
directions("Truckee", "Tahoe City", "Sunnyside", "Homewood", "Tahoma");

// spread operator for onjects

var morning = {
  breakfast: "oatmeal",
  lunch: "peanut butter and jelly"
};
var dinner = "mac and cheese";
var backpackingMeals = {
  ...morning,
  dinner
};
console.log(backpackingMeals);
