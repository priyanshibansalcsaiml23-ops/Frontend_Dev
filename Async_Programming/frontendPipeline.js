// Callback Hell version
function design(callback) {
  setTimeout(() => {
    console.log("Design complete");
    callback();
  }, 1000);
}

function build(callback) {
  setTimeout(() => {
    console.log("Build complete");
    callback();
  }, 1000);
}

function test(callback) {
  setTimeout(() => {
    console.log("Test complete");
    callback();
  }, 1000);
}

function deploy(callback) {
  setTimeout(() => {
    console.log("Deploy complete");
    callback();
  }, 1000);
}

function celebrate() {
  setTimeout(() => {
    console.log("Celebrate success!");
  }, 1000);
}

// Nested callbacks (callback hell)
design(() => {
  build(() => {
    test(() => {
      deploy(() => {
        celebrate();
      });
    });
  });
});
// Async/Await version
function delayLog(message) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve();
    }, 1000);
  });
}

async function runPipeline() {
  try {
    await delayLog("Design complete");
    await delayLog("Build complete");
    await delayLog("Test complete");
    await delayLog("Deploy complete");
    await delayLog("Celebrate success!");
  } catch (error) {
    console.error("Pipeline failed:", error);
  }
}

runPipeline();

// Why async/await improves readability:
// It flattens the structure, avoids deeply nested c
