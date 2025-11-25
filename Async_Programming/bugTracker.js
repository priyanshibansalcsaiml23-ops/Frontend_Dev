function getBugs() {
  return new Promise((resolve, reject) => {
    const apiSuccess = Math.random() < 0.8; // 80% success rate
    setTimeout(() => {
      if (apiSuccess) {
        resolve(["UI glitch", "API timeout", "Login failure"]);
      } else {
        reject("API failed to fetch bugs");
      }
    }, 1000);
  });
}

getBugs()
  .then(bugs => {
    console.log("Bug List:");
    console.table(bugs);
  })
  .catch(error => {
    console.error("Error:", error);
  });
