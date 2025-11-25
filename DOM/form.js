const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const errorName = document.getElementById("errorName");
const errorEmail = document.getElementById("errorEmail");
const errorPassword = document.getElementById("errorPassword");
const successMsg = document.getElementById("successMsg");

// Validate fields
function validateForm() {
  let valid = true;

  // Name required
  if (!nameInput.value.trim()) {
    errorName.textContent = "Name is required.";
    valid = false;
  } else {
    errorName.textContent = "";
  }

  // Email must contain @
  if (!emailInput.value.includes("@")) {
    errorEmail.textContent = "Email must contain '@'.";
    valid = false;
  } else {
    errorEmail.textContent = "";
  }

  // Password min 6 chars
  if (passwordInput.value.length < 6) {
    errorPassword.textContent = "Password must be at least 6 characters.";
    valid = false;
  } else {
    errorPassword.textContent = "";
  }

  return valid;
}

// Prevent default submit if invalid
form.addEventListener("submit", (e) => {
  e.preventDefault(); // block form submission

  if (validateForm()) {
    successMsg.textContent = "Form Submitted Successfully!";
  } else {
    successMsg.textContent = "";
  }
});

// Live error removal when correcting input
[nameInput, emailInput, passwordInput].forEach(input => {
  input.addEventListener("input", () => {
    validateForm(); // re-check on every change
  });
});
