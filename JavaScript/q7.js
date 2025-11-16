// Q7: Smart Guessing Game (Number Range)

// Step 1: Generate a random number between 1 and 50
let secretNumber = Math.floor(Math.random() * 50) + 1;

// Step 2: Simulate a user guess (change this value to test)
let userGuess = 47;

// Step 3: Compare guess with secret number using nested conditions
if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  let difference = Math.abs(userGuess - secretNumber);
  if (difference <= 3) {
    console.log("Very close!");
  } else {
    if (userGuess > secretNumber) {
      console.log("Too high");
    } else {
      console.log("Too low");
    }
  }
}

console.log(`Secret: ${secretNumber}, Guess: ${userGuess}`);
