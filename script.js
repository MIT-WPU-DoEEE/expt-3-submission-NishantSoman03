console.log("script.js is loaded");
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("myForm").addEventListener("submit", function (event) {
        event.preventDefault();
        var isValid = true;

        // Name validation (max 30 characters)
        var name = document.getElementById("name").value.trim();
        if (name === "" || name.length > 30) {
            document.getElementById("nameError").textContent = "Enter a valid name (max 30 characters).";
            isValid = false;
        } else {
            document.getElementById("nameError").textContent = "";
        }

        // Phone number validation (10 digits)
        var phone = document.getElementById("phone").value.trim();
        if (phone === "" || !/^\d{10}$/.test(phone)) {
            document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
            isValid = false;
        } else {
            document.getElementById("phoneError").textContent = "";
        }

        // Email validation
        var email = document.getElementById("email").value.trim();
        if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            document.getElementById("emailError").textContent = "Enter a valid email.";
            isValid = false;
        } else {
            document.getElementById("emailError").textContent = "";
        }

        // Aadhaar number validation (12 digits)
        var aadhaar = document.getElementById("aadhaar").value.trim();
        if (aadhaar === "" || !/^\d{12}$/.test(aadhaar)) {
            document.getElementById("aadhaarError").textContent = "Enter a valid 12-digit Aadhaar number.";
            isValid = false;
        } else {
            document.getElementById("aadhaarError").textContent = "";
        }

        // Driving license number validation (10 characters)
        var license = document.getElementById("license").value.trim();
        if (license === "" || license.length != 10) {
            document.getElementById("licenseError").textContent = "Enter a valid 10-character driving license number.";
            isValid = false;
        } else {
            document.getElementById("licenseError").textContent = "";
        }

        // Driving history validation (more than 3 years)
        var history = document.getElementById("history").value.trim();
        if (history === "" || history < 3) {
            document.getElementById("historyError").textContent = "Enter a valid driving history (more than 3 years).";
            isValid = false;
        } else {
            document.getElementById("historyError").textContent = "";
        }

        // Age validation (more than 21)
        var age = document.getElementById("age").value.trim();
        if (age === "" || age < 21) {
            document.getElementById("ageError").textContent = "Enter a valid age (more than 21).";
            isValid = false;
        } else {
            document.getElementById("ageError").textContent = "";
        }

        // Hometown validation (max 20 characters)
        var hometown = document.getElementById("hometown").value.trim();
        if (hometown === "" || hometown.length > 20) {
            document.getElementById("hometownError").textContent = "Enter a valid hometown (max 20 characters).";
            isValid = false;
        } else {
            document.getElementById("hometownError").textContent = "";
        }

        // State validation (max 15 characters)
        var state = document.getElementById("state").value.trim();
        if (state === "" || state.length > 15) {
            document.getElementById("stateError").textContent = "Enter a valid state (max 15 characters).";
            isValid = false;
        } else {
            document.getElementById("stateError").textContent = "";
        }

        if (isValid) {
            submitForm();
        }
    });
});