// Q4: Academic Performance Evaluator

let marks = [88, 76, 92, 81, 69]; // marks of 5 subjects

let totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
let average = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

let result = "";

if (marks.some(mark => mark < 35)) {
  result = "Detained (Failed in one or more subjects)";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log("Average Marks:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
console.log("Result:", result);
