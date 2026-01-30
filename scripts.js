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

    if (isEmailValid && isCountryValid) {
        console.log("Email and country field are valid. Proceed.");
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

emailInput.addEventListener("input", validateEmail);
emailInput.addEventListener("blur", validateEmail);

countryInput.addEventListener("input", validateCountry);
countryInput.addEventListener("blur", validateCountry);

console.log("Form Validation project loaded successfully.");