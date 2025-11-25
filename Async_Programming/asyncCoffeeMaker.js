// Simulate delay with random failure
function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Water boiled") : reject("Boiling failed");
    }, 1000);
  });
}

function brewCoffee() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Coffee brewed") : reject("Brewing failed");
    }, 1500);
  });
}

function pourIntoCup() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Coffee poured") : reject("Pouring failed");
    }, 1000);
  });
}

// Chain the process
boilWater()
  .then(result => {
    console.log(result);
    return brewCoffee();
  })
  .then(result => {
    console.log(result);
    return pourIntoCup();
  })
  .then(result => {
    console.log(result);
    console.log("Coffee ready for the team!");
  })
  .catch(error => {
    console.error("Process failed:", error);
  });
