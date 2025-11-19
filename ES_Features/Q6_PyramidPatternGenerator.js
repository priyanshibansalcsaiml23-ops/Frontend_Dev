"use strict";

const userInput = undefined; 
const rows = Number(userInput) || 5; // default = 5

console.log("Pyramid with let:");
for (let i = 1; i <= rows; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) {
    line += "* ";
  }
  console.log(line.trim());
}

console.log("\nPyramid with var:");
for (var i2 = 1; i2 <= rows; i2++) {
  var line2 = ""; // must reset each time, otherwise var reuses old value
  for (var j2 = 1; j2 <= i2; j2++) {
    line2 += "* ";
  }
  console.log(line2.trim());
}
