const form = document.querySelector("#registration-form");

const emailInput = document.querySelector("#email");
const countryInput = document.querySelector("#country");
const zipInput = document.querySelector("#zip");
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");


const inputs = [
    emailInput,
    countryInput,
    zipInput,
    passwordInput,
    confirmPasswordInput
]

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const isEmailValid = validateEmail();
    const isCountryValid = validateCountry();
    const isZipValid = validateZip();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if (isEmailValid && isCountryValid && isZipValid && isPasswordValid && isConfirmPasswordValid) {
        console.log("All fields are valid. Proceed.");
    }
    console.log("Form submit intercepted.");
});

inputs.forEach((input) => {
    input.addEventListener("input", () => {
        console.log(`Typing in ${input.id}`);
    });

    input.addEventListener("blur", () => {
        console.log(`Left field ${input.id}`);
    });
});

function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    input.classList.remove("valid");
    input.classList.add("valid");
}

function showSuccess(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = "";
    input.classList.remove("invalid");
    input.classList.add("valid");
}

function validateEmail() {
    if (emailInput.validity.valuemissing) {
        showError(emailInput, "Email Address is required.");
        return false;
    }

    if (emailInput.validity.typeMismatch) {
        showError(emailInput, "Please enter a valid email address.");
        return false;
    }

    showSuccess(emailInput);
    return true;
}

function validateCountry() {
    const value = countryInput.value.trim();

    if (value == "") {
        showError(countryInput, "Country name is required.");
        return false;
    }

    showSuccess(countryInput);
    return true;
}

function validateZip() {
    if (zipInput.validity.valuemissing) {
        showError(zipInput, "Postal Code is required.");
        return false;
    }

    if (zipInput.validity.patternMismatch) {
        showError(zipInput, "Postal code must be 4 - 10 letters and may contain letters, numbers, spaces, or hyphens.");
        return false;
    }

    showSuccess(zipInput);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;
    
    if (value.length == 0) {
        showError(passwordInput, "Password is required.");
        return false;
    }

    if (value.length < 8) {
        showError(passwordInput, "Password must be of atleast 8 characters.");
        return false;
    }

    if (!/[A-Za-z]/.test(value)) {
        showError(passwordInput, "Password must contain atleast one letter.");
        return false;
    }

    if (!/[0-9]/.test(value)) {
        showError(passwordInput, "Password must contain a digit.");
        return false;
    }

    showSuccess(passwordInput);
    return true;
}

function validateConfirmPassword() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    if (confirmPassword.length === 0) {
        showError(confirmPasswordInput, "Please confirm your password.");
        return false;
    }

    if (password !== confirmPassword) {
        showError(confirmPasswordInput, "Passwords do not match.");
        return false;
    }

    showSuccess(confirmPasswordInput);
    return true;
}

emailInput.addEventListener("input", validateEmail);
emailInput.addEventListener("blur", validateEmail);

countryInput.addEventListener("input", validateCountry);
countryInput.addEventListener("blur", validateCountry);

zipInput.addEventListener("input", validateZip);
zipInput.addEventListener("blur", validateZip);

passwordInput.addEventListener("input", validatePassword);
passwordInput.addEventListener("blur", validatePassword);

confirmPasswordInput.addEventListener("input", validateConfirmPassword);
confirmPasswordInput.addEventListener("blur", validateConfirmPassword);

console.log("Form Validation project loaded successfully.");