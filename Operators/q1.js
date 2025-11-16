// Global variable declaration
let bonus = 5000;

// Function to calculate salary
function calculateSalary(isPermanent) {
    
    let salary = 40000;

    
    if (isPermanent) {
        salary += bonus;
    }

    
    console.log(`Total Salary: ${salary}`);
}


calculateSalary(true);   // Permanent employee → adds bonus
calculateSalary(false);  // Temporary employee → no bonus

// Global variable remains unchanged
console.log(`Global Bonus Value: ${bonus}`);
