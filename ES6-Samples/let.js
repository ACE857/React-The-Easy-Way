console.log("without using let - ");

var name = "Suraj";
if (name) {
  var name = "Bisht";
  console.log("local scope - ", name); // local scope
}
console.log("global scope - ", name); // global scope

console.log("\n\nusing let - ");
var name = "Suraj";
if (name) {
  let name = "Bisht";
  console.log("local scope - ", name);
}
console.log("global scope - ", name);

// same is the case with loops
