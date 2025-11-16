// Q5: Weather Activity Planner

let temperature = 14; // in °C
let isRaining = false;
let windSpeed = 25; // in km/h

let advice = "";

if (isRaining) {
  advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
  advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
  advice = "Too cold and windy — stay home.";
} else {
  advice = "Perfect day for a walk.";
}

console.log("Advice:", advice);
