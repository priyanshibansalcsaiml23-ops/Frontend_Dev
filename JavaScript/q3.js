// Q3: Monthly Expense Tracker

let expenses = [5000, 1200, 8000, 1500, 1000]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, val) => sum + val, 0);
let average = total / expenses.length;
let taxRate = 0.10;
let finalAmount = total + total * taxRate;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount after 10% tax:", finalAmount.toFixed(2));
