const textArea = document.getElementById("textArea");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");
const MAX = 100;

// Update counter and color
function updateCounter() {
  const length = textArea.value.length;
  const remaining = MAX - length;
  counter.textContent = `Remaining: ${remaining}`;
  counter.className = "";

  if (remaining <= 0) {
    counter.classList.add("danger");
  } else if (remaining <= 20) {
    counter.classList.add("warn");
  }
}

// Prevent typing beyond limit
textArea.addEventListener("keydown", (e) => {
  if (textArea.value.length >= MAX && !["Backspace", "Delete", "ArrowLeft", "ArrowRight"].includes(e.key)) {
    e.preventDefault();
  }
});

// Update on input
textArea.addEventListener("input", () => {
  if (textArea.value.length > MAX) {
    textArea.value = textArea.value.slice(0, MAX);
  }
  updateCounter();
});

// Reset button
resetBtn.addEventListener("click", () => {
  textArea.value = "";
  updateCounter();
});

// Initial state
updateCounter();
