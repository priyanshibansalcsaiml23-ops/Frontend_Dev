// Q6: Progressive Discount System

let totalPurchase = 7200; // input total amount
let discountPercent = 0;

if (totalPurchase >= 10000) {
  discountPercent = 25;
} else if (totalPurchase >= 5000) {
  discountPercent = 15;
} else if (totalPurchase >= 2000) {
  discountPercent = 5;
}

let discountAmount = (totalPurchase * discountPercent) / 100;
let finalPrice = totalPurchase - discountAmount;

console.log("Original Total:", totalPurchase);
console.log("Discount Percentage:", discountPercent + "%");
console.log("Final Price after Discount:", Math.round(finalPrice));
