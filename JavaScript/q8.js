// Q8: Employee Salary Projection

let currentSalary = 40000; // starting salary
let incrementRate = 10; // annual increment in %

let salaryTable = [];

for (let year = 1; year <= 5; year++) {
  currentSalary += (currentSalary * incrementRate) / 100; // apply increment
  salaryTable.push({
    Year: `Year ${year}`,
    Salary: Math.round(currentSalary)
  });
}

console.table(salaryTable);
