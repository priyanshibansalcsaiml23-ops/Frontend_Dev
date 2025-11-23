// Grades.js

// Student class
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks; // array of subject marks
    }

    // Calculate average
    calculateAverage() {
        const sum = this.marks.reduce((acc, val) => acc + val, 0);
        return sum / this.marks.length;
    }

    // Assign grade
    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A+";
        else if (avg >= 75) return "A";
        else if (avg >= 60) return "B";
        else if (avg >= 40) return "C";
        else return "F";
    }

    // Display student details
    displayDetails() {
        return `Name: ${this.name}, Average: ${this.calculateAverage()}, Grade: ${this.getGrade()}`;
    }
}

// Create students
const students = [
    new Student("Priyanshi", [95, 88, 92]),
    new Student("Rahul", [70, 65, 80]),
    new Student("Sneha", [40, 55, 60])
];

// Display results
students.forEach(student => console.log(student.displayDetails()));
