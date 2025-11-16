//  Personalized Login Greeting

 
let userName = "ram"; /


let currentHour = new Date().getHours(); // Returns hour in 0–23 format


let greetingMessage = ""; // Initialize an empty string

if (currentHour < 12) {
  greetingMessage = `Good Morning, ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
  greetingMessage = `Good Afternoon, ${userName}!`;
} else {
  greetingMessage = `Good Evening, ${userName}!`;
}

//print
console.log(greetingMessage);
