var age = 25;
var name = "Sarah";
var totalAmount = 144;

/*
TEST VARIABELEN
const age = 13;
const name = "Marco";
const totalAmount = 14;
*/

if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Sorry je komt niet in aanmerking voor korting");
}

if (name == "Sarah" || name == "Bram") {
  console.log("Je krijgt gratis bier!!");
} else {
  console.log("Je heet geen Sarah of Bram");
}

if (totalAmount >= 25 && totalAmount <= 49) {
  console.log("Je krijgt gratis (vega)bitterballen");
} else if (totalAmount >= 50 && totalAmount <= 99) {
  console.log("Je krijgt een gratis portie nachos");
} else if (totalAmount >= 100) {
  console.log("Je krijgt een gratis flesje champagne");
} else {
  console.log("Sorry je moet iets meer uitgeven voor de aktie");
}