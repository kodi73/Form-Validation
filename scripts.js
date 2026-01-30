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

    if (isEmailValid && isCountryValid && isZipValid) {
        console.log("Email, country and zip fields are valid. Proceed.");
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

emailInput.addEventListener("input", validateEmail);
emailInput.addEventListener("blur", validateEmail);

countryInput.addEventListener("input", validateCountry);
countryInput.addEventListener("blur", validateCountry);

zipInput.addEventListener("input", validateZip);
zipInput.addEventListener("blur", validateZip);

console.log("Form Validation project loaded successfully.");