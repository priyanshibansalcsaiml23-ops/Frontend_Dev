// Product.js

// Define a Product class
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Method to apply discount (e.g., 10%)
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }

    // Method to display product details
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

// Create multiple product objects
const products = [
    new Product(1, "Laptop", 50000, "Electronics"),
    new Product(2, "Shoes", 1200, "Fashion"),
    new Product(3, "Book", 500, "Education"),
    new Product(4, "Smartphone", 15000, "Electronics")
];

// Apply discount to one product
products[0].applyDiscount(10); // 10% off Laptop

// Display all products
products.forEach(product => console.log(product.displayDetails()));

// Filter products with price > 1000
const expensiveProducts = products.filter(product => product.price > 1000);
console.log("Products with price > 1000:");
expensiveProducts.forEach(product => console.log(product.displayDetails()));
