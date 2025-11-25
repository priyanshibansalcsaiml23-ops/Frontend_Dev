const box = document.getElementById("box");
const coords = document.getElementById("coords");

// Track mouse movement
box.addEventListener("mousemove", (e) => {
  coords.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
});

// Drop red dot on double-click
box.addEventListener("dblclick", (e) => {
  const rect = box.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const dot = document.createElement("div");
  dot.className = "dot";
  dot.style.left = `${x - 4}px`;
  dot.style.top = `${y - 4}px`;
  box.appendChild(dot);
});
