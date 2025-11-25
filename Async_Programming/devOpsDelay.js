function serverA() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Server A deployed") : reject("Server A failed");
    }, 2000);
  });
}

function serverB() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.9 ? resolve("Server B deployed") : reject("Server B failed");
    }, 3000);
  });
}

// Track all completions
Promise.all([serverA(), serverB()])
  .then(results => {
    console.log("Deployment completed for all servers:");
    console.log(results);
  })
  .catch(error => {
    console.error("Deployment error:", error);
  });

// Track fastest response
Promise.race([serverA(), serverB()])
  .then(result => {
    console.log("Fastest response:", result);
  })
  .catch(error => {
    console.error("Race error:", error);
  });
