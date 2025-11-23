// Employee.js

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // monthly salary
    }

    // Method to calculate annual salary
    getAnnualSalary() {
        return this.salary * 12;
    }

    // Method to apply bonus (percent)
    applyBonus(percent) {
        this.salary += (this.salary * percent / 100);
    }

    // Display employee details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Dept: ${this.department}, Monthly Salary: ₹${this.salary}`;
    }
}

// Create 5 employees
const employees = [
    new Employee(1, "Priyanshi", "IT", 50000),
    new Employee(2, "Rahul", "HR", 30000),
    new Employee(3, "Sneha", "Finance", 40000),
    new Employee(4, "Amit", "Marketing", 35000),
    new Employee(5, "Neha", "Operations", 45000)
];

// Apply bonus to one employee
employees[0].applyBonus(10); // 10% bonus for Priyanshi

// Calculate annual salary for each
employees.forEach(emp => console.log(`${emp.name} Annual Salary: ₹${emp.getAnnualSalary()}`));

// Use reduce() to calculate total annual payout
const totalPayout = employees.reduce((acc, emp) => acc + emp.getAnnualSalary(), 0);
console.log("Total Annual Payout of Company: ₹" + totalPayout);
