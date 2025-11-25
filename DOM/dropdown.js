const dropBtn = document.getElementById("dropBtn");
const options = document.getElementById("options");

// Toggle dropdown
dropBtn.addEventListener("click", () => {
  options.style.display = options.style.display === "block" ? "none" : "block";
});

// Select option
options.addEventListener("click", (e) => {
  if (e.target.tagName === "DIV") {
    dropBtn.textContent = e.target.textContent;
    options.style.display = "none";
  }
});

// Close dropdown when clicking outside (capturing phase)
document.addEventListener("click", (e) => {
  if (!dropBtn.contains(e.target) && !options.contains(e.target)) {
    options.style.display = "none";
  }
}, true);
