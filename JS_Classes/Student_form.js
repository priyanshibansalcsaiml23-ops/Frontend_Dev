const form = document.getElementById("studentForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault(); // prevent form submission

            // Get values
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const phone = document.getElementById("phone");
            const password = document.getElementById("password");

            // Regex patterns
            const namePattern = /^[A-Za-z]+$/;
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
            const phonePattern = /^[0-9]{10}$/;
            const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/;

            // Validation function
            function validateField(field, pattern) {
                if (pattern.test(field.value)) {
                    field.className = "success";
                } else {
                    field.className = "error";
                }
            }

            // Validate each field
            validateField(name, namePattern);
            validateField(email, emailPattern);
            validateField(phone, phonePattern);
            validateField(password, passwordPattern);
        });