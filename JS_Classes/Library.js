// Library.js

// Book class
class Book {
    constructor(id, title, author, isAvailable = true) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = isAvailable;
    }

    // Method to borrow a book
    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `${this.title} has been borrowed.`;
        } else {
            return `${this.title} is not available.`;
        }
    }

    // Method to return a book
    returnBook() {
        this.isAvailable = true;
        return `${this.title} has been returned.`;
    }

    // Display book details
    displayDetails() {
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Available: ${this.isAvailable}`;
    }
}

// Create books
const books = [
    new Book(1, "JavaScript Essentials", "John Doe"),
    new Book(2, "Data Structures", "Jane Smith"),
    new Book(3, "Algorithms", "Robert Brown")
];

// Borrow and return demo
console.log(books[0].borrowBook());
console.log(books[0].returnBook());

// Display all books
books.forEach(book => console.log(book.displayDetails()));
