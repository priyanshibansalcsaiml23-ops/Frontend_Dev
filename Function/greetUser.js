function greetUser(name, callback) {
  console.log(`Hello ${name}`);
  callback(); // callback
}

function showEndMessage() {
  console.log("Welcome to the course!");
}

// callback flow
greetUser("Priyanshi", showEndMessage);
