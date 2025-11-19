"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

employees.forEach(emp => {
    try {
        // Convert salary and years to numbers
        let salary = Number(emp.salary);
        let years = Number(emp.years);

        if (isNaN(salary) || isNaN(years)) throw new Error("Invalid data type");

        // Bonus calculation
        let bonus = years > 3 ? salary * 0.1 : salary * 0.05;

        // Template string output
        console.log(`Employee: ${emp.name}, Salary: ${salary}, Years: ${years}, Bonus: ${bonus}`);
    } catch (error) {
        console.log(` Error processing in ${emp.name}: ${error.message}`);
    }
});
