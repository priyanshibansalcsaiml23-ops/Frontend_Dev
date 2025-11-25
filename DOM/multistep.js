const steps = ["step1", "step2", "step3"].map(id => document.getElementById(id));
const summary = document.getElementById("summary");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passInput = document.getElementById("password");

const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
const error3 = document.getElementById("error3");

function showStep(index) {
  steps.forEach((step, i) => step.classList.toggle("active", i === index));
}

function validateName() {
  if (!nameInput.value.trim()) {
    error1.textContent = "Name is required.";
    return false;
  }
  error1.textContent = "";
  return true;
}

function validateEmail() {
  const email = emailInput.value.trim();
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!valid) {
    error2.textContent = "Enter a valid email.";
    return false;
  }
  error2.textContent = "";
  return true;
}

function validatePassword() {
  if (passInput.value.length < 6) {
    error3.textContent = "Password must be at least 6 characters.";
    return false;
  }
  error3.textContent = "";
  return true;
}

// Navigation
document.getElementById("next1").onclick = () => {
  if (validateName()) showStep(1);
};

document.getElementById("back2").onclick = () => showStep(0);
document.getElementById("next2").onclick = () => {
  if (validateEmail()) showStep(2);
};

document.getElementById("back3").onclick = () => showStep(1);
document.getElementById("finish").onclick = () => {
  if (!validatePassword()) return;
  summary.innerHTML = `
    <h3>Summary</h3>
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Password:</strong> ${"*".repeat(passInput.value.length)}</p>
  `;
  summary.style.display = "block";
  steps.forEach(step => step.style.display = "none");};

// Initial step
showStep(0);