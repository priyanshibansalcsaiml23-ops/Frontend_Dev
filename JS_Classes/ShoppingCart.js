// ShoppingCart.js

class Cart {
    constructor() {
        this.items = [];
    }

    // Add item to cart
    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    // Calculate total
    getTotal() {
        return this.items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    // Apply coupon
    applyCoupon(code) {
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/; 
        // Format: SAVE20 or DISC10
        const match = code.match(couponPattern);

        if (match) {
            const discountPercent = parseInt(match[2]);
            const total = this.getTotal();
            const discountedTotal = total - (total * discountPercent / 100);
            return `Coupon applied: ${discountPercent}% off. Final Total: ₹${discountedTotal}`;
        } else {
            return "Invalid coupon code!";
        }
    }
}

// Demo
const cart = new Cart();
cart.addItem("Laptop", 50000, 1);
cart.addItem("Shoes", 2000, 2);
cart.addItem("Book", 500, 3);

console.log("Cart Total: ₹" + cart.getTotal());
console.log(cart.applyCoupon("SAVE20")); // valid coupon
console.log(cart.applyCoupon("HELLO50")); // invalid coupon
