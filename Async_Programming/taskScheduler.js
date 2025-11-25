console.log("Start");

setTimeout(() => {
  console.log("Macrotask: setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask: Promise.then");
});

console.log("Synchronous log");
console.log("End");

// Explanation:
// Microtasks (Promise.then) run immediately after the current call stack,
// before macrotasks (setTimeout), which are queued for the next event loop tick.
