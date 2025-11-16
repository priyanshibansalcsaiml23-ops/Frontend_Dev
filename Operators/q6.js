let count = 0;

function increment() {
    count++;
    console.log(`Count after increment: ${count}`);

    function nestedLog() {
        console.log(`Nested scope count: ${count}`);
    }
    nestedLog();
}

function decrement() {
    count--;
    console.log(`Count after decrement: ${count}`);

    function nestedLog() {
        console.log(`Nested scope count: ${count}`);
    }
    nestedLog();
}

// Simulated clicks
increment();
increment();
decrement();
